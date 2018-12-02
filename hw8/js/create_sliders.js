/*
Name: Tim Flannagan
Email: timothy_flannagan@student.uml.edu
Assignment #8
Date: 12/02

Sources:
1.
*/

function create_sliders() {
    $('#first-row').slider({
        min: 1,
        max: 30,
        range: [1, 30],
        value: 5,

        slide: function(event, ui) {
            $("#row1").val(ui.value);
            $(this).find('.ui-slider-handle').text(ui.value);
        },
        create: function(event, ui) {
            var v = $(this).slider('value');
            $(this).find('.ui-slider-handle').text(v);
        }
    });

    $("#row1").change(function () {
        console.log('row1 was changed. updating in row1 slider.');
        $("#first-row").slider("option", "value");
    });

    $('#second-row').slider({
        min: 1,
        max: 30,
        range: [1, 30],
        value: 5,

        slide: function(event, ui) {
            $("#row2").val(ui.value);
        },
        create: function(event, ui) {
            var v = $(this).slider('value');
            $(this).find('.ui-slider-handle').text(v);
        }
    });

    $('#first-col').slider({
        min: 1,
        max: 30,
        range: [1, 30],
        value: 5,

        slide: function( event, ui ) {
            $("#col1").val(ui.value);
        },
        create: function(event, ui) {
            var v = $(this).slider('value');
            $(this).find('.ui-slider-handle').text(v);
        }
    });

    $('#second-col').slider({
        min: 1,
        max: 30,
        range: [1, 30],
        value: 5,

        slide: function( event, ui ) {
            $("#col2").val(ui.value);
        },
        create: function(event, ui) {
            var v = $(this).slider('value');
            $(this).find('.ui-slider-handle').text(v);
        }
    });


    // var row1_value = $("first-row").slider("option", "value");
    // var row2_value = $("second-row").slider("option", "value");
    // var col1_value = $("first-col").slider("option", "value");
    // var col2_value = $("second-col").slider("option", "value");
    //
    // $("row1").val(row1_value);
    // $("row2").val(row2_value);
    // $("col1").val(row2_value);
    // $("col2").val(row2_value);

};
