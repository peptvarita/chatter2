
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
document.getElementById("user_name").innerHTML="welcome "+user_name+" ! "

function addroom(){
      room_name=document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update({purpose : "addrooms"})
localStorage.setItem("room_name",room_name)
window.location="chat.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname : "+Room_names)
n ="<div class='room_name' id="+Room_names+" onclick='myroom(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=n
      //End code
      });});}
getData();
function myroom(name){
      localStorage.setItem("room_name",name)
      window.location="chat.html"
}
function logout(){
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location="index.html"
}



