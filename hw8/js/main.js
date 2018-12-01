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

$(document).ready(function () {
	create_sliders()

	$('#submit-button').click(function() {
		create_table()
	});

});

function create_table() {
	/* Create a <table> given user input and populate cells with correct multiplication entry */
	var table = document.getElementById('my_table');
	var row1 = $('#first-row').slider("option", 'value');
	var row2 = $('#first-row').slider("option", 'value');
	var col1 = $('#first-row').slider("option", 'value');
	var col2 = $('#first-row').slider("option", 'value');

	var row_val = row1;
	var col_val = col1;

	var first_row = table.insertRow(0);
	console.log('Table length: ' + table.rows.length);

	// check if there's already a table displayed on the page; reset the HTML
	if (table.rows.length != 1) {
		console.log('this ran');
		$('#my_table tbody').empty();
		var first_row = table.insertRow(0);
	}

	// populate the headings for the first row
	for (var i = 0; i < 1; i++) {
		for (var j = 0; j < (col2 - col1) + 2; j++) {
			var first_col = first_row.insertCell();

			if (j === 0) {
				first_col.innerHTML = "";
			} else {
				first_col.innerHTML = col_val;
				col_val++;
			}
		}
	}

	col_val = col1;

	// iterate over the values entered in the form data: create row first then col data.
	for (var i = 1; i < (row2 - row1) + 2; i++) {
		var curr_row = table.insertRow(i);

		for (var j = 0; j < (col2 - col1) + 2; j++) {
			var curr_col = curr_row.insertCell(j);

			if (j == 0)
			{
				curr_col.innerHTML = row_val;
			} else {
				curr_col.innerHTML = row_val * col_val;
				col_val++;
			}
		}

		col_val = col1;
		row_val++;
	}
}
