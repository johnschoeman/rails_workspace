import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import MarkerManager from '../../util/maker_manager_util';

//  google map bounds will be in the following format:
//  {
//    "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
//    "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
//  }

class BenchMap extends Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches)

    this.map.addListener('idle', () => {
      const latLngBounds = this.map.getBounds();
      const northEast = latLngBounds.getNorthEast();
      const southWest = latLngBounds.getSouthWest();

      const bounds = {
        northEast: {
          lat: northEast.lat(),
          lng: northEast.lng()
        },
        southWest: {
          lat: southWest.lat(),
          lng: southWest.lng()
        }
      };
      this.props.updateFilter('bounds', bounds);
    })

    this.map.addListener('click', (e) => {
      const coords = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      }
      this._handleClick(coords);
    })
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  _handleClick(coords) {
    this.props.history.push({
      pathname: "benches/new",
      search: `lat=${coords.lat}&lng=${coords.lng}`
    })
  }

  render() {
    return (
      <div id='map-container' ref={ map => this.mapNode = map}></div>
    );
  }
}

export default withRouter(BenchMap)