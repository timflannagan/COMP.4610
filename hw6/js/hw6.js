/*
Name: Tim Flannagan
Email: timothy_flannagan@student.uml.edu
Date: 11/15/18
Class: GUI 1 (Fall 2018)

Sources:
1. NaN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
*/

function validate_input(row1, row2, col1, col2) {
  /* Validate the user input given the lower and upper boudns of row/column input */
  if (isNaN(row1.value) || isNaN(row2.value)) {
    alert("Incorrect input entered for row bounds. Enter an integer");
    return false;
  }

  if (isNaN(col1.value) || isNaN(col2.value)) {
    alert("Incorrect input entered for column bounds. Enter an integer");
    return false;
  }

  if (row1.value === "" || row2.value === "") {
    alert("Empty value(s) entered for row bounds.");
    return false;
  }

  if (col1.value === "" || col2.value === "") {
    alert("Empty value(s) entered for column bounds.");
    return false;
  }
  if (Number(row1.value) > Number(row2.value)) {
    row2.style.backgroundColor = "rgb(218, 143, 180)";
    alert('Upper bound row value needs to be less than lower bound row value');
    return false;
  }

  if (Number(col1.value) > Number(col2.value)) {
    col2.style.backgroundColor = "rgb(218, 143, 180)";
    alert("Upper bound col value needs to be less than lower bound col value; You entered: " + col1.value + " and " + col2.value);
    return false;
  }

  return true;
}

function create_table() {
  /* Create a <table> given user input and populate cells with correct multiplication entry */
  var table = document.getElementById('my_table');
  var row1 = document.getElementById('row1');
  var row2 = document.getElementById('row2');
  var col1 = document.getElementById('col1');
  var col2 = document.getElementById('col2');

  var row_val = row1.value;
  var col_val = col1.value;
  var first_row = table.insertRow(0);

  // check if user entered invalid input
  if (!validate_input(row1, row2, col1, col2)) {
    document.getElementById('form').reset();
    return false;
  }

  // check if there's already a table displayed on the page; reset the HTML
  if (table.rows.length != 1) {
    $('#my_table tbody').empty();
    var first_row = table.insertRow(0);
  }

  // console.lo9g()

  // populate the headings for the first row
  for (var i = 0; i < 1; i++) {
    for (var j = 0; j < (col2.value - col1.value) + 2; j++) {
      var first_col = first_row.insertCell();

      if (j === 0) {
        first_col.innerHTML = "";
      } else {
        first_col.innerHTML = col_val;
        col_val++;
      }
    }
  }

  col_val = col1.value;

  // iterate over the values entered in the form data: create row first then col data.
  for (var i = 1; i < (row2.value - row1.value) + 2; i++) {
    var curr_row = table.insertRow(i);

    for (var j = 0; j < (col2.value - col1.value) + 2; j++) {
      var curr_col = curr_row.insertCell(j);

      if (j == 0)
      {
        curr_col.innerHTML = row_val;
      } else {
        curr_col.innerHTML = row_val * col_val;
        col_val++;
      }
    }

    col_val = col1.value;
    row_val++;
  }

}
