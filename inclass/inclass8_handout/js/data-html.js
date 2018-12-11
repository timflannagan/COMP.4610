// NOTE: If you run this file locally
// You will not get a server status and the example will fail
// Comment out lines 9 and 11 if you are working locally

var xhr = new XMLHttpRequest();                 // Constructor call to initialize an XMLHttpRequest Object

xhr.onload = function() {                       // Wait till response is loaded
  // The following conditional check will not work locally - only on a server
  if(xhr.status === 200) {                       // Check whether the request was successfully received/loaded/accepted
    document.getElementById('content').innerHTML = xhr.responseText; // Update the #content element's html with the xhr response
  }
};

xhr.open('GET', 'data/data.html', true);        // Initialize a newly-created request with get method
xhr.send(null);                                 // Send the request to the server
