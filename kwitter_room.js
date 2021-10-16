
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD7jVG9MikaiUYL5GfAiF_hnqhwBNJ2FJw",
      authDomain: "kwitter-17fd1.firebaseapp.com",
      databaseURL: "https://kwitter-17fd1-default-rtdb.firebaseio.com",
      projectId: "kwitter-17fd1",
      storageBucket: "kwitter-17fd1.appspot.com",
      messagingSenderId: "957427040336",
      appId: "1:957427040336:web:2fae3f046f5a579e015155"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_room_name"
        });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name= " + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
 } 

 function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
 }


 