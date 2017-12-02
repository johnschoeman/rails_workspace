export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
  }

  updateMarkers(benches) {
    if (Object.keys(benches).length === 0) {
      return null;
    }
    try {
      benches.all_ids
        .filter((benchId) => !this.markers[benchId])
        .forEach((newBenchId) => this.createMarkerFromBench(benches.by_id[newBenchId]))
  
      Object.keys(this.markers)
        .filter((benchId) => !benches.by_id[benchId] )
        .forEach((benchId) => this.removeMarker(this.markers[benchId]))
    } catch (error) {
      console.log(error);
    }
  }

  createMarkerFromBench(bench) {
    const position = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      benchId: bench.id
    });
    marker.addListener('click', () => this.handleClick(bench));
    this.markers[marker.benchId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.benchId].setMap(null);
    delete this.markers[marker.benchId];
  }
}