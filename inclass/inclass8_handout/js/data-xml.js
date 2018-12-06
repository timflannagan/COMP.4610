// NOTE: If you run this file locally
// You will not get a server status and the example will fail
// Comment out lines 9 and 35 if you are working locally

var xhr = new XMLHttpRequest();        // comment here

xhr.onload = function() {              // comment here
 // The following conditional check will not work locally - only on a server
if (xhr.status === 200) {             // comment here

  // THIS PART IS DIFFERENT BECAUSE IT IS PROCESSING XML NOT HTML
  var response = xhr.responseXML;                      // comment here
  var events = response.getElementsByTagName('event'); // comment here

  for (var i = 0; i < events.length; i++) {            // comment here
    var container, image, location, city, newline;      // comment here
    container = document.createElement('div');          // comment here
    container.className = 'event';                      // comment here

    image = document.createElement('img');              // comment here
    image.setAttribute('src', getNodeValue(events[i], 'map'));
    image.setAttribute('alt', getNodeValue(events[i], 'location'));
    container.appendChild(image);

    location = document.createElement('p');             // comment here
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

  function getNodeValue(obj, tag) {                   // comment here
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
  }

 // THE FINAL PART IS THE SAME AS THE HTML EXAMPLE BUT IT REQUESTS AN XML FILE
};

xhr.open('GET', 'data/data.xml', true);             // comment here
xhr.send(null);                                     // comment here