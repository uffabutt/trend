var map;
var coollocations = [];
var MapMarkers = [];
//class 
var MapMarker = /** @class */ (function () {
    function MapMarker(address) {
        this.Address = address;
    }
    return MapMarker;
}());
var Toronto = { lat: 43, lng: -79.38 };
var initMapConfig;
$.ajax({
    url: './AClocations.json',
    dataType: 'json',
    success: function (data) {
        //data is an array of object 
        //for(let cl of data){
        //  coollocations.push(cl);
        //}
        //console.log(coollocations);
    }
});
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), initMapConfig);
    for (var _i = 0, coollocations_1 = coollocations; _i < coollocations_1.length; _i++) {
        var cl = coollocations_1[_i];
        var newMapMarker = new MapMarker(cl.address);
        MapMarkers.push(newMapMarker);
    }
    var markersIndex = 0;
    function setLatitudeLongitude() {
        if (map)
            ;
    }
    setTimeout(function () { console.log(mapMarkers[markersIndex]); }, 1000);
    MapMarkers[markersIndex].Coordinates = getLatLng(mapMarkers[markersIndex].Address);
    console.log(mapMarkers[markersIndex]);
}
//addMarker(Toronto);
//getLatLng("1 Yonge Street Toronto,Ontario,Canada");
function getLatLng(address) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function (results, status) {
    });
    if (status === 'OK') {
        console.log('Latitude: ' + results[0].geometry.location.lat());
        console.log('Longitude: ' + results[0].geometry.location.lng());
        return { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() };
    }
    else {
        setInterval(getLatLng(address), 1000);
    }
}
;
function addMarker(coord) {
    //will place map marker based on coordinates 
    var newMarker = new google.maps.Marker({
        position: coord,
        map: map,
        title: 'Cooling Places in Toronto'
    });
}
