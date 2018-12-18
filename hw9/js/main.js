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
5. Getting drag ID: https://stackoverflow.com/questions/6163510/jquery-draggables-get-id-of-dragable
6. Removing element from JS array: https://love2dev.com/blog/javascript-remove-from-array/
*/

var curr_word = [];
var curr_score = 0;
var DEBUG = false;
var REMAINING_LETTERS = 7;

const NUM_TILES = 7;
const SCORING_VALUES = [
    /* Theres 27 letters, each with an assigned value, and a count */
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
    { "letter": "Blank", "count": 2, "value": 0}
]

function create_board() {
    /* Create a board with seven tiles. Basing the board off the one in hw9 pdf */
    var board = document.getElementById('scrabble-board');

    for (var i = 0; i < NUM_TILES; i++) {
        var src_file;
        var id;
        var img = document.createElement('img');

        if (i == 1 || i == 5) {
            src_file = '../externals/board/double_word.jpg';
            id = 'blank';
        } else {
            src_file = '../externals/board/blank_board.jpg';
            id = 'double-word';
        }

        img.id = id;
        img.src = src_file;
        img.className = 'board-tile';

        board.appendChild(img);
    }
}

function reset_word() {
    curr_word = [];
    curr_score = 0;

    $(".scrabble-rack").empty();
    document.getElementById('curr-word').innerHTML = "Current Word: ";
    document.getElementById('word-score').innerHTML = "Current Score: 0";

    populated_board_tiles();
    prepare_drop()
}

function prepare_drop() {
    /* Initialize the drag-and-drop mechanics of the tiles/rack/board */
    $(".board-tile").droppable({
        drop: function(event, ui) {
            var letter = $(ui.draggable).attr('id')[5];
            curr_word.push(letter);

            REMAINING_LETTERS--;

            if (DEBUG) {
                console.log('Letter: ' + letter, 'and word: ' + curr_word);
                console.log(REMAINING_LETTERS);
            }
            document.getElementById('curr-word').innerHTML = "Current Word: " + curr_word;
            calculate_word_score();
        },

        out: function (event, ui) {
            var letter = $(ui.draggable).attr('id')[5];
            var letter_index = curr_word.indexOf(letter);

            console.log('Before word: ', curr_word);
            curr_word.splice(letter_index, 1);
            console.log('After word: ', curr_word);

            REMAINING_LETTERS++;

            if (DEBUG) {
                console.log('You took off the letter: ' + letter + ' ' + letter_index);
                console.log('REMAINING_LETTERS: ' + REMAINING_LETTERS);
            }
            document.getElementById('curr-word').innerHTML = "Current Word: " + curr_word;
        },
    });

    $(".scrabble-rack").droppable({
        accept: '.tile'
    });

    $(".tile").draggable({
        snap: ".board-tile",
        revert: "invalid"
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

        $(".scrabble-rack").append('<img class="tile" id="tile-' + letter + '"src="../externals/letters/' + letter + '.jpg">')
    }
}

function calculate_word_score() {
    /* Iterate through each letter in the word, checking if that letter is a valid
       entry in the scoring dictionary. If true, add that value to the total score.
    */
    for (var i = 0; i < curr_word.length; i++) {
        for (var j = 0; j < SCORING_VALUES.length; j++) {
            if (curr_word[i] == SCORING_VALUES[j]['letter']) {
                curr_score += SCORING_VALUES[j]['value']

                if (DEBUG) {
                    console.log('New score: ' + curr_score);
                }

                document.getElementById('word-score').innerHTML = "Word Score: " + curr_score;
            }
        }
    }
}

function update_after_submit() {
    /* Simple helper function that updates head information about last word scoring */
    document.getElementById("last-word").innerHTML = "Last Word: " + curr_word;
    document.getElementById("last-score").innerHTML = "Last Score: " + curr_score;
    reset_word()
}

$(document).ready(function () {
    create_board()
    populated_board_tiles()
    prepare_drop()

    $("#reset-word").click(function () {
        reset_word()
    });

    $("#submit-word").click(function () {
        update_after_submit()
    });

});
