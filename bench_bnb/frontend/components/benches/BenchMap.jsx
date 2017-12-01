import React, { Component } from 'react';

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
      this.props.updateBounds(bounds);
    })
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render() {
    return (
      <div id='map-container' ref={ map => this.mapNode = map}></div>
    );
  }
}

export default BenchMap