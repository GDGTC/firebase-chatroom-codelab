var username = document.getElementById('username');
var message = document.getElementById('message');
var messages = document.getElementById('messages');
var form = document.getElementById('form');
var login = document.getElementById('login');

var baseRef = new Firebase("https://gdgfbcodelab.firebaseIO.com");
var messagesRef = baseRef.child("messages");


// Retrieve new posts as they are added to Firebase
messagesRef.on("child_added", function(snapshot) {
  var newPost = snapshot.val();
  
  var msg = document.createElement("div");
  msg.innerText = newPost.username + ": " + newPost.message;
  
  messages.appendChild(msg);
  console.log(newPost);
  
});


form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log("form submitted");
  messagesRef.push({'username':username.value,'message':message.value});
  
  message.value = "";
});

login.addEventListener('click', function(event) {
  baseRef.authWithOAuthPopup("google", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
      username.value = authData.google.displayName;
      username.disabled = true;
      form.style.display = "block";
      login.style.display = "none";
    }
  });
});
