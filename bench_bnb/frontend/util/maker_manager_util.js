export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;

    this.createMarkerFromBench = this.createMarkerFromBench.bind(this);
  }

  updateMarkers(benches) {
    if (Object.keys(benches).length === 0) {
      return null;
    }
    benches.all_ids
      .filter((benchId) => !this.markers[benchId])
      .forEach((newBenchId) => this.createMarkerFromBench(benches.by_id[newBenchId]))

    Object.keys(this.markers)
      .filter((benchId) => { !benches.by_id[benchId] })
      .forEach((benchId) => removeMarker(this.makers[benchId]))

    console.log(this.markers)
  }

  createMarkerFromBench(bench) {
    const position = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      benchId: bench.id
    });
    marker.addListener('click', () => this.handleClick(bench));
    this.markers[bench.id] = marker;
  }

  removeMarker(maker) {
    marker.setMap(null);
    delete this.markers[marker.benchId]
  }
}