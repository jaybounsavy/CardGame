//------------------------------------------------------------------------------
// Class:  Card - Hold individual card within the deck object
//------------------------------------------------------------------------------
class Card {

    // Constructor
    constructor(suit, name, value) {
        this.suit = suit;
        this.name = name;
        this.value = value;
    }

}


//------------------------------------------------------------------------------
// Class:  Deck - Hold a set of 52 cards.
//------------------------------------------------------------------------------
class Deck {

    // Constructor
    constructor() {
        this.deck = [];
        this.shuffledDeck = [];
        this.firstShuffle = false;

        // Load the Spade cards onto original deck array
        this.deck.push( new Card("Spade", "2", 2) );        
        this.deck.push( new Card("Spade", "3", 3) );
        this.deck.push( new Card("Spade", "4", 4) );
        this.deck.push( new Card("Spade", "5", 5) );
        this.deck.push( new Card("Spade", "6", 6) );
        this.deck.push( new Card("Spade", "7", 7) );
        this.deck.push( new Card("Spade", "8", 8) );
        this.deck.push( new Card("Spade", "9", 9) );
        this.deck.push( new Card("Spade", "10", 10) );
        this.deck.push( new Card("Spade", "Jack", 11) );
        this.deck.push( new Card("Spade", "Queen", 12) );
        this.deck.push( new Card("Spade", "King", 13) );
        this.deck.push( new Card("Spade", "Ace", 14) );

        // Load the Heart cards onto original deck array
        this.deck.push( new Card("Heart", "2", 2) );        
        this.deck.push( new Card("Heart", "3", 3) );
        this.deck.push( new Card("Heart", "4", 4) );
        this.deck.push( new Card("Heart", "5", 5) );
        this.deck.push( new Card("Heart", "6", 6) );
        this.deck.push( new Card("Heart", "7", 7) );
        this.deck.push( new Card("Heart", "8", 8) );
        this.deck.push( new Card("Heart", "9", 9) );
        this.deck.push( new Card("Heart", "10", 10) );
        this.deck.push( new Card("Heart", "Jack", 11) );
        this.deck.push( new Card("Heart", "Queen", 12) );
        this.deck.push( new Card("Heart", "King", 13) );
        this.deck.push( new Card("Heart", "Ace", 14) );

        // Load the Diamon cards onto original deck array
        this.deck.push( new Card("Diamond", "2", 2) );        
        this.deck.push( new Card("Diamond", "3", 3) );
        this.deck.push( new Card("Diamond", "4", 4) );
        this.deck.push( new Card("Diamond", "5", 5) );
        this.deck.push( new Card("Diamond", "6", 6) );
        this.deck.push( new Card("Diamond", "7", 7) );
        this.deck.push( new Card("Diamond", "8", 8) );
        this.deck.push( new Card("Diamond", "9", 9) );
        this.deck.push( new Card("Diamond", "10", 10) );
        this.deck.push( new Card("Diamond", "Jack", 11) );
        this.deck.push( new Card("Diamond", "Queen", 12) );
        this.deck.push( new Card("Diamond", "King", 13) );
        this.deck.push( new Card("Diamond", "Ace", 14 ) );


        // Load the Club cards onto original deck array
        this.deck.push( new Card("Club", "2", 2 ) );        
        this.deck.push( new Card("Club", "3", 3 ) );
        this.deck.push( new Card("Club", "4", 4 ) );
        this.deck.push( new Card("Club", "5", 5 ) );
        this.deck.push( new Card("Club", "6", 6 ) );
        this.deck.push( new Card("Club", "7", 7 ) );
        this.deck.push( new Card("Club", "8", 8 ) );
        this.deck.push( new Card("Club", "9", 9) );
        this.deck.push( new Card("Club", "10", 10 ) );
        this.deck.push( new Card("Club", "Jack", 11 ) );
        this.deck.push( new Card("Club", "Queen", 12 ) );
        this.deck.push( new Card("Club", "King", 13 ) );
        this.deck.push( new Card("Club", "Ace", 14 ) );
        
    }


    //------------------------------------------------------------------------------------------------------
    // Method:  shuffle (private) - Shuffle the shuffled card deck using the Fisher-Yates Algorithm
    //------------------------------------------------------------------------------------------------------
    #shuffle() {

        // If this is the first shuffle, copy the original deck to the shuffled deck
         if ( this.firstShuffle == false ) {

            // Copy the original deck to the shuffled deck
            this.shuffledDeck = this.deck.slice(0, this.deck.length);

            // Set the flag to true since you will only need to this only 1 time
            this.firstShuffle = true;
        }
   
        // Fisher-Yates Algorithm to shuffle card
        for ( let i = this.shuffledDeck.length - 1; i> 0; i-- ) {

            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.shuffledDeck[i];
            this.shuffledDeck[i] = this.shuffledDeck[j];
            this.shuffledDeck[j] = temp;
        }

    }


    //------------------------------------------------------------------------------------------------------
    // Method:  shuffleCard
    //------------------------------------------------------------------------------------------------------
    shuffleCard() {

        // Shuffle the card deck 5 Times
        for (let i = 0; i < 5; i++) {
            this.#shuffle();
        }

    } // end Shuffle


    //------------------------------------------------------------------------------------------------------
    // Method:  getNextCard - return the last card in the shuffled deck array
    //------------------------------------------------------------------------------------------------------
    getNextCard() {
        
        let card = this.shuffledDeck.pop();

        return card;

    }

}


//------------------------------------------------------------------------------
// Class:  Player - Hold information about player and the player's cards
//------------------------------------------------------------------------------
class Player {

    // Constructor
    constructor( name ) {
        this.name = name;
        this.card = [];
        this.point = 0;
    }

    //------------------------------------------------------------
    // setCard - Set card to the internal card array for play
    //------------------------------------------------------------
    setCard( card ) {

        this.card.push( card );
    }

    //------------------------------------------------------------
    // showMyCard - Show the list cards that this play has.
    //------------------------------------------------------------
    showMyCard() {

        console.log ("\nList of cards for " + this.name );

        for (let i = 0; i < this.card.length; i++) {
            console.log("card " + this.card[i].suit + " " + this.card[i].name + " " + this.card[i].value );
        }
    }

    //------------------------------------------------------------
    // addPoint - Add a point to this player as they won a match
    //------------------------------------------------------------
    addPoint() {

        this.point = this.point + 1;
    }

    //------------------------------------------------------------
    // showPoint - Show the number of point(s) for this play
    //------------------------------------------------------------
    showPoint() {

        //console.log("point =  " + this.point );

        return this.point;
    }   

    //------------------------------------------------------------
    // getCard - Get a card for this player
    //------------------------------------------------------------
    getCard() {

        return this.card.pop();
    }

}


//------------------------------------------------------------------------
// function testPlayer - Use Mocha and Chai to test testPlayer function
//------------------------------------------------------------------------
function testPlayer( name ) {

    if ( typeof name != 'string') {
        throw new Error('Name must be string' );
    }

    if ( name == undefined || name == null ) {
        throw new Error('Please pass in a name as a parameter.' );
    }
    
    let testPlayer = new Player( name );

    return testPlayer.name;

}

// Declare a constant to hold the number of cards per a deck of cards
const NUMBER_OF_CARDS_IN_DECK = 52;
const NUMBER_OF_ROUND_FOR_2_PLAYERS = 26

// Initiate a deck of card
let cardDeck = new Deck();

// Shuffle the created deck of card
cardDeck.shuffleCard();

// Created Player 1
let player1 = new Player("Jay");

// Create Player 2
let player2 = new Player("Steven");

// create a variable to hold the current card
let tempCard;

// Loop through the shuffled deck and deal 1 card at a time to each player
for ( let i = 0; i < NUMBER_OF_CARDS_IN_DECK; i++) {

    tempCard = cardDeck.getNextCard();
    //console.log ( i + "dealCard " + tempCard.suit + " " + tempCard.name + " " + tempCard.value );

    if ( i%2 == 0 ) {
        // console.log ( i + "dealCard Player 1" + tempCard.suit + " " + tempCard.name + " " + tempCard.value );
        player1.setCard( tempCard);
    } else {
        // console.log ( i + "dealCard Player 2" + tempCard.suit + " " + tempCard.name + " " + tempCard.value );
        player2.setCard( tempCard );
    }

}


// Compare the cards for player 1 and player 2
// Whichever player has a higher card, win the round.
let cardValuePlayer1 = 0;
let cardValuePlayer2 = 0;

// Loop through each round and compare cards to determine the winner
for ( let i = 0; i < NUMBER_OF_ROUND_FOR_2_PLAYERS; i++) {

    // Get the card for player 1
    cardPlayer1 = player1.getCard();

    // Get the card for player 2
    cardPlayer2 = player2.getCard();   

    // Check which player has a higher card
    if ( cardPlayer1.value > cardPlayer2.value ) {

        // Player 1 wins.  Add a point to player 1.
        player1.addPoint();

       // Display winner of this round and summary information about the cards and points.       
        console.log ("ROUND " + (i+1) + ": Player 1 " + player1.name + " wins. " + "Player 1 has a card value of " + 
              cardPlayer1.suit + " " + cardPlayer1.name + ". " + 
              "Player 2 has a card value of " + cardPlayer2.suit + " " + cardPlayer2.name + "." );

    } else if ( cardPlayer1.value < cardPlayer2.value ) {
        
        // Player 2 wins.  Add a point to player 2.
        player2.addPoint();

        // Display winner of this round and summary information about the cards and points.
        console.log ("ROUND " + (i+1) + ": Player 2 " + player2.name + " wins. " + "Player 1 has a card value of " + 
              cardPlayer1.suit + " " + cardPlayer1.name + ". " + 
              "Player 2 has a card value of " + cardPlayer2.suit + " " + cardPlayer2.name + "." );
    } else {

        // Both cards are equal.  No winner.  This round ended in a tie.  No point to any player.
        console.log ("ROUND " + (i+1) + ": No winner in this round. " + "Player 1 has a card value of " + 
        cardPlayer1.suit + " " + cardPlayer1.name + ". " + 
        "Player 2 has a card value of " + cardPlayer2.suit + " " + cardPlayer2.name + "." );       
    }
}


// Determine and display the winner of this card game
if ( player1.showPoint() > player2.showPoint() ) {
    console.log ( player1.name + " WINS this game");
} else if ( player1.showPoint() < player2.showPoint() ) {
    console.log ( player2.name + " WINS this game");
} else if ( player1.showPoint() == player2.showPoint() ) {
    console.log ( "This game ended in a tie.");
}

// Display summary of the points per each player
console.log (player1.name + " has " + player1.showPoint() + " points.  " + 
             player2.name + " has " + player2.showPoint() + " points." );


