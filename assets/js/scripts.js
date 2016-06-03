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

  var $gameMain = $( ".game-main" );
  var $seconds = $( ".seconds" );
  var $minutes = $( ".minutes" );
  var $hours = $( ".hours" );


  $gameMain.on( "click", ".column-card", function() {
    console.log( "Card Clucked" );

    if( $(this).children().is(":hidden") ) {
      $(this).children().show();
      $(this).addClass( "column-card-flip" );
    }

    else {
      console.log( "Else is getting through" );
      $(this).children().hide();
      $(this).removeClass( "column-card-flip" );
    }

    // check how many cards are visible

  });



  function gameClock() {
    jQuery.fx.interval = 1000;
    for( var timer = 1; timer < 60; timer++ ) {
      console.log(timer);
    }

  }



})
