var playerTurn = 0;
var individualMovement = 0;
var startPosition = [];
var startPositionID;
var horizontalStartPosition;
var veritcalStartPosition;
var endingPosition = [];
var endingPositionID;
var horizontalEndingPosition;
var veritcalEndingPosition;
var currentPiece = [];
var playerColor = 1;
var emptySpace = 0;
var redPiece = 1;
var blackPiece = 2;
var redScore = 0;
var blackScore = 0;

var A = [1, 0, 1, 0, 0, 0, 2, 0];
var B = [0, 1, 0, 0, 0, 2, 0, 2];
var C = [1, 0, 1, 0, 0, 0, 2, 0];
var D = [0, 1, 0, 0, 0, 2, 0, 2];
var E = [1, 0, 1, 0, 0, 0, 2, 0];
var F = [0, 1, 0, 0, 0, 2, 0, 2];
var G = [1, 0, 1, 0, 0, 0, 2, 0];
var H = [0, 1, 0, 0, 0, 2, 0, 2];
var letters = ["A", "B", "C", "D", "E", "F", "G", "H"]

$(document).ready(function() {
  $("div").click(function() {
    // if individualMovement === 0, the player is selecting their piece. if the individualMovement === 1 the player is selecting where the piece will go.
    if (individualMovement === 0) {
      // takes div id and uses it to find it's corresponding place on the array boardboard
      startPosition.push($(this).attr('id')[0]);
      startPosition.push($(this).attr('id')[1]);
      horizontalStartPosition = startPosition[0];
      veritcalStartPosition = startPosition[1];
      // takes player's piece so it can be moved
      currentPiece.push($(this).html());
      //declares whether the spot clicked on the board is occupied, and if so what color it is.
      if (window[horizontalStartPosition][veritcalStartPosition] === 0) {
        alert("There isn't anything there!");
        startPosition = [];
        currentPiece = [];
      } else if (window[horizontalStartPosition][veritcalStartPosition] === playerColor) {
        alert("Move your piece");
        individualMovement += 1;
      } else if (window[horizontalStartPosition][veritcalStartPosition] !== playerColor) {
        alert("You can't move pieces that aren't yours");
        startPosition = [];
        currentPiece = [];
      }
      return false;
    } else if (individualMovement === 1 && playerColor === redPiece) {
      // gets div id and uses it to find the ending position on board
      endingPosition.push($(this).attr('id')[0]);
      endingPosition.push($(this).attr('id')[1]);
      horizontalEndingPosition = endingPosition[0];
      veritcalEndingPosition = endingPosition[1];
      //makes the div id manipulatable in our function
      startPositionID = startPosition.join("");
      endingPositionID = endingPosition.join("");
      if (horizontalEndingPosition === letters[letters.indexOf(horizontalStartPosition)+1] && parseInt(veritcalEndingPosition) === parseInt(veritcalStartPosition)+1 || horizontalEndingPosition === letters[letters.indexOf(horizontalStartPosition)-1] && parseInt(veritcalEndingPosition) === parseInt(veritcalStartPosition)+1) {
        if (window[horizontalEndingPosition][veritcalEndingPosition] !== 0) {
          redScore++;
          $("span#redScore").empty();
          $("span#redScore").prepend(redScore);
        } else {
        }
        // moves the pieces on the board.
        window[horizontalStartPosition][veritcalStartPosition] = emptySpace;
        window[horizontalEndingPosition][veritcalEndingPosition] = redPiece;
        $(window[startPositionID]).empty();
        $(window[endingPositionID]).empty();
        $(window[endingPositionID]).prepend(currentPiece);
        // shows a console log of the board
        console.log(A, B, C, D, E, F, G, H);
        // resets our function
        endingPosition = [];
        startPosition = [];
        currentPiece = [];
        //ends this players turn
        individualMovement -= 1;
        playerColor += 1;
      } else {
        alert("NOT A VALID MOVESET TRY AGAIN");
        startPosition = [];
        endingPosition = [];
        currentPiece = [];
        individualMovement -= 1;
      }
    } else if (individualMovement === 1 && playerColor === blackPiece) {
      // gets div id and uses it to find the ending position on board
      endingPosition.push($(this).attr('id')[0]);
      endingPosition.push($(this).attr('id')[1]);
      horizontalEndingPosition = endingPosition[0];
      veritcalEndingPosition = endingPosition[1];
      //makes the div id manipulatable in our function
      startPositionID = startPosition.join("");
      endingPositionID = endingPosition.join("");
      if (horizontalEndingPosition === letters[letters.indexOf(horizontalStartPosition)+1] && parseInt(veritcalEndingPosition) === parseInt(veritcalStartPosition)-1 || horizontalEndingPosition === letters[letters.indexOf(horizontalStartPosition)-1] && parseInt(veritcalEndingPosition) === parseInt(veritcalStartPosition)-1) {
        if (window[horizontalEndingPosition][veritcalEndingPosition] !== 0) {
          blackScore++;
          $("span#blackScore").empty();
          $("span#blackScore").prepend(blackScore);
        } else {
        }
        // moves the pieces on the board.
        window[horizontalStartPosition][veritcalStartPosition] = emptySpace;
        window[horizontalEndingPosition][veritcalEndingPosition] = blackPiece;
        $(window[startPositionID]).empty();
        $(window[endingPositionID]).empty();
        $(window[endingPositionID]).prepend(currentPiece);
        // shows a console log of the board
        console.log(A, B, C, D, E, F, G, H);
        // resets our function
        endingPosition = [];
        startPosition = [];
        currentPiece = [];
        //ends this players turn
        individualMovement -= 1;
        playerColor -= 1;
      } else {
        alert("NOT A VALID MOVESET TRY AGAIN");
        endingPosition = [];
        startPosition = [];
        currentPiece = [];
        individualMovement -= 1;
      }
    }
   });
});
