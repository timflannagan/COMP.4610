/*
Name: Tim Flannagan
Email: timothy_flannagan@student.uml.edu
Assignment #8: Using the jQuery UI Slider and Tab Widgets
File: js/form-validation.js"
Date: 12/01/18

Sources:
1. https://www.sitepoint.com/basic-jquery-form-validation-tutorial/
2. https://jqueryvalidation.org/documentation/
3. https://formden.com/blog/validate-contact-form-jquery
4. https://stackoverflow.com/questions/15060292/a-simple-jquery-form-validation-script
5. https://stackoverflow.com/questions/18041140/jquery-validate-plugin-submithandler-delaying-form-submit
6. https://stackoverflow.com/questions/29451507/how-to-use-jquery-validator-to-determine-value-of-one-field-is-greater-than-anot
*/

function validate_form() {
    $.validator.addMethod("upperbound_greater_lowerbound", function (value, element, param) {
        /* Ensure that the user entered an upper bound value that's greater than the lower bound value. */
        return parseInt(value, 10) >= parseInt($(param).val(), 10);
    });

    var validator = $('#myform').validate({
        rules: {
          /* Ensure the form input values are correctly inputted */
          row1: {
              required: true,
              digits: true,
              min: 0
          },
          row2: {
              required: true,
              digits: true,
              upperbound_greater_lowerbound: "#row1"
          },
          col1: {
              required: true,
              digits: true,
              min: 0
          },
          col2: {
              required: true,
              digits: true,
              upperbound_greater_lowerbound: "#col1"
          }
        },
        /* Output a relevant message based on the type of incorrect field entry. */
        messages: {
          row1: {
            required: "This is a required field!",
            digits: "Enter an integer for the lower bound row value."
          },
          row2: {
            required: "This is a required field!",
            digits: "Enter an integer for the upper bound row value.",
            upperbound_greater_lowerbound: "You need to enter a value greater than row1."

          },
          col1: {
            required: "This is a required field!",
            digits: "Enter an integer for the lower bound column value."
          },
          col2: {
            required: "This is a required field!",
            digits: "Enter an integer for the upper bound column value.",
            upperbound_greater_lowerbound: "You need to enter a value greater than col1."
          }
        },
        errorPlacement: function(label, element) {
            label.addClass('arrow');
            label.insertAfter(element);
        },

        wrapper: 'span',

        submitHandler: function (form) {
            create_table()
        }
    }); // end of form validation
}

$(document).ready(function () {
    validate_form()
});
