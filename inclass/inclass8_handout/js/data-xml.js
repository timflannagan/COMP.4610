// NOTE: If you run this file locally
// You will not get a server status and the example will fail
// Comment out lines 9 and 35 if you are working locally

var xhr = new XMLHttpRequest();        // Constructor call to initialize an XMLHttpRequest Object

xhr.onload = function() {              // Wait till response is loaded
 // The following conditional check will not work locally - only on a server
if (xhr.status === 200) {             // Check whether the request was successfully received/loaded/accepted

  // THIS PART IS DIFFERENT BECAUSE IT IS PROCESSING XML NOT HTML
  var response = xhr.responseXML;                      // Initialize the response var with the response XML data
  var events = response.getElementsByTagName('event'); // Initialize an event var to be any elements that include <event> tag

  for (var i = 0; i < events.length; i++) {            // Iterate over the elements in events
    var container, image, location, city, newline;      // Initialize necessary variables to handle XML
    container = document.createElement('div');          // Create an empty div element
    container.className = 'event';                      // <div class="event"...

    image = document.createElement('img');              // Create an image tag
    image.setAttribute('src', getNodeValue(events[i], 'map'));
    image.setAttribute('alt', getNodeValue(events[i], 'location'));
    container.appendChild(image);

    location = document.createElement('p');             // Create a paragraph tag
    city = document.createElement('b');
    newline = document.createElement('br');
    city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
    location.appendChild(newline);
    location.insertBefore(city, newline);
    location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
    container.appendChild(location);

    document.getElementById('content').appendChild(container);
  }
}

  function getNodeValue(obj, tag) {                   // Return the first element of @obj with the specific @tag name's value
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
  }

 // THE FINAL PART IS THE SAME AS THE HTML EXAMPLE BUT IT REQUESTS AN XML FILE
};

xhr.open('GET', 'data/data.xml', true);             // Initialize a newly-created request with get method
xhr.send(null);                                     // Send the request to the server
