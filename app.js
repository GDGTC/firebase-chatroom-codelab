// define page elements
var username = document.getElementById('username');
var message = document.getElementById('message');
var messages = document.getElementById('messages');
var form = document.getElementById('form');
var login = document.getElementById('login');

// define Firebase ref
var baseRef = new Firebase("https://YOURURL.firebaseIO.com");
var messagesRef = baseRef.child("messages");


// Retrieve new posts as they are added to Firebase
messagesRef.on("child_added", function(snapshot) {
  var newPost = snapshot.val();
  
  var msg = document.createElement("div");
  msg.innerText = newPost.username + ": " + newPost.message;
  
  messages.appendChild(msg);
  console.log(newPost);
  
});
