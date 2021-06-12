
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCTAeMUY3O93RNIYL94Nu-UZRPxlaLKv64",
      authDomain: "kwitter-2a5e7.firebaseapp.com",
      databaseURL: "https://kwitter-2a5e7-default-rtdb.firebaseio.com",
      projectId: "kwitter-2a5e7",
      storageBucket: "kwitter-2a5e7.appspot.com",
      messagingSenderId: "219064583521",
      appId: "1:219064583521:web:2408a3f6ee0256b0f4f120",
      measurementId: "G-J6HPCD2X7P"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
function getData() {firebase.database().ref("/").on('value', function(snapshot) 
   {document.getElementById("output").innerHTML = "";
   snapshot.forEach(function(childSnapshot) 
   {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name-" + Room_names);
     row="<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div> <hr>";
     document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function addRoom() { room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
  localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html"; 
}

function redirectToRoomName(name) 
{ console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
       }
