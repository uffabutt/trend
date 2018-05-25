let map: any; 
let coollocations: any[] =[];
let MapMarkers : MapMarker[] =[];

//interface 
interface LatLng{
    lat: number, 
    lng: number, 
}

interface GoogleMapsConfig{
    center: LatLng,
    zoom: number
}

//class 
class MapMarker{
    Address: string; 
    Coordinates: LatLng;

    public constructor(address: string){
        this.Address = address;
    }
}


let Toronto : LatLng = { lat:43, lng: -79.38 }
let initMapConfig: {center: Toronto, zoom:8}

$.ajax({
    url: './AClocations.json',
    dataType: 'json',
    success:function(data){
        //data is an array of object 
        //for(let cl of data){
          //  coollocations.push(cl);
        //}
        //console.log(coollocations);
    }
});
function initMap(){

    map = new google.maps.Map(document.getElementById("map"),
    initMapConfig
);

for (let cl of coollocations){
    let newMapMarker: MapMarker = new MapMarker(cl.address);
    MapMarkers.push(newMapMarker);
}

let markersIndex: number =0;


function setLatitudeLongitude():void {
    if(map)
}
setTimeout(()=>{console.log(mapMarkers[markersIndex]) }, 1000 );
    
    MapMarkers[markersIndex].Coordinates= getLatLng(mapMarkers[markersIndex].Address);

    console.log(mapMarkers[markersIndex]);

}
//addMarker(Toronto);

//getLatLng("1 Yonge Street Toronto,Ontario,Canada");

function getLatLng(address: string) : LatLng{

    let geocoder : object = new google.maps.Geocoder();

    geocoder.geocode({ 'address':address }, function(results,status)

    if (status === 'OK'){
        console.log('Latitude: ' + results[0].geometry.location.lat());
        console.log('Longitude: ' +results[0].geometry.location.lng()); 

        return {lat:results[0].geometry.location.lat(),  lng:results[0].geometry.location.lng()}
    }else{
        setInterval( getLatLng(address), 1000);
    }
    }); 
}

function addMarker(coord: LatLng) : void {
 //will place map marker based on coordinates 

    let newMarker = new google.maps.Marker({
        position: coord, 
        map: map,
        title: 'Cooling Places in Toronto'
    });
}
}