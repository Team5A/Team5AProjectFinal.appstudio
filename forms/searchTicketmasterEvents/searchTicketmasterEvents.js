// use your own url copied from Postman

let myTicketmasterToken = "ikOXvanwOhK2ISGSp1wPTPPJEGkcdwUA"

function onXHRLoad2() {
    let message = ""
    let apiData = JSON.parse(this.responseText)
    console.log(apiData)
    for (i = 0; i <= apiData._embedded.events.length - 1; i++) {
        console.log(`${apiData._embedded.events[i].name}`)
        message = message + apiData._embedded.events[i].name + "\n"
    }
    txtTicketmasterEvents.value = message
    // if want to add to database call a function here that does that
    // addToDatabase()
}

function callAPI2(URL) {
    var xhttp = new XMLHttpRequest();
    
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url 
    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
    
    // if you DON'T need cors use this code
    //xhttp.open('GET',URL)
    
    // if you need to set the returned data type, use this line of code: 
    //xhttp.setRequestHeader('Content-Type', 'application/json')
    
    // if you need authorization token (stored in myTicketmasterToken) use this line of code: 
    //xhttp.setRequestHeader('Authorization', 'Bearer ' + myTicketmasterToken)
    
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
    xhttp.addEventListener('load', onXHRLoad2)
    xhttp.send()
}

searchActivities.onshow=function(){
  txtNearbyActivities_contents.style.height = "calc(100% - 20px)"
}


btnSearchTicketmaster.onclick=function(){
  
  cityTicketmaster = inptCity.value
  stateTicketmaster = inptState.value
  keywordTicketmaster = inptKeyword.value
  
  let requestURL = "https://app.ticketmaster.com/discovery/v2/events/?apikey=" + myTicketmasterToken + "&size=10&city=" + cityTicketmaster + "&stateCode=" + stateTicketmaster
  /*"https://api.Ticketmaster.com/v3/businesses/search?term=" + termTicketmaster + "&" + "location=" + locationTicketmaster*/
  
  // call the API calling code above
  callAPI2(requestURL)
}


