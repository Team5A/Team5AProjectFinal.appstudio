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
let oldbucketid = ""
let oldbucketdate = ""
let oldbucketdescription = ""

ddBucketlistUpdate.onclick = function(s) {
  if (typeof(s) == "object")
    return
  else {
    ddBucketlistUpdate.value = s
      oldbucketname = s
      oldbucketid = s
      oldbucketdate = s
      oldbucketdescription = s
  }
}

btnUpdateItem.onclick = function() {
  let newbucketname = inptNewBucketlistName.value
  let newbucketid = inptNewUserID.value
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
    query = `UPDATE events SET event_name = '${newbucketname}' WHERE event_name = '${oldbucketname}', description = '${newbucketdescription}' WHERE description = '${oldbucketdescription}', bucket_id = '${newbucketid}' WHERE bucket_id = '${oldbucketid}', date_added = '${newbucketdate}' WHERE date_added = '${oldbucketdate}'`
    //alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + userName + "&pass=" + pw + "&database=" + database + "&query=" + query)

  if (req.status == 200) { //transit worked.
      if (req.responseText == 500) { // means the update succeeded
        // reset controls to original state
        inptNewUserID.value = ""
        inptNewBucketlistName.value = ""
        inptNewBucketlistDescription.value = ""
        inptNewCurrentDate.value = ""
        // ddBucketlistUpdate.value = "Event"
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
}