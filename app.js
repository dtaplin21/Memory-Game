const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'Cheese Burger',
        img: "images/cheeseburger.png"
    },
    {
        name: 'hot dog',
        img: "images/hotdog.png",
    },
    {
        naem: 'ice cream',
        img: "images/icecream.png",
    },
    {
        name: 'milkshake',
        img: "images/milkshake.png",
    },
    {
        name: 'nutella',
        img: "images/nutella.png",
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'Cheese Burger',
        img: "images/cheeseburger.png"
    },
    {
        name: 'hot dog',
        img: "images/hotdog.png",
    },
    {
        naem: 'ice cream',
        img: "images/icecream.png",
    },
    {
        name: 'milkshake',
        img: "images/milkshake.png",
    },
    {
        name: 'nutella',
        img: "images/nutella.png",
    }
]


cardArray.sort(() => 0.5 - Math.random())

let gridDisplay = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = [];
let cardsWon = []

function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()
function checkMatch() {
   const cards = document.querySelectorAll('img') //search for every image in document
   const optionOneId = cardsChosenIds[0]; 
   const optionTwoId = cardsChosenIds[1]; 

    console.log('Check for match!')
    if(optionOneId === optionTwoId) {
        console.log('You have clicked the same image!')
    }

   if(cardsChosen[0] == cardsChosen[1]) {
       alert('You found a match!')
    cards[optionOneId].setAttribute('src', 'images/swhite.png') //change image to white
    cards[optionTwoId].setAttribute('src', 'images/swhite.png');
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard); // remove so you cant click on the same card twice
    cardsWon.push(cardsChosen)
   } else {
        cards[optionOneId].setAttribute('src', "images/blank.png")
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
   }
   cardsChosen = [];
   cardsChosenIds = [];
}

function flipCard() {
   
    let cardID = this.getAttribute('data-id')
   cardsChosen.push(cardArray[cardID].name)
   cardsChosenIds.push(cardID);
   //console.log(cardsChosen)
   //console.log(cardsChosenIds)
   this.setAttribute('src', cardArray[cardID].img)
   if(cardsChosen.length === 2) {
    setTimeout(checkMatch, 500)
   }
}