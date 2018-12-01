function create_sliders() {
    $('#first-row').slider({
        min: 1,
        max: 30,
        range: [1, 30],
        value: 1,

        slide: function( event, ui ) {
            $( "#amount" ).val( ui.value );
            $(this).find('.ui-slider-handle').text(ui.value);
        },
        create: function(event, ui) {
            var v = $(this).slider('value');
            $(this).find('.ui-slider-handle').text(v);
        },
        // change: function(event, ui) {
        //     alert(ui.value);
        // }
    });

    $('#second-row').slider({
        min: 1,
        max: 30,
        range: [1, 30],
        value: 1,

        slide: function( event, ui ) {
            $( "#amount" ).val( ui.value );
            $(this).find('.ui-slider-handle').text(ui.value);
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
        value: 1,

        slide: function( event, ui ) {
            $( "#amount" ).val( ui.value );
            $(this).find('.ui-slider-handle').text(ui.value);
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
        value: 1,

        slide: function( event, ui ) {
            $( "#amount" ).val( ui.value );
            $(this).find('.ui-slider-handle').text(ui.value);
        },
        create: function(event, ui) {
            var v = $(this).slider('value');
            $(this).find('.ui-slider-handle').text(v);
        }
    });
};
