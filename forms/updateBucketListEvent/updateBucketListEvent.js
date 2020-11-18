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
}