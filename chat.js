// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBHh31bCzG4B92N5bmvbc3aY737GBvxW_M",
    authDomain: "chatapp-9c20d.firebaseapp.com",
    databaseURL: "https://chatapp-9c20d-default-rtdb.firebaseio.com",
    projectId: "chatapp-9c20d",
    storageBucket: "chatapp-9c20d.appspot.com",
    messagingSenderId: "902290848789",
    appId: "1:902290848789:web:a4785f8ff65ca52ff7e21c"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



