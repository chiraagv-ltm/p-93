//YOUR FIREBASE LINKS
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
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
name:user_name,
message=msg,
like:0
      });
      document.getElementById("msg").value="";
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
//End code
      } });  }); }
getData();



function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
 }