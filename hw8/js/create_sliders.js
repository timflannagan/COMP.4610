function create_sliders() {
    $('#first-row').slider({
        min: 1,
        max: 30,
        range: [1, 30],
        value: 5,

        slide: function( event, ui ) {
            $("#row1").val(ui.value);
        }
    });

    $('#second-row').slider({
        min: 1,
        max: 30,
        range: [1, 30],
        value: 5,

        slide: function( event, ui ) {
            $("#row2").val(ui.value);
        }
    });

    $('#first-col').slider({
        min: 1,
        max: 30,
        range: [1, 30],
        value: 5,

        slide: function( event, ui ) {
            $("#col1").val(ui.value);
        }
    });

    $('#second-col').slider({
        min: 1,
        max: 30,
        range: [1, 30],
        value: 5,

        slide: function( event, ui ) {
            $("#col2").val(ui.value);
        }
    });
};
