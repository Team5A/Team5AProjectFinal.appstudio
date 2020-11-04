
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
  if(s == "Journal Entry") {
  ChangeForm(journalEntry)
  }
  if(s == "Add Location") {
  ChangeForm(addLocation)
  }
};


