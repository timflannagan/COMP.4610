/*
Name: Tim Flannagan
Email: timothy_flannagan@student.uml.edu
Date: 12/01/18
Class: GUI 1 (Fall 2018)
Assignment #8: Using the jQuery UI Slider and Tab Widgets

Sources:
1. NaN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
2. .validate() jQuery Plugin: https://jqueryvalidation.org/
3. https://stackoverflow.com/questions/14702631/in-jquery-ui-1-9-how-do-you-create-new-tabs-dynamically
*/

$(document).ready(function () {
	$("#tabs").tabs()

	create_sliders()

	$("#submit-button").on("click", function () {
		create_tab()
	});

	if (validate_form()) {
		create_table()
	}
});

function create_tab() {
	var num_tabs = $("#tabs li").length + 1;

	$("div#tabs ul").append(
        "<li class='tab'><a href='#tab-" + num_tabs + "'>Tab #" + num_tabs + "</a></li>"
	);

	$("div#tabs").append(
		'<div id="tab-' + num_tabs + '">' + $("#my_table").html() + '</div>'
	);

	$("#tabs").tabs("refresh");
	$("#tabs").tabs("option", "active", -1);
}
