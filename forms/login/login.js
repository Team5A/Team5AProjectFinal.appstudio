let req = ""
let query = ""
let results = ""
let pw = "JeremyBIA123"  // put your database password here
let userName = "jrp85607"
let database = "375groupa5"

//Grab potential logins from server
let potentialLogins = []

query = `SELECT username, password FROM user;`

req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + userName + "&pass=" + pw + "&database=" + database + "&query=" + query)

if (req.status == 200) { //transit worked.
  //save the sate of the customer 
  potentialLogins = JSON.parse(req.responseText)
  console.log(potentialLogins)
  console.log(potentialLogins[0])
} else
  console.log("error")
 
 //Begin actual login page
 
let accountName = ""
let pass = ""
let loginCheck = []
// test login is: username = aprendeguest0 and pw = 5e77e0fdc5f95d67210a845fc9fdd0 

btnLogin.onclick=function(){
  accountName = inptUsername.value
  pass = inptPassword.value
  
  loginCheck = [accountName, pass]
  console.log(loginCheck)
  
  let found = False
  
  for (i = 0; i <= potentialLogins.length; i++) {
    if (JSON.stringify(loginCheck) == JSON.stringify(potentialLogins[i])) {
      found = True
      ChangeForm(userBucketlist)
      break
    } 
  }
  
  console.log(found)
  
  if (found === False) {
    lblError.textContent = "That login is not recognized. Please try again."
    inptUsername.value = ""
    inptPassword.value = ""
  }
}
