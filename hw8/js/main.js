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
	// $("#tabs").tabs()

	create_sliders()
	if (validate_form()) {
		create_table()
	}
});
