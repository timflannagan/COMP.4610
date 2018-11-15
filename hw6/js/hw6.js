function validate_input(row1, row2, col1, col2) {
  if (row1.value > row2.value) {
    row2.style.backgroundColor = "red";
    alert('Upper bound row value needs to be less than lower bound row value');
    return false;
  }

  if (col1.value > col2.value) {
    col2.style.backgroundColor = "red";
    alert("Upper bound col value needs to be less than lower bound col value");
    return false;
  }

  return true;
}


function create_table() {
  var table = document.getElementById('my_table');
  var row1 = document.getElementById('row1');
  var row2 = document.getElementById('row2');
  var col1 = document.getElementById('col1');
  var col2 = document.getElementById('col2');

  var row_val = row1.value;
  var col_val = col1.value;

  if (!validate_input(row1, row2, col1, col2)) {
    // clear form data if invalid
    return;
  }

  // iterate over the values entered in the form data: create row first then col data.
  for (var i = 0; i < (row2.value - row1.value) + 1; i++) {
    var header_cell = document.createElement('TH');
    var curr_row = table.insertRow(i);

    for (var j = 0; j < (col2.value - col1.value) + 1; j++) {
      var curr_col = curr_row.insertCell(j);

      curr_col.innerHTML = row_val * col_val;
      col_val++;
    }

    row_val++;
  }

}
