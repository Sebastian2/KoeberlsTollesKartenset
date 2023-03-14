
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }
// Array mit den Karten-Unicodezeichen
var deck = [
	'🂡', '🂢', '🂣', '🂤', '🂥', '🂦', '🂧', '🂨', '🂩', '🂪', '🂫', '🂭', '🂮',
	'🂱', '🂲', '🂳', '🂴', '🂵', '🂶', '🂷', '🂸', '🂹', '🂺', '🂻', '🂽', '🂾',
	'🂿', '🃁', '🃂', '🃃', '🃄', '🃅', '🃆', '🃇', '🃈', '🃉', '🃊', '🃋', '🃍',
	'🃎', '🃑', '🃒', '🃓', '🃔', '🃕', '🃖', '🃗', '🃘', '🃙', '🃚', '🃛', '🃝',
	'🃞', '🃟'
];

const workouts = {
    '🂡': 'Liegestütz','🂢': 'Liegestütz','🂣': 'Liegestütz','🂤': 'Liegestütz','🂥': 'Liegestütz','🂦': 'Liegestütz',
    '🂧': 'Liegestütz','🂨': 'Liegestütz','🂩': 'Liegestütz','🂪': 'Liegestütz','🂫': 'Liegestütz','🂭': 'Liegestütz',
    '🂮': 'Liegestütz',
    '🂱': 'Aufstehn du dickes Kind','🂲': 'Aufstehn du dickes Kind','🂳': 'Aufstehn du dickes Kind','🂴': 'Aufstehn du dickes Kind','🂵': 'Aufstehn du dickes Kind',
    '🂶': 'Aufstehn du dickes Kind','🂷': 'Aufstehn du dickes Kind','🂸': 'Aufstehn du dickes Kind','🂹': 'Aufstehn du dickes Kind','🂺': 'Aufstehn du dickes Kind',
    '🂻': 'Aufstehn du dickes Kind','🂽': 'Aufstehn du dickes Kind','🂾': 'Aufstehn du dickes Kind',
    '🃁': 'Fußmassage','🃂': 'Fußmassage','🃃': 'Fußmassage','🃄': 'Fußmassage','🃅': 'Fußmassage','🃆': 'Fußmassage',
    '🃇': 'Fußmassage','🃈': 'Fußmassage','🃉': 'Fußmassage','🃊':'Fußmassage','🃋':'Fußmassage','🃍':'Fußmassage',
	'🃎': 'Fußmassage',
    '🃑':'A Stamperl owa flott', '🃒':'A Stamperl owa flott', '🃓':'A Stamperl owa flott', '🃔':'A Stamperl owa flott', '🃕':'A Stamperl owa flott', '🃖':'A Stamperl owa flott', '🃗':'A Stamperl owa flott',
    '🃘':'A Stamperl owa flott', '🃙':'A Stamperl owa flott', '🃚':'A Stamperl owa flott', '🃛':'A Stamperl owa flott', '🃝':'A Stamperl owa flott',
	'🃞': 'A Stamperl owa flott',
    '🂿': 'iss eine Banane',
    '🃟': 'drink a bier'
}
// Funktion zum Mischen des Decks
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// Mischen des Decks
window.onload = shuffleDeck(deck);

// Hinzufügen des Klick-Handlers zum Button
const drawButton = document.getElementById('drawButton');
drawButton.addEventListener('click', drawCard);

// Funktion zum Ziehen einer Karte
function drawCard() {
    var numCards = deck.length;
	if (numCards > 0) {
        const cardIndex = Math.floor(Math.random() * deck.length);
        const card = deck[cardIndex];

        var cardInfo = document.getElementById("card-info");
        cardInfo.textContent = "There are "+numCards+" cards left";

        var workout = getWorkout(card);
        const workoutName = document.getElementById('workoutName');
        workoutName.innerHTML = `<div class="workout">${workout}`;

        const cardDisplay = document.getElementById('cardDisplay');
        if(workout == "Fußmassage" || workout == "Aufstehn du dickes Kind")
        {
            cardDisplay.innerHTML = `<div class="cardred">${card}`; 
        }
        else{
            cardDisplay.innerHTML = `<div class="card">${card}`;
        }

        deck.splice(cardIndex, 1);
    } 
    else{
        var cardInfo = document.getElementById("card-info");
        cardInfo.textContent = "0 cards left";
    }
}
function getWorkout(card) {
    return workouts[card];
}