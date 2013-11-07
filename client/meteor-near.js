
L.Icon.Default.imagePath = 'packages/leaflet/images'

Template.map.rendered = function () {
  var map = L.map('leaflet').setView([54.5, -4], 6);
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18
  }).addTo(map);

  map.on('click', function (evt) {
    
    var cities = CityLocations.find(
      {location:{ $near: evt.latlng, $maxDistance:0.5}} // oh god, radians.
    ).fetch()

    console.log('Cities nearby:',cities.map(function(c){return c.name}))
  })

};
