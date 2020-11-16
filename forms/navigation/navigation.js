
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
  if(s == "Friends Bucketlist") {
  ChangeForm(friendsBucketlist)
  }
  if(s == "Add Bucketlist Event") {
  ChangeForm(addBucketlistEvent)
  }
  if(s == "Add Location") {
  ChangeForm(addLocation)
  }
  if(s == "Search Activities") {
  ChangeForm(searchActivities)
  }
};


