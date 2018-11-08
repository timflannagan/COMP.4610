// get the list of current li elements in the html doc
var node_list = document.getElementById('page').getElementsByTagName('ul')[0];

// create two nodes
var node1 = document.createElement('li');
var node2 = document.createElement('li');

// create text for each node
var node1_text = document.createTextNode('kale');
var node2_text = document.createTextNode('cream');

// append the respective texts to the node
node1.appendChild(node1_text);
node2.appendChild(node2_text);

// add the first node to the beginning of the list, second to the end of the list
node_list.prepend(node1);
node_list.appendChild(node2);

// add a class of cool to all list items src: https://www.sitepoint.com/add-remove-css-class-vanilla-js/
var elem_list = document.querySelectorAll('li');

for (var i = 0; i < elem_list.length; i++)
{
  elem_list[i].className += "cool";
}

// add the number of items in the list to the heading
document.getElementsByTagName('h2')[0].innerText = "Buy Groceries: " + elem_list.length; 
