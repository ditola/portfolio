(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
  key: "AIzaSyAL1HS2E17WcQd8j-MdYwGBAAaUBNNixg8",
  v: "weekly",
  // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
  // Add other bootstrap parameters as needed, using camel case.
});

var map;
var markers = [];

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 42.353350, lng: -71.091525 },
    zoom: 14,
    styles: stylesArray
  });
  addMarkers();
}

initMap();

// Request bus data from MBTA
async function getBusLocations(){
  var url = 'https://api-v3.mbta.com/vehicles?api_key=ca34f7b7ac8a445287cab52fb451030a&filter[route]&include=trip';	
  var response = await fetch(url);
  var json     = await response.json();
  return json.data;
}

// var map;
// var markers = [];

// // load map
// function init(){
  // var myOptions = {
//     zoom      : 14,
//     center    : { lat:42.353350,lng:-71.091525},
//     mapTypeId : google.maps.MapTypeId.ROADMAP
// };
// var element = document.getElementById('map');
//     map = new google.maps.Map(element, myOptions);
//     addMarkers();
// }

// Add bus markers to map
async function addMarkers(){
// get bus data
var locations = await getBusLocations();

// loop through data, add bus markers
locations.forEach(function(bus){
    var marker = getMarker(bus.id);		
    if (marker){
        moveMarker(marker,bus);
    }
    else{
        addMarker(bus);			
    }
});

// timer
console.log(new Date());
setTimeout(addMarkers,15000);
}


// function addMarker(bus){
// var icon = getIcon(bus);
// var marker = new google.maps.Marker({
//     position: {
//         lat: bus.attributes.latitude, 
//         lng: bus.attributes.longitude
//     },
//     map: map,
//     icon: icon,
//     id: bus.id
// });
// markers.push(marker);
// }

// function getIcon(bus){
// // select icon based on bus direction
// if (bus.attributes.direction_id === 0) {
//     return 'red.png';
// }
// return 'blue.png';	
// }

// function moveMarker(marker,bus) {
// // change icon if bus has changed direction
// var icon = getIcon(bus);
// marker.setIcon(icon);

// // move icon to new lat/lon
// marker.setPosition( {
//     lat: bus.attributes.latitude, 
//     lng: bus.attributes.longitude
// });
// }

// function getMarker(id){
// var marker = markers.find(function(item){
//     return item.id === id;
// });
// return marker;
// }

// window.onload = init;