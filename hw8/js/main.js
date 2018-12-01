/*
Name: Tim Flannagan
Email: timothy_flannagan@student.uml.edu
Date: 12/01/18
Class: GUI 1 (Fall 2018)
Assignment #8: Using the jQuery UI Slider and Tab Widgets

Sources:
1. NaN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
2. .validate() jQuery Plugin: https://jqueryvalidation.org/
*/

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

	// check if there's already a table displayed on the page; reset the HTML
	if (table.rows.length != 1) {
		$('#my_table tbody').empty();
		var first_row = table.insertRow(0);
	}

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
