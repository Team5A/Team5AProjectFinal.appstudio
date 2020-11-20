// use your own url copied from Postman

let myYelpToken = "layzp3AYj7Cw__ZSF5gk-_NO4ewXcXdtO9jFDmSlaj93ALFcpG7WuUM4sWu7civ2P_Qw1wSSmDgFCSL0ArhGLdT7LoWA4KtUYq1JethYjJoB3aRLuH88shcC97DjXnYx"

function onXHRLoad() {
    let message = ""
    let apiData = JSON.parse(this.responseText)
    console.log(apiData)
    for (i = 0; i <= apiData.businesses.length - 1; i++) {
        console.log(`${apiData.businesses[i].name}`)
        message = message + apiData.businesses[i].name + "\n"
    }
    txtNearbyActivities.value = message
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
    
    // if you need authorization token (stored in myYelpToken) use this line of code: 
    xhttp.setRequestHeader('Authorization', 'Bearer ' + myYelpToken)
    
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

searchActivities.onshow=function(){
  txtNearbyActivities_contents.style.height = "calc(100% - 20px)"
}


btnSearchActivities.onclick=function(){
  
  locationYelp = inptLocation.value
  termYelp = inptActivity.value
  
  let requestURL = "https://api.yelp.com/v3/businesses/search?term=" + termYelp + "&" + "location=" + locationYelp
  
  // call the API calling code above
  callAPI(requestURL)
}


