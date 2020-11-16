req = ""
query = ""
results = ""
pw = "JeremyBIA123"  // put your database password here
userName = "jrp85607"
database = "375groupa5"

let bucketname = ""
let bucketid = ""
let bucketdate = ""
let bucketdescription = ""

btnAddEvent.onclick=function(){
  bucketname = inptEventName.value
  bucketid = inptUserID.value
  bucketdate = inptCurrentDate.value
  bucketdescription = inptBucketDescription.value

  query = "INSERT INTO `events` (`bucket_id`, `event_name`, `date_completed`, `date_added`, `completed`, `location_id`, `journal_id`, `description`) VALUES (" + bucketid + ", '" + bucketname + "', NULL, '" + bucketdate + "', NULL, NULL, NULL, '" + bucketdescription +"');"
  console.log(query)
  
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + userName + "&pass=" + pw + "&database=" + database + "&query=" + query)

}


