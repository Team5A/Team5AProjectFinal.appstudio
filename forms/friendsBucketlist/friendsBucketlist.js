
req = ""
query = ""
results = ""
pw = "JeremyBIA123"  // put your database password here
userName = "jrp85607"
database = "375groupa5"

let currentFriendsEvents = []
let eventNameFriend = ""
let eventDescFriend = ""

// class values are here:
// http://getbootstrap.com/css/#type-alignment
let columnsFriendsEvents = [
            {title: "Friend Name"},
            {title: "Event"},
            {title: "Description"},
            {title: "Date Added"},
            {title: "Date Completed"}
        ];
/*
function MainFriends() {
  updateFriendsTable();
  }
*/
function updateFriendsTable(Events) {
  friendsDataTable.settings.columns = columnsFriendsEvents;
  friendsDataTable.settings.data = Events;
  friendsDataTable.build();
  }


friendsDataTable.onclick = function(event) {
  if(typeof(event.target._DT_CellIndex) != "object" ) { return; }
  var row,col;
  row = event.target._DT_CellIndex.row;
  col = event.target._DT_CellIndex.column;
  NSB.MsgBox("Click on "  +  row  +  ", "  +  col  +  ". Value is '"  +  currentFriendsEvents[row][col]  +  "'.");
  eventNameFriend = currentFriendsEvents[row][col]
  eventDescFriend = currentFriendsEvents[row][col + 1]
  ChangeForm(eventDetails)
};




btnFriends1.onclick = function() {
  currentFriendsEvents[0][0] += "+"; //Just to make a change to the table
  updateFriendsTable();
};

btnFriends2.onclick = function() {
  var table = $("#friendsDataTable").DataTable();
  table.clear();

  friendsDataTable.settings.data = JSON.parse(dataJson);
  friendsDataTable.settings.data[0][0] = "George";
  setTimeout(loadFriendsTable, 50);
};

function loadFriendsTable() {
  var table = $("#friendsDataTable").DataTable();
  table.rows.add(friendsDataTable.settings.data).draw();
}

btnFriends3.onclick = function() {
  var table;
   table = $("#friendsDataTable").DataTable();
   $(table.rows().nodes()).removeClass("highlight");
   $(table.cells().nodes()).removeClass("highlight");
   $(table.column(2).nodes()).addClass("highlight");
};

btnFriends4.onclick = function() {
 var table;
   table = $("#friendsDataTable").DataTable();
   $(table.rows().nodes()).removeClass("highlight");
   $(table.cells().nodes()).removeClass("highlight");
   $(table.row(2).nodes()).addClass("highlight");
};

swtFlip1.onchange = function() {
  friendsDataTable.settings.ordering = swtFlip1.value;
  updateFriendsTable();
};

swtFlip2.onchange = function() {
  friendsDataTable.settings.paging = swtFlip2.value;
  updateFriendsTable();
};

swtFlip3.onchange = function() {
  friendsDataTable.settings.searching = swtFlip3.value;
  updateFriendsTable();
};


friendsBucketlist.onshow=function(){
  
  console.log(accountName)
  
  /*
  accountName = "JPlummer"
  query = "SELECT event_name, description, date_added, date_completed FROM `events` e INNER JOIN bucketlists b ON e.bucket_id = b.bucket_id INNER JOIN `user` u ON u.user_id = b.user_id WHERE u.username = '" + accountName +  "';"
  */
  query = "SELECT CONCAT(first_name, ' ',last_name) AS 'Name', e.event_name, e.description, e.date_added, e.date_completed FROM `events` e INNER JOIN bucketlists b ON e.bucket_id = b.bucket_id INNER JOIN `user` u ON u.user_id = b.user_id INNER JOIN friends f ON f.user_id = u.user_id WHERE f.friend_id IN (SELECT user_id FROM `user` WHERE username = '" + accountName + "');"
  
  console.log(query)

  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + userName + "&pass=" + pw + "&database=" + database + "&query=" + query)

  if (req.status == 200) { //transit worked.
    currentFriendsEvents = JSON.parse(req.responseText)
    console.log(currentFriendsEvents)
  } else
    console.log("error")

  dataJson = JSON.stringify(currentFriendsEvents);
  console.log(dataJson)

  updateFriendsTable(currentFriendsEvents)
}




