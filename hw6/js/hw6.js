function validate_input(row1, row2, col1, col2) {
  if (row1.value === "" || row2.value === "") {
    alert("Empty value(s) entered for row bounds.");
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
  var table = document.getElementById('my_table');
  var row1 = document.getElementById('row1');
  var row2 = document.getElementById('row2');
  var col1 = document.getElementById('col1');
  var col2 = document.getElementById('col2');

  var row_val = row1.value;
  var col_val = col1.value;

  if (!validate_input(row1, row2, col1, col2)) {
    return;
  }

  if (table.rows.length) {
    table.innerHTML = "";
  }

  var first_row = table.insertRow(0);

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
    // var row_header = document.createElement("TH");
    //
    // row_header.innerHTML = row_val;
    // curr_row.appendChild(row_header);

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
