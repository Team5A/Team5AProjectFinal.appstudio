
navigation.onshow=function(){
  NSBPage.appendChild(headerGlobal)
}


hamburgerGlobal.onclick = function(s) {
  if(typeof(s) == "object") {
    return;
  }
  //NSB.MsgBox("Choice is "  +  s);
  if(s == "User Bucketlist") {
  ChangeForm(userBucketlist)
  }
  if(s == "Friends Bucketlists") {
  ChangeForm(friendsBucketlist)
  }
  if(s == "Add Bucketlist Event") {
  ChangeForm(addBucketlistEvent)
  }
  if(s == "Update Bucketlist Event") {
  ChangeForm(updateBucketListEvent)
  }
  if(s == "Add Location") {
  ChangeForm(addLocation)
  }
  if(s == "Search Nearby Activities") {
  ChangeForm(searchActivities)
  }
};


