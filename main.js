var firebaseConfig = {
    apiKey: "AIzaSyA8r7j2Q1A4AqWx1XFf0C8_XThPZ_cuulo",
    authDomain: "covid-19bot-nmcl.firebaseapp.com",
    databaseURL: "https://covid-19bot-nmcl-default-rtdb.firebaseio.com",
    projectId: "covid-19bot-nmcl",
    storageBucket: "covid-19bot-nmcl.appspot.com",
    messagingSenderId: "575266603500",
    appId: "1:575266603500:web:1fddd991aef23dcf9dc0c9",
    measurementId: "G-66974H0DZ9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}