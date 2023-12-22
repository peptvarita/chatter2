//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBsBCmk6rIfsCeb1F6go7CQIu-DXIrxpUA",
    authDomain: "kwitter-53c51.firebaseapp.com",
    databaseURL: "https://kwitter-53c51-default-rtdb.firebaseio.com",
    projectId: "kwitter-53c51",
    storageBucket: "kwitter-53c51.appspot.com",
    messagingSenderId: "787215558499",
    appId: "1:787215558499:web:4cbafbf5bef5be2c691556",
    measurementId: "G-NDNRDQG0YV"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name")
  room_name = localStorage.getItem("room_name")
  function send(){
    msg= document.getElementById("msg").value
firebase.database().ref(room_name).push({
name: user_name,meesage:msg,like: 0 
})
document.getElementById("msg").value = ""
  }


  function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          //Start code
          console.log(firebase_message_id);
          console.log(message_data);
name = message_data['name']
message = message_data['message'] 
like = message_data['like']
n = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4> "
m = "<h4 class='message_h4'>"+message+"</h4>"
l = "<button class='btn btn-danger' id="+firebase_message_id+"value="+like+" onclick='updatelike(this.id)'>"
t = "<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>"
          //End code
        }
      });
    });
  }
  getData();
