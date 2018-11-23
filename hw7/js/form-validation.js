$(document).ready(function () {

    $('#myform').validate({ // initialize the plugin
        rules: {
            row1: {
                required: true,
                digits: true
            },
            row2: {
                required: true,
                digits: true
            },
            col1: {
                required: true,
                digits: true
            },
            col2: {
                required: true,
                digits: true
            }
        },
        messages: {
          row1: {
            required: "This is a required field!",
            digits: "Enter an integer for the lower bound row value."
          },
          row2: {
            required: "This is a required field!",
            digits: "Enter an integer for the upper bound row value."
          },
          col1: {
            required: "This is a required field!",
            digits: "Enter an integer for the lower bound column value."
          },
          col2: {
            required: "This is a required field!",
            digits: "Enter an integer for the upper bound column value."
          }
        }
    });
});
