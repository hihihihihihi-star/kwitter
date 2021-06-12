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
  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({purpose:"adding user"});
      
  }