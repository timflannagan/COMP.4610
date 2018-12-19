/*
Name: Tim Flannagan
File Creation Date: 12/08/18
Last Modification: 12/18/18
Assignment #9: Implementing a Bit of Scrabble with Drag-and-Drop
File: js/main.js

Sources:
1. Tile Distribution: http://scrabblewizard.com/scrabble-tile-distribution/
2. Tuples in JS: https://stackoverflow.com/questions/20392782/a-list-of-tuples-in-javascript
3. Draggable: https://www.tutorialspoint.com/jqueryui/jqueryui_draggable.htm
4. Getting dragable values: https://stackoverflow.com/questions/21195737/jquery-ui-get-value-of-element-on-which-an-item-is-dropped
5. Getting drag ID: https://stackoverflow.com/questions/6163510/jquery-draggables-get-id-of-dragable
6. Removing element from JS array: https://love2dev.com/blog/javascript-remove-from-array/
7. Load JSON-Encoded data: https://api.jquery.com/jquery.getjson/
8. Snapping to multiple elements: https://stackoverflow.com/questions/16257835/how-to-set-snap-to-multiple-elements
*/

var row_obj = [];
var curr_score = 0;
var curr_word = "";

var DEBUG = false;
var REMAINING_LETTERS = 7;

const NUM_TILES = 7;
const SCORING_VALUES = [
    /* Theres 27 letters, each with an assigned value, and a count.
       Removing blanks for now. See source #2 for more info about tuples in JS.
     */
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
]

function clear_letter_id() {
    for (var i = 0; i < row_obj.length; i++) {
        row_obj[i].letter_id = "";
    }
}

function reset_word() {
    clear_letter_id()

    $(".scrabble-rack").empty();
    document.getElementById('curr-word').innerHTML = "Current Word: ";
    document.getElementById('word-score').innerHTML = "Current Score: 0";

    populated_board_tiles();
    prepare_drop()
}

function print_arr(word) {
    var rval = "";

    for (var i = 0; i < word.length; i++) {
        rval += word[i];
    }

    return rval;
}

function prepare_drop() {
    /* Initialize the drag-and-drop mechanics of the tiles/rack/board.
       See source #3 for more informatoin about jQuery's droppable API.
    */
    $(".board-tile").droppable({
        accept: '.tile',

        drop: function(event, ui) {
            // see source #4/#5 for getting the draggable/droppable id
            var letter = $(ui.draggable).attr('id');
            var element_id = $(this).attr('id');
            var row_index = element_id[0];

            row_obj[row_index].letter_id = letter;
            calculate_word_score();
        },

        out: function(event, ui) {
            var letter = ui.draggable.attr('id');
            var drop_id = $(this).attr('id');
            var row_index = drop_id[0];

            // this seems to fix the problem where dragging a tile over existing
            // board pieces would reset the other letter id's in the row obj
            if (letter == row_obj[row_index].letter_id) {
                row_obj[row_index].letter_id = "";
            } else {
                if (DEBUG) {
                    console.log('The letter ' + letter + ' was dragged across existing tiles.');
                }

                return false;
            }

            calculate_word_score()
        }
    });

    $(".scrabble-rack").droppable({
        accept: '.tile',

        drop: function(event, ui) {
            console.log('something was dropped back into the rack');
        },

        out: function(event, ui) {
            console.log('some was dragged out of the drop zone.');
        }
    });

    $(".tile").draggable({
        snap: ".board-tile,.scrabble-rack",
        snapMode: "inner",
        revert: "invalid"
    });
}

function create_board() {
    /* Create a board with seven tiles. Basing the board off the one in hw9 pdf */
    var board = document.getElementById('scrabble-board');

    for (var i = 0; i < NUM_TILES; i++) {
        var id;
        var src_file;
        var img = document.createElement('img');

        if (i == 1 || i == 5) {
            src_file = '../externals/board/double_word.jpg';
            id = 'double-word';
        } else {
            src_file = '../externals/board/blank_board.jpg';
            id = 'blank';
        }

        img.id = i + '-' + id;
        img.src = src_file;
        img.className = 'board-tile';

        row_obj[i] = {
            'type': id,
            'letter_id': '',
            'img_id': img.id
        }

        board.appendChild(img);
    }
}

function populated_board_tiles() {
    /* Populate the tiles in the rack by generating a random number and indexing
       the scoring values dictionary. Append that associated letter png to the rack.
       See source #4 for more information.
    */
    for (var i = 0; i < NUM_TILES; i++) {
        var rand_index = Math.floor(Math.random() * 26);
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
    curr_score = 0;
    curr_word = "";

    for (var i = 0; i < row_obj.length; i++) {
        for (var j = 0; j < SCORING_VALUES.length; j++) {
            var multiplier = 1;

            if (row_obj[i].letter_id != "" && (row_obj[i].letter_id[5] == SCORING_VALUES[j].letter)) {
                curr_word += row_obj[i].letter_id[5];

                // https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript
                if (row_obj[i].type.includes('blank')) {
                    multiplier = 1;
                } else {
                    // at the moment, GUI only supports double-word
                    multiplier = 2;
                }

                curr_score += (SCORING_VALUES[j].value * multiplier);

                document.getElementById('word-score').innerHTML = "Word Score: " + curr_score;
            }
        }
    }

    document.getElementById('curr-word').innerHTML = "Current Word: " + curr_word;

    if (DEBUG) {
        console.log(row_obj);
    }
}

function find_word_length() {
    var length = 0;

    for (var i = 0; i < row_obj.length; i++) {
        if (row_obj[i].letter_id != "") {
            length++;
        }
    }

    return length;
}

function update_after_submit() {
    var curr_word_length = find_word_length()

    /* Simple helper function that updates head information about last word scoring */
    if (curr_word_length < 2) {
        alert('You need to play at least two letters in order to submit a valid word for scoring! You are current at ' + curr_word_length + ' letters.');
        return false;
    }

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
