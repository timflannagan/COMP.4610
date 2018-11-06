// Create a variable called msg to hold a message that will be shown on the page
// Find the width of the browser window, and put this in the msg variable
var msg = '<h2>browser window</h2><p>width: ' +  window.innerWidth + '</p>';


// Find the height of the window and add it to the msg variable
msg += '<p>height: ' + window.innerHeight + '</p>';



// Find the width of the computer screen and add it to the msg variable
msg += '<h2>screen</h2><p>width: ' +  window.screen.width + '</p>';


// Find the height of the computer screen and add it to the msg variable
msg += '<p>height: ' + window.screen.height + '</p>';


// Create a variable called el to hold the element whose id attribute has a value of info
var el = document.getElementById('info');


// Write the message into that element
el.innerHTML = msg;
