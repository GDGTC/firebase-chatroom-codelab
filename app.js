// define page elements
var username = document.getElementById('username');
var message = document.getElementById('message');
var messages = document.getElementById('messages');
var form = document.getElementById('form');
var login = document.getElementById('login');

// Initialize Firebase
  var config = {
    apiKey: "KEYKEYKEY",
    authDomain: "cledwyn.firebaseapp.com",
    databaseURL: "https://cledwyn.firebaseio.com",
    storageBucket: "firebase-cledwyn.appspot.com",
    messagingSenderId: "1234512345"
  };
  firebase.initializeApp(config);



// define Firebase ref
var messagesRef = firebase.database().ref('messages');

// Retrieve new posts as they are added to Firebase
messagesRef.on("child_added", function(data) {
  var newPost = data.val();
  
  var msg = document.createElement("div");
  msg.innerText = newPost.username + ": " + newPost.message;
  
  messages.appendChild(msg);
  console.log(newPost);

}
