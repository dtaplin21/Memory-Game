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
   const optionOneId = cardsChosen[0];
   const optionTwoId = cardsChosen[1]; 

    console.log('Check for match!')
    if(optionOneId === optionTwoId) {
        console.log('You have clicked the same image!')
    }

   if(cardsChosen[0] == cardsChosen[1]) {
       alert('You found a match!')
    cards[cardsChosenIds[0]].setAttribute('src', 'images/swhite.png') //change image to white
    cards[cardsChosenIds[1]].setAttribute('src', 'images/swhite.png');
    cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
   }   
   cardsChosen = [] 
}

function flipCard() {
   
    let cardID = this.getAttribute('data-id')
   cardsChosen.push(cardArray[cardID].name)
   cardsChosenIds.push(cardID);
   console.log(cardsChosen)
   console.log(cardsChosenIds)
   this.setAttribute('src', cardArray[cardID].img)
   if(cardsChosen.length === 2) {
    setTimeout(checkMatch, 500)
   }
}