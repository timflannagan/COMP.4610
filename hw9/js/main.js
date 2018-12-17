/*
Name: Tim Flannagan
File Creation Date: 12/08/18
Assignment #9
File: js/main.js

Sources:
1. Tile Distribution: http://scrabblewizard.com/scrabble-tile-distribution/
2. Tuples in JS: https://stackoverflow.com/questions/20392782/a-list-of-tuples-in-javascript

Notes:
1. There are 100 total tiles in all
2. Button features:
   - Deal another seven random letter titles
   - Submit word button
*/

var DEBUG = false;
var NUM_TILES = 7;

var SCORING_VALUES = [
    /* Theres 26 letters, each with an assigned value, and a count */
    { "letter": "A", "count": 9, "value": 1 },
    { "letter": "B", "count": 2, "value": 3 },
    { "letter": "C", "count": 2, "value": 3 },
    { "letter": "D", "count": 4, "value": 2 },
    { "letter": "E", "count": 12, "value": 1 },
    { "letter": "F", "count": 2, "value": 4 },
    { "letter": "G", "count": 3, "value": 2 },
    { "letter": "H", "count": 2, "value": 4 },
    { "letter": "I", "count": 9, "value": 1 },
    { "letter": "J", "count": 1, "value": 8 },
    { "letter": "K", "count": 1, "value": 5 },
    { "letter": "L", "count": 4, "value": 1 },
    { "letter": "M", "count": 2, "value": 3 },
    { "letter": "N", "count": 6, "value": 1 },
    { "letter": "O", "count": 8, "value": 1 },
    { "letter": "P", "count": 2, "value": 3 },
    { "letter": "Q", "count": 1, "value": 10 },
    { "letter": "R", "count": 6, "value": 1 },
    { "letter": "S", "count": 4, "value": 1 },
    { "letter": "T", "count": 6, "value": 1 },
    { "letter": "U", "count": 4, "value": 1 },
    { "letter": "V", "count": 2, "value": 4 },
    { "letter": "W", "count": 2, "value": 4 },
    { "letter": "X", "count": 1, "value": 8 },
    { "letter": "Y", "count": 2, "value": 4 },
    { "letter": "Z", "count": 1, "value": 10 },
    { "letter": "blank", "count": 2, "value": 0}
]

function create_board() {
    /* Create a board with seven tiles. Basing the board off the one in hw9 pdf */
    document.getElementById('scrabble-board');

    var table = document.createElement('table');
    var first_row = table.insertRow(0);

    for (var i = 0; i < NUM_TILES; i++) {
        var curr_cell = first_row.insertCell();
        var img = document.createElement('img');
        // img.src = "../externals/yes.jpeg"
        curr_cell.innerHTML = i;
        // curr_cell.appendChild(img);
    }

    $("#scrabble-board").html(table);
}

function populate_board() {

}

$(document).ready(function () {
    // create_board()

    if (DEBUG) {
        $("#reset-word").click(function() {
            alert('Reset button was clicked!');
        });
        $("#submit-word").click(function() {
            alert('Submit button was clicked!');
        });
    }

});
