$(function() {
  "use strict";

  /* Things I want this game to do
     1. check if card has been clicked
     2. flip card and show icon
     3. check if 1 or 2 cards are visible
     4. if two cards are visible, are they the same class(do they equal each other)
     5. if the two cards do not equal each other, turn them both over, deduct a heart, and start over counting
     6. if the two cards do equal each other, keep them open, do not deduct a heart, and start over counting
     7. if there are no more hearts, display game over or something and do not allow any more moves
     8. if every card is visible at the same time, display that the user won
     9. either case, when the game if over, ask if user wants to play again and refresh the game
     10. play music in the background
     11. play a sound when the user clicks a card
     12. if there is time, randomize the cards on refresh
  */

// code for game timer...thank you Stack overflow http://stackoverflow.com/questions/2604450/how-to-create-a-jquery-clock-timer for the inspiration and help!!!
function pretty_time_string( number)  {
  if( number < 10 ) {
    return "0" + number;
  }

  else {
    return "" + number;
  }
}

var start = new Date;

var interval = setInterval(function() {
  var total_seconds = (new Date - start) / 1000;

  var hours = Math.floor(total_seconds / 3600);
  total_seconds = total_seconds % 3600;

  var minutes = Math.floor(total_seconds / 60);
  total_seconds = total_seconds % 60;

  var seconds = Math.floor(total_seconds);

  hours = pretty_time_string(hours);
  minutes = pretty_time_string(minutes);
  seconds = pretty_time_string(seconds);

  var currentTimeString = hours + ":" + minutes + ":" + seconds;

  $('.timer').text(currentTimeString);
}, 1000);

  // code for flipping the cards and displaying the icons
  var $gameMain = $( ".game-main" );
  var hearts = $( ".heart-lives" );
  var correct = 0;
  var incorrect = 0;
  var clicks = 0;
  var firstThis;
  var firstIconClass;
  var firstClassIndex;
  var secondThis;
  var secondIconClass;
  var secondClassIndex;

  $gameMain.on( "click", ".column-card", function() {
    clicks++;

    if( $(this).children().is(":hidden") ) {
      $(this).children().show();
      $(this).addClass( "column-card-flip" );

      // check how many cards are visible
      if( clicks === 1 ) {
        // firstThis = $( this );
        firstIconClass = $( this ).children().attr( "class" );
        console.log( "One Cluck" );
      }

      else if( clicks === 2 ) {
        // secondThis = $( this );
        secondIconClass = $( this ).children().attr( "class" );
        secondClassIndex = $( this ).index();
        console.log( "First Card Class: " + firstIconClass );
        console.log( "Second Card Class: " + secondIconClass );
        console.log( "Card Index: " + secondClassIndex );
        console.log( "Two Clucks" );

        if( firstIconClass === secondIconClass ) {
          console.log( "They match!" );
          correct++;
          clicks = 0;

          if( correct === 14 ) {
            setTimeout(function() {
              alert( "You won!!!  Way to go" );
            }, 1000);
        }
      }

        else {
          setTimeout(function () {
            incorrect++;
            console.log( "They do not match" );
            firstThis.children().delay(1000).hide();
            firstThis.delay(1000).removeClass( "column-card-flip" );
            secondThis.children().delay(1000).hide();
            secondThis.delay(1000).removeClass( "column-card-flip" );
            $(hearts[$(hearts).length - incorrect]).last().hide();
            clicks = 0;

            if( incorrect === 11 ) {
              setTimeout(function() {
                $('.timer').text( "You Failed!!!");
                alert( "Uffda!  That didn't go so well, did it?" );
              }, 500);

              clearInterval(interval);
            } // end if
          }, 1000);
        } // end else
      }
    }

    else {
      console.log( "Else is getting through" );
      $(this).children().hide();
      $(this).removeClass( "column-card-flip" );
    }
  });
})
