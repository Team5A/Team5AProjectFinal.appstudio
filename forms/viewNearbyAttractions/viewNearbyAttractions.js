// requestURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCE-pjULPU_Gp5Qf0qL39tVsdJBX55J0cY&location=41.265330,-95.949360&type=tourist_attraction&radius=50000"let 
requestURL = ""


let gps;
let longitude1 = ""
let latitude1 = ""


let passLongitude2 = ""
let passLatitude2 = ""

function onGeolocation1(location) {
  longitude = "Longitude: " + location.coords.longitude  +  '\n';
  latitude = "Latitude: " + location.coords.latitude  +  '\n';
 passLongitude2 = location.coords.longitude
 passLatitude2 = location.coords.latitude
}


function onXHRLoad() {
    let message = ""
    let apiData = JSON.parse(this.responseText)
    for (i = 0; i <= apiData.results.length - 1; i++) {
        console.log(`${apiData.results[i].name}`)
        message = message + apiData.results[i].name + "\n"
    }
    txtTouristAttractions.value = message
    // if want to add to database call a function here that does that
    // addToDatabase()
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url 
    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
    
    // if you DON'T need cors use this code
    //xhttp.open('GET',URL)
    
    // if you need to set the returned data type, use this line of code: 
    //xhttp.setRequestHeader('Content-Type', 'application/json')
    
    // if you need authorization token (stored in myToken) use this line of code: 
    // xhttp.setRequestHeader('Authorization', 'Bearer ' + myToken)
    
    // if you need a key and it's not in the url use code in one of the following
    // examples (think of headers as parameters)
    // or just use the Postman url which has all the parameters already added like I did here. 
    
    /*
    xhttp.setRequestHeader('key','AIzaSyCE-pjULPU_Gp5Qf0qL39tVsdJBX55J0cY')
    xhttp.setRequestHeader('location','41.276900,-95.942310')
    xhttp.setRequestHeader('rankby','distance')
    xhttp.setRequestHeader('type','restaurant')
    */

    // make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}


btnTouristAttractions.onclick=function(){
  // call the API calling code above
  callAPI(requestURL)
}

function onGeolocation(location) {
 var s;
  s = "Longitude: " + location.coords.longitude  +  '\n';
  s = s  +  "Latitude: " + location.coords.latitude  +  '\n';
  s = s  +  "Speed: " + location.coords.speed  +  " ";
  s = s  +  "Altitude: " + location.coords.altitude  +  '\n';
  s = s  +  "Accuracy: " + location.coords.accuracy  +  " ";
  s = s  +  "Accuracy(altitude): " + location.coords.altitudeAccuracy  +  " "  +  '\n';
 //different browsers return the timestamp in different formats.
 //this converts it if necessary.
  //lblVNA.value= location.coords.longitude 
  //lblVNA2.value = location.coords.latitude
  longitude1 = location.coords.longitude
  latitude1 = location.coords.latitude
}

function errorCallBack(Error) {
 //unable to get the geolocation data
  NSB.MsgBox(Error.message  +  '\n'  +  "Show default map...");
  ShowMap(latitude, longitude);
}

viewNearbyAttractions.onshow=function(){
  options={timeout: 5000, maximumAge: 5000, enableHighAccuracy: true};
  gps=navigator.geolocation.watchPosition(onGeolocation, errorCallBack, options);
  //lblVNA.value = latitude
  //lblVNA2.value = longitude
  //latitude=lblVNA.value
  //longitude=lblVNA2.value
  console.log(navigator.geolocation.watchPosition)
  console.log(gps)
  console.log(latitude1)
  console.log(longitude1)
  console.log(requestURL)
  requestURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCE-pjULPU_Gp5Qf0qL39tVsdJBX55J0cY&location=" + latitude1 + "," + longitude1 + "&type=tourist_attraction&radius=50000"
  //requestURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCE-pjULPU_Gp5Qf0qL39tVsdJBX55J0cY&location=41.265330,-95.949360&type=tourist_attraction&radius=50000"
  
  }








