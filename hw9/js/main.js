/*
Name: Tim Flannagan
File Creation Date: 12/08/18
Assignment #9: Implementing a Bit of Scrabble with Drag-and-Drop
File: js/main.js

Sources:
1. Tile Distribution: http://scrabblewizard.com/scrabble-tile-distribution/
2. Tuples in JS: https://stackoverflow.com/questions/20392782/a-list-of-tuples-in-javascript
3. Draggable: https://www.tutorialspoint.com/jqueryui/jqueryui_draggable.htm
4. Getting dragable values: https://stackoverflow.com/questions/21195737/jquery-ui-get-value-of-element-on-which-an-item-is-dropped
*/

var curr_word = [];
var DEBUG = true;
var REMAINING_LETTERS = 7;

const NUM_TILES = 7;
const SCORING_VALUES = [
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

function reset_word() {
    $(".scrabble-rack").empty();
    populated_board_tiles();
}

function prepare_drop() {

    $(".board").droppable({
        drop: function(event, ui) {
            var letter = ui.draggable.prop('id');
            var element = $(this).attr('id');
            var number = element;

            REMAINING_LETTERS--;

            if (DEBUG) {
                console.log(letter, element, number, REMAINING_LETTERS);
            }
        },

        out: function (event, ui) {
            REMAINING_LETTERS++;

            if (DEBUG) {
                console.log('REMAINING_LETTERS: ' + REMAINING_LETTERS);
            }
        },
    });


    $(".tile").draggable({
        snap: ".board",
        revert: "invalid",
    });
}

function populated_board_tiles() {
    /* Populate the tiles in the rack by generating a random number and indexing
       the scoring values dictionary. Append that associated letter png to the rack.
       See source #4 for more information.
    */
    for (var i = 0; i < NUM_TILES; i++) {
        var rand_index = Math.floor(Math.random() * 27);
        var letter = SCORING_VALUES[rand_index].letter;

        if (DEBUG) {
            console.log('Letter chosen: ' + letter);
        }

        $(".scrabble-rack").append('<img class="tile" id="tile-' + letter + '"src="../externals/letters/' + letter + '.png">')
    }
}

$(document).ready(function () {
    populated_board_tiles()
    prepare_drop()

    $("#reset-word").click(function () {
        reset_word()
        prepare_drop()
    });

    $("#submit-word").click(function () {
        document.getElementById("word-score").innerHTML = "Word Score: this ran";
    });

});
