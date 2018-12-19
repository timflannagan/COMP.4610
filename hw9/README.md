## Overview:
- Name: Tim Flannagan
- Date: 12/18/18
- Assignment 9

## What Works:
- Able to drag letter tiles from the scrabble rack to any of the board tile images.
- Letter tiles are randomized from the `externals/letters/` image directory.
- We are able to drag a letter from a board square back to the rack and that letter is dropped from the current word count.
- A user can drag a letter tile to either a blank or double-word board square and receive the correct points based on the value of that letter.
- A user can only submit a word that contains at least two letters or more.
- When the user clicks on the reset word button, we take all tiles currently on the board and generate a new 7 tiles on the scrabble rack.

## Current Problems:
- When dropping a `.ui-draggable` object onto a board tile with an existing tile, the board tile will accommodate both instead of rejecting the second tile.
- There's no dictionary verification of a user's submitted word. Would need to create an `AJAX` request to read a JSON file of all possible valid words.
- Verification function doesn't check if the tiles contain an empty board square (ex. A B _ C.)
- The letters chosen are randomized using the # of indices in the scoring values array, and not randomized from the distribution of letters.

## Features Not Implemented:
- More than one row of scrabble.
- Randomize the board tiles instead of hardcoding the board layout.
- When a user submits a word, don't reset the existing letter base, but rather only replace the tiles that weren't used.
- Add tile animation.
- Add an instruction page.

## To-Do:
- [ ] Update Documentation in `index.html` after finishing the assignment.
- [x] Add jQuery UI CDN's to `index.html`.
- [x] Create initial board div
- [x] Create a row of 7 board pieces.
- [x] When changing a letter to another spot in the same tile, don't update anything.
- [x] Change board tiles to images.
- [ ] Have tiles snap back to the rack.
- [x] Change rack tiles (paragraphs) to images.
- [x] Track the current word that's on the board.
- [x] Implement a reset button.
- [x] Implements the functionality of a reset button.
- [x] Implement a submit word button.
- [x] Implement the functionality of a submit word button.
- [ ] Don't allow two tiles to be in the same board square.
- [ ] Add tile animation.
- [x] Track both the ID and value of a word so we don't have to call update_word_score() after a letter is placed.
