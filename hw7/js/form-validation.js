/*
Name: Tim Flannagan
Email: timothy_flannagan@student.uml.edu
Assignment #6: Validate user input using jQuery
File: js/form-validation.js"
Date: 11/23/18

Sources:
1. https://www.sitepoint.com/basic-jquery-form-validation-tutorial/
2. https://jqueryvalidation.org/documentation/
3. https://formden.com/blog/validate-contact-form-jquery
4. https://stackoverflow.com/questions/15060292/a-simple-jquery-form-validation-script
5. https://stackoverflow.com/questions/18041140/jquery-validate-plugin-submithandler-delaying-form-submit
*/

// $.validator.addMethod("upperbound_greater_than_lowerbound"), function(value, element) {
//   return row1 > row2
// }



$(document).ready(function () {
    $.validator.addMethod("row2_greater_row1", function(value, element) {
        return row2 > row1
    });

    $.validator.addMethod("col2_greater_col1", function(value, element) {
        return col2 > col1
    });

    $('#myform').validate({
        rules: {
          /* Ensure the form input values are correctly inputted */
          row1: {
              required: true,
              digits: true,
              range: [1, 100]
          },
          row2: {
              required: true,
              digits: true,
              range: [Number(row1.value) + 1, 100],
              row2_greater_row1: true
          },
          col1: {
              required: true,
              digits: true,
              range: [1, 100]
          },
          col2: {
              required: true,
              digits: true,
              range: [1, 100],
              col2_greater_col1: true
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
            row2_greater_row1: "You need to enter a value greater than row1."

          },
          col1: {
            required: "This is a required field!",
            digits: "Enter an integer for the lower bound column value."
          },
          col2: {
            required: "This is a required field!",
            digits: "Enter an integer for the upper bound column value.",
            col2_greater_col1: "You need to enter a value greater than col1."
          }
        }
    });
});
