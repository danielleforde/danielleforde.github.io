let score = 0
let pageNumber = 0

const pages = [
  {
    type: 'title',
    image: './title.jpg',
    buttonImage: './playButton.jpg'
  },
  {
    type: 'quizer',
    headerImage: './povertyTitle.jpg',
    good: './doingGood.jpg',
    bad: './notSoGood.jpg'
  },
  {
    type: 'quizer',
    headerImage: './hungerTitle.jpg',
    good: './doingGood.jpg',
    bad: './notSoGood.jpg'
  },
  {
    type: 'quizer',
    headerImage: './peaceTitle.jpg',
    good: './doingPeaceful.jpg',
    bad: './notSoPeaceful.jpg'
  },
  {
    type: 'quizer',
    headerImage: './childTitle.jpg',
    good: './doingGood.jpg',
    bad: './notSoGood.jpg'
  },
  {
    type: 'quizer',
    headerImage: './warTitle.jpg',
    good: './doingGood.jpg',
    bad: './fucked.jpg'
  },
  {
    type: 'donezo',
    info: {
      none: {
        text: './goodWorldText.jpg',
        image: './goodWorld.jpg'
      },
      half: {
        text: './halfFuckedText.jpg',
        image: './halfFucked.jpg'
      },
      full: {
        text: './fullyFuckedText.jpg',
        image: './fullyFucked.jpg'
      }
    }
  }
]

function lighten (el) {
  return () => {
    el.style.opacity = 0.6
  }
}

function backToNormal (el) {
  return () => {
    el.style.opacity = 1
  }
}

function generatePage(obj) {
  let titleImage
  if (obj.type === 'title') {
    document.body.innerHTML = ''
    titleImage = document.createElement('img')
    titleImage.src = obj.image
    titleImage.height = 400
    document.body.appendChild(titleImage)
    const playButtonOuter = document.createElement('div')
    const playButton = document.createElement('img')
    playButton.src = obj.buttonImage
    playButton.height = 90
    playButton.onmouseover = lighten(playButton)
    playButton.onmouseout = backToNormal(playButton)
    playButton.onclick = () => {
      pageNumber++
      generatePage(pages[pageNumber])
    }
    document.body.appendChild(playButtonOuter)
    playButtonOuter.appendChild(playButton)
  } else if (obj.type === 'quizer') {
    document.body.innerHTML = ''
    titleImage = document.createElement('img')
    titleImage.src = obj.headerImage
    titleImage.height = 300
    document.body.appendChild(titleImage)
    const outerChoices = document.createElement('div')
    const firstChoice = document.createElement('img')
    const secondChoice = document.createElement('img')
    firstChoice.src = obj.good
    firstChoice.height = 200
    firstChoice.onmouseover = lighten(firstChoice)
    firstChoice.onmouseout = backToNormal(firstChoice)
    firstChoice.onclick = () => {
      pageNumber++
      generatePage(pages[pageNumber])
    }
    secondChoice.src = obj.bad
    secondChoice.height = 200
    secondChoice.onmouseover = lighten(secondChoice)
    secondChoice.onmouseout = backToNormal(secondChoice)
    secondChoice.onclick = () => {
      pageNumber++
      score++
      generatePage(pages[pageNumber])
    }
    document.body.appendChild(outerChoices)
    outerChoices.appendChild(firstChoice)
    outerChoices.appendChild(secondChoice)
  } else if (obj.type === 'donezo') {
    document.body.innerHTML = ''
    let scoreResolved
    if (score < 1) {
      scoreResolved = 'none'
    } else if (score >= 1 && score <= 4) {
      scoreResolved = 'half'
    } else if (score > 4) {
      scoreResolved = 'full'
    }
    const resolvedTextOuter = document.createElement('div')
    const resolvedText = document.createElement('img')
    const resolvedImage = document.createElement('img')
    resolvedText.src = obj.info[scoreResolved].text
    resolvedText.height = 150
    resolvedImage.src = obj.info[scoreResolved].image
    resolvedImage.height = 400
    document.body.appendChild(resolvedTextOuter)
    resolvedTextOuter.appendChild(resolvedText)
    document.body.appendChild(resolvedImage)
  }
}
document.body.style.textAlign = 'center'
generatePage(pages[pageNumber])
