// get the values
// function driver(some_obj) {
//   // alert(some_obj.rows);
//   var mul_table = document.getElementById('multable');
//   var row1 = mul_table.insertRow(0);
//   var col1 = row1.insertCol(0);
//   col1.innerHTML = "first"
//   // for (var i = 0; i < mul_table.length; i++) {
//   //
//   // }
//
//   // mul_table.innerHTML = "new cell!";
// }

// need the table heading

// function driver() {
//   var table = "";+
//
//   for (var r = 0; r < 4; r++) {
//     table += '<tr>';
//
//     for (var i = 0; i < 4; i++) {
//       table += '<td>' + i + '</td>';
//     }
//
//     table += '</tr>';
//   }
//
//   document.write('<table>' + table + '</table>');
// }


function create_table() {
  var table = document.getElementById('my_table');
  var row1 = document.getElementById('row1').value;
  var row2 = document.getElementById('row2').value;
  var col1 = document.getElementById('col1').value;
  var col2 = document.getElementById('col2').value;

  var row_val = row1;
  var col_val = col1;

  // iterate over the values entered in the form data
  for (var i = 0; i < (row2 - row1) + 1; i++) {
    var header_cell = document.createElement('TH');
    var curr_row = table.insertRow(i);

    // header_cell.innerHTML = row_val;
    // curr_row.appendChild(header_cell);

    for (var j = 0; j < (col2 - col1) + 1; j++) {
      var curr_col = curr_row.insertCell(j);

      curr_col.innerHTML = row_val * col_val;
      col_val++;
    }

    row_val++;
  }

}
