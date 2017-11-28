export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};

    this.updateMarkers = this.updateMarkers.bind(this);
  }

  updateMarkers(benches) {
    console.log(benches)
    if (!benches.all_ids) {
      return null 
    }
    benches.all_ids.forEach((benchId) => {
      if(!this.markers[benchId]) {
        let bench = benches.by_id[benchId]
        let latLng = {lat: bench.lat, lng: bench.lng}
        let marker = new google.maps.Marker({
          position: latLng
        });
        this.markers[benchId] = marker
        marker.setMap(this.map);
      }
    })
  }

  createMakerFromBench(bench) {

  }
}