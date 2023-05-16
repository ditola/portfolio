(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "AIzaSyAL1HS2E17WcQd8j-MdYwGBAAaUBNNixg8",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
    libraries: 'geometry'
});

var map;
var markers = [];

// initialize map
async function initMap() {
  
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 42.353350, lng: -71.091525 },
    zoom: 12,
    styles: stylesArray
  });
  
  addMarkers();

  var polylineString = 'ifraG`}qpLk@_@qA_A_As@iCFqA@uDDm@?[@??_DBiDBwA?Q@m@?k@@wA?[@??cC@uCFqCDyCB[???_C@oED??Q?{ABgAB}B@S???eBBuB?kDAmG@}CAaAAS@WCYGkEgBe@[A???aAi@sAu@cBcAYS??IEEEcAiA_@cBo@qE??M}@kAc@g@Wa@MoBaAm@S{Aw@e@Q??i@Uu@oAa@iAEI_@y@??]u@g@_AYo@u@_B{@iB??KSw@cB[o@_AqB??ISaCcF_@u@??_@u@iB{D??KSgDmH??KQw@_BcCiF??KUk@mA}BqC??MOcCwCqA{A??MMwEyF??MOiAsA[_@mDeEGGMQY]gC{Ca@c@]c@q@y@e@o@??MOuAaBaBoBqA{A??MOmBgA}BiAs@[k@YOGEE??y@c@q@_@aCsAaAg@a@SyA}@tCoI??`AsCvA}D@k@SmBYgBGc@]}A??EWMsACcA@m@HwAXaBV}AF}@@e@?i@??A}DNy@Zy@DKDU@O@]CWEWEOOYc@UWSMUIQo@qBSw@Uo@EK??KU[a@HcAFs@P{@XgAf@iB\\wAXmA??HWd@iBb@iBRgADs@DeAB}ABq@??DaAs@KgB_@gAS}ASsAGuA?kAB]Ac@Aa@C_@GYKOAO@QAs@gBiCeA';
  var decodedPath = google.maps.geometry.encoding.decodePath(polylineString);
  var polyline = new google.maps.Polyline({
    path: decodedPath,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 0.6,
    strokeWeight: 2
  });
  polyline.setMap(map);
}

// Add bus markers
async function addMarkers(){
  // get bus location
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

// Request bus data from MBTA
async function getBusLocations(){
  var API = 'ca34f7b7ac8a445287cab52fb451030a';
  var url = `https://api-v3.mbta.com/vehicles?api_key=${API}&filter[route_type]=3&filter[route]=117&include=trip`;	
  var response = await fetch(url);
  var json     = await response.json();
  console.log(json.data);
  return json.data;
}

function addMarker(bus){
  var icon = getIcon(bus);
  var marker = new google.maps.Marker({
      position: {
          lat: bus.attributes.latitude, 
          lng: bus.attributes.longitude
      },
      map: map,
      icon: icon,
      id: bus.id
  });
  markers.push(marker);
}

function getIcon(bus){
  // select icon based on bus direction
  if (bus.attributes.direction_id === 0) {
      return 'red.png';
  }
  return 'blue.png';	
}

function moveMarker(marker,bus) {
  // change icon if bus has changed direction
  var icon = getIcon(bus);
  marker.setIcon(icon);

  // move icon to new lat/lon
  marker.setPosition( {
      lat: bus.attributes.latitude, 
      lng: bus.attributes.longitude
  });
}

function getMarker(id){
  var marker = markers.find((item) => {
      return item.id === id;
  });
  return marker;
}

window.onload = initMap();