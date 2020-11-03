req = ""
query = ""
results = ""
pw = "bomber99"  // put your database password here
userName = "bkm91466"
database = "375groupa5"

//Geolocation - this sample gets the current location.
 //It also shows the current speed and altitude.

 //Set up global variables
var gps;

function Main() {
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
 var s;
  s = "Longitude: " + location.coords.longitude  +  '\n';
  s = s  +  "Latitude: " + location.coords.latitude  +  '\n';
 
 //different browsers return the timestamp in different formats.
 //this converts it if necessary.


if((location.timestamp)) {
    gpsDate=new Date(location.timestamp);
 } else {
    gpsDate=location.timestamp;
  }
  txtEnterLocation.value = s  +  "Timestamp: " + gpsDate;
}

function errorCallBack(Error) {
 //unable to get the geolocation data
  NSB.MsgBox(Error.message);
}

btnAddLocation.onclick = function() {
  query = "INSERT INTO locations VALUES longitude, latitude"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + userName + "&pass=" + pw + "&database=" + database + "&query=" + query)
  if (req.status == 200) { //transit worked.
    if (req.responseText == 500) { // means the insert succeeded
      NSB.MsgBox("You have successfully added the Customer!")
    } else
     NSB.MsgBox("There was a problem with adding the Location to the database.")
  } else {
    // transit error
    NSB.MsgBox("Error: " + req.status);
  }

  query = "SELECT longitude, latitude from locations"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + userName + "&pass=" + pw + "&database=" + database + "&query=" + query)

  if (req.status == 200) { //transit worked.
    //save the sate of the location
    results = JSON.parse(req.responseText)
  } else {
    // transit error
    NSB.MsgBox(`Error: ${req.status}`);
  }
  }
  