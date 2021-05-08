document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'basket',
      img: 'img/ball.png '
    },
    {
      name: 'basketball',
      img: 'img/basketball.png'
    },
    {
      name: 'deporte',
      img: 'img/deporte.png'
    },
    {
      name: 'futbolAmericano',
      img: 'img/futAm.png'
    },
    {
      name: 'futSoccer',
      img: 'img/futSo.png'
    },
    {
      name: 'voleibol',
      img: 'img/vol.png'
    },
    {
      name: 'basket',
      img: 'img/ball.png'
    },
    {
      name: 'basketball',
      img: 'img/basketball.png'
    },
    {
      name: 'deporte',
      img: 'img/deporte.png'
    },
    {
      name: 'futbolAmericano',
      img: 'img/futAm.png'
    },
    {
      name: 'futSoccer',
      img: 'img/futSo.png'
    },
    {
      name: 'voleibol',
      img: 'img/vol.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'img/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'img/blank.png')
      cards[optionTwoId].setAttribute('src', 'img/blank.png')
      alert('Encontraste el par')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Sigue así!!')
      cards[optionOneId].setAttribute('src', 'img/white.png')
      cards[optionTwoId].setAttribute('src', 'img/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'img/blank.png')
      cards[optionTwoId].setAttribute('src', 'img/blank.png')
      alert('Intenta de nuevo')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Encontraste todas mi rey'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
