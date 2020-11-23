
req = ""
query = ""
results = ""
pw = "JeremyBIA123"  // put your database password here
userName = "jrp85607"
database = "375groupa5"
let currentLocations = []


//Geolocation - this sample gets the current location.
//It also shows the current speed and altitude.

/*
//Set up global variables
let gps;
let longitude = ""
let latitude = ""
*/

function Location() {
  longitude = -79.20989561;
  latitude = 43.73768353;
  btnStopLocation.disabled=true;
  lastRefresh=0;
}

btnSubmitLocation.onclick = function() {
 //This starts scanning the current location. It checks it every 5 seconds.
 //If it gets the data successfully, the handler function is called.
 
 
 //If not, errorCallBack is called.
  options={timeout: 5000, maximumAge: 5000, enableHighAccuracy: true};
  gps=navigator.geolocation.watchPosition(onGeolocation, errorCallBack, options);

 //disable the stop button, enable the start button
  btnSubmitLocation.disabled=true;
  btnStopLocation.disabled=false;
};

btnStopLocation.onclick = function() {
 //Stop checking the current location
  navigator.geolocation.clearWatch(gps);
  btnSubmitLocation.disabled=false;
  btnStopLocation.disabled=true;
};

function onGeolocation(location) {
  longitude = "Longitude: " + location.coords.longitude  +  '\n';
  latitude = "Latitude: " + location.coords.latitude  +  '\n';
  passLongitude = location.coords.longitude
  passLatitude = location.coords.latitude
 //different browsers return the timestamp in different formats.
 //this converts it if necessary.

  if((location.timestamp)) {
    gpsDate=new Date(location.timestamp);
  } else {
    gpsDate=location.timestamp;
  }
  txtEnterLocation.value = longitude + latitude  +  "Timestamp: " + gpsDate;
}

function errorCallBack(Error) {
 //unable to get the geolocation data
  NSB.MsgBox(Error.message);
}


btnAddLocation.onclick = function() {
  query = "INSERT INTO locations (latitude, longitude, google_url) VALUES (" + passLatitude + "," + passLongitude + ", 'test');"
  console.log(query)
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + userName + "&pass=" + pw + "&database=" + database + "&query=" + query)
 
 if (req.status == 200) { //transit worked.
    currentLocations = JSON.parse(req.responseText)
    console.log(currentLocations)
  } else
    console.log("error")

  dataJson = JSON.stringify(currentLocations);
  console.log(dataJson)

}

addLocation.onshow=function(){
  txtEnterLocation_contents.style.height = "calc(100% - 20px)"
}
