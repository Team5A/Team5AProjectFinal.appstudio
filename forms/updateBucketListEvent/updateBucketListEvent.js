req = ""
query = ""
results = ""
pw = "JeremyBIA123"  // put your database password here
userName = "jrp85607"
database = "375groupa5"

updateBucketListEvent.onshow = function() {
  ddBucketlistUpdate.clear()
  query = "SELECT `event_name` from `events`"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + userName + "&pass=" + pw + "&database=" + database + "&query=" + query)
  
if (req.status == 200) { //transit worked.
    results = JSON.parse(req.responseText)
    }
  if (results.length == 0) {
  } else {
    //a loop that adds all the customers in the array to the dropdown.
    for (i = 0; i <= results.length - 1; i++)
      ddBucketlistUpdate.addItem(results[i])
  }
}

let oldbucketname = ""
let oldbucketdate = ""
let oldbucketdescription = ""

ddBucketlistUpdate.onclick = function(s) {
  if (typeof(s) == "object")
    return
  else {
    ddBucketlistUpdate.value = s
      oldbucketname = s
      oldbucketdate = s
      oldbucketdescription = s
  }
}

btnUpdateItem.onclick = function() {
  let newbucketname = inptNewBucketlistName.value
  let newbucketdate = inptNewCurrentDate.value
  let newbucketdescription = inptNewBucketlistDescription.value
   

  let found = false
  for (i = 0; i <= results.length - 1; i++)
    // console.log(`FOUND IS false and name is ${results[i]}`)
    if (oldbucketname  == results[i]) {
        //oldbucketid == results[i] 
        //oldbucketdate == results[i] 
        //oldbucketdescription == results[i]) 
      found = true
      break
    }
  if (found == false)
  console.log("That event name is not in the database.")
  else if (found == true) {
   
   //query = `UPDATE events SET event_name = '${newbucketname}' WHERE event_name = '${oldbucketname}'  description = '${newbucketdescription}' WHERE description = '${oldbucketdescription}' bucket_id = '${newbucketid}' WHERE bucket_id = '${oldbucketid}' date_added = '${newbucketdate}' WHERE date_added = '${oldbucketdate}'`
  query = "UPDATE events SET event_name = '" + newbucketname  +   "', description = '" + newbucketdescription + "', date_added = '" + newbucketdate + "' WHERE event_name = '" + oldbucketname + "'"

    
  //UPDATE events SET event_name = 'run with the bulls test' , description =  'testdescription', date_added = '2020-11-19'
// WHERE event_name = 'run with the bulls';
    
    
    //alert(query)
     req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + userName + "&pass=" + pw + "&database=" + database + "&query=" + query)

  if (req.status == 200) { //transit worked.
      if (req.responseText == 500) { // means the update succeeded
      console.log(`You have successfully updated the bucketlist item!`)
        // reset controls to original state
        inptNewBucketlistName.value = ""
        inptNewBucketlistDescription.value = ""
        inptNewCurrentDate.value = ""
        ddBucketlistUpdate.value = "Bucketlist Item"
      } else
        console.log(`There was a problem changing the Events name.`)
    } else
      // transit error
      console.log(`Error: ${req.status}`);
  }
  // found is true
  // loat txtarea
  query = "SELECT `event_name` from `events`"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + userName + "&pass=" + pw + "&database=" + database + "&query=" + query)
  
    if (req.status == 200) { //transit worked.
    results = JSON.parse(req.responseText)
  }
 if (results.length == 0) {
    // if no customers in a table brings back this message
    console.log("There are no customers in tabel.")
  } else {
    // putting new list of customers into txtDelete
    let updateBucketListEvent = ""
    for (i = 0; i <= results.length - 1; i++)
      updateBucketListEvent = updateBucketListEvent + results[i] + "\n"
    // change value of text area
    txtUpdatedEvent.value = updateBucketListEvent
  }
}
