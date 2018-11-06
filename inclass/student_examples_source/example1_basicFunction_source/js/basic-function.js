// Create a variable called msg to hold a new message
var msg = 'verynicesupertightsolid';

// Create a function to update the content of the element whose id attribute has a value of message
function updateMessage() {
   document.getElementById('message').textContent = msg;
}

// Call the function
updateMessage();
