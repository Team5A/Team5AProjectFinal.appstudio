req = ""
query = ""
results = ""
pw = "JeremyBIA123"  // put your database password here
userName = "jrp85607"
database = "375groupa5"
let currentUserEvents = []
let eventName = ""
let eventDesc = ""

// class values are here:
// http://getbootstrap.com/css/#type-alignment
let columns1 = [
            {title: "Event"},
            {title: "Description"},
            {title: "Date Added"},
            {title: "Date Completed"},
        ];

function Main() {
  updateTable();
  updateFriendsTable();
  }

function updateTable(Events) {
  userDataTable.settings.columns = columns1;
  userDataTable.settings.data = Events;
  userDataTable.build();
  }

/*
userDataTable.onclick = function(event) {
  if(typeof(event.target._DT_CellIndex) != "object" ) { return; }
  var row,col;
  row = event.target._DT_CellIndex.row;
  col = event.target._DT_CellIndex.column;
  NSB.MsgBox("Click on "  +  row  +  ", "  +  col  +  ". Value is '"  +  currentUserEvents[row][col]  +  "'.");
  eventName = currentUserEvents[row][col]
  eventDesc = currentUserEvents[row][col + 1]
  ChangeForm(eventDetails)
};
*/

function loadTable() {
  var table = $("#userDataTable").DataTable();
  table.rows.add(userDataTable.settings.data).draw();
}

swtFlipUser1.onchange = function() {
  userDataTable.settings.ordering = swtFlipUser1.value;
  updateTable();
};

swtFlipUser2.onchange = function() {
  userDataTable.settings.paging = swtFlipUser2.value;
  updateTable();
};

swtFlipUser3.onchange = function() {
  userDataTable.settings.searching = swtFlipUser3.value;
  updateTable();
};


userBucketlist.onshow=function(){
  
  console.log(accountName)

  query = "SELECT event_name, description, date_added, date_completed FROM `events` e INNER JOIN bucketlists b ON e.bucket_id = b.bucket_id INNER JOIN `user` u ON u.user_id = b.user_id WHERE u.username = '" + accountName +  "';"
  console.log(query)

  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + userName + "&pass=" + pw + "&database=" + database + "&query=" + query)

  if (req.status == 200) { //transit worked.
    currentUserEvents = JSON.parse(req.responseText)
    console.log(currentUserEvents)
  } else
    console.log("error")

  dataJson = JSON.stringify(currentUserEvents);
  console.log(dataJson)

  updateTable(currentUserEvents)
}




