var username = document.getElementById('username');
var message = document.getElementById('message');
var messages = document.getElementById('messages');
var form = document.getElementById('form');
var login = document.getElementById('login');


var baseRef = new Firebase("https://YOURURL.firebaseIO.com");
var messagesRef = baseRef.child("messages");


// Retrieve new posts as they are added to Firebase
messagesRef.limitToLast(20).on("child_added", function(snapshot) {
  var newPost = snapshot.val();
  
  var msg = document.createElement("div");
  msg.innerText = newPost.username + ": " + newPost.message;
  
  messages.appendChild(msg);
  console.log(newPost);
  
  //scroll to the end
  messages.scrollTop = messages.scrollHeight;  
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log("form submitted");
  messagesRef.push({'username':username.value,'message':message.value});
  
  message.value = "";
  msesage.focus();
});
