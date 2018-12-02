/*
Name: Tim Flannagan
Email: timothy_flannagan@student.uml.edu
Assignment #8
Date: 12/02

Sources:
1. http://infoheap.com/jquery-ui-slider-and-input-text-box-two-way-binding/
*/

function create_sliders() {
    $('#first-row').slider({
        min: 0,
        max: 30,
        range: [0, 30],
        value: 5,

        slide: function(event, ui) {
            $("#row1").val(ui.value);
            $(this).find('.ui-slider-handle').text(ui.value);
            submit_on_change();
        },
        create: function(event, ui) {
            var v = $(this).slider('value');
            $(this).find('.ui-slider-handle').text(v);
        }
    });

    $("#row1").change(function () {
        var input_val = $(this).val();

        if (!isNaN(input_val) && input_val <= 30 && input_val >= 0) {
            $("#first-row").slider("value", input_val);
            $('#first-row > .ui-slider-handle').text(input_val);
            submit_on_change();
        }
    });

    $('#second-row').slider({
        min: 0,
        max: 30,
        range: [0, 30],
        value: 5,

        slide: function(event, ui) {
            $("#row2").val(ui.value);
            $(this).find('.ui-slider-handle').text(ui.value);
            submit_on_change();
        },
        create: function(event, ui) {
            var v = $(this).slider('value');
            $(this).find('.ui-slider-handle').text(v);
        }
    });

    $("#row2").change(function () {
        var input_val = $(this).val();

        if (!isNaN(input_val) && input_val <= 30 && input_val >= 0) {
            $("#second-row").slider("value", input_val);
            $('#second-row > .ui-slider-handle').text(input_val);
            submit_on_change();
        }
    });

    $("#first-col").slider({
        min: 0,
        max: 30,
        range: [0, 30],
        value: 5,

        slide: function( event, ui ) {
            $("#col1").val(ui.value);
            $(this).find('.ui-slider-handle').text(ui.value);
            submit_on_change();
        },
        create: function(event, ui) {
            var v = $(this).slider('value');
            $(this).find('.ui-slider-handle').text(v);
        }
    });

    $("#col1").change(function () {
        var input_val = $(this).val();

        if (!isNaN(input_val) && input_val <= 30 && input_val >= 0) {
            $("#first-col").slider("value", input_val);
            $('#first-col > .ui-slider-handle').text(input_val);
            submit_on_change();
        }
    });

    $('#second-col').slider({
        min: 0,
        max: 30,
        range: [0, 30],
        value: 5,

        slide: function( event, ui ) {
            $("#col2").val(ui.value);
            $(this).find('.ui-slider-handle').text(ui.value);
            submit_on_change();
        },
        create: function(event, ui) {
            var v = $(this).slider('value');
            $(this).find('.ui-slider-handle').text(v);
        }
    });

    $("#col2").change(function () {
        var input_val = $(this).val();

        if (!isNaN(input_val) && input_val <= 30 && input_val >= 0) {
            $("#second-col").slider("value", input_val);
            $('#second-col > .ui-slider-handle').text(input_val);
            submit_on_change();
        }
        return False;
    });
};

function submit_on_change() {
    /* This forces the form to submit when a change in slider is made. */
    $("#myform").submit();
}
