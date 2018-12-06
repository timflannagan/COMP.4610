// NOTE: If you run this file locally
// You will not get a server status and the example will fail
// Comment out lines 9 and 11 if you are working locally

var xhr = new XMLHttpRequest();                 // comment here

xhr.onload = function() {                       // comment here
  // The following conditional check will not work locally - only on a server
  if(xhr.status === 200) {                       // comment here
    document.getElementById('content').innerHTML = xhr.responseText; // comment here
  }
};

xhr.open('GET', 'data/data.html', true);        // comment here
xhr.send(null);                                 // comment here