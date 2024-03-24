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

const gridDisplay = document.querySelector('#grid')

function createBoard() {
    for(let i = 0; i < 10; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)
    }
}

createBoard()