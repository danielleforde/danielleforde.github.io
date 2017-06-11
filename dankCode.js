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

const appDiv = document.getElementById('app')
appDiv.style.textAlign = 'center'

function generatePage(obj) {
  let titleImage
  if (obj.type === 'title') {
    appDiv.innerHTML = ''
    titleImage = document.createElement('img')
    titleImage.src = obj.image
    titleImage.height = 400
    appDiv.appendChild(titleImage)
    const playButtonOuter = document.createElement('div')
    const playButton = document.createElement('img')
    playButton.src = obj.buttonImage
    playButton.height = 90

    playButton.className = 'lighten'
    playButton.onclick = (e) => {
      pageNumber++
      generatePage(pages[pageNumber])
    }
    playButton.onmousedown = e => {
      if (e.which === 2) {
        const rands = [
          '4N3N1MlvVc4?',
          'aUea0h4DZTs?',
          'IXdNnw99-Ic?'
        ]
        const cd = rands[Math.floor((Math.random() * 3))]
        const egg = document.createElement('iframe')
        egg.width = 420
        egg.height = 315
        const ly = 'lay=1'
        const st = 'ht'
        const ut = 'utu'
        const bed = 'bed/'
        const w = Array(4).join('w')
        const ed = '.yo'
        const rep = 'om/em'
        const sc = 'tps:'
        const be = 'be.c'
        const md = '//'
        const au = 'autop'
        egg.src = st + sc + md + w + ed + ut + be + rep + bed + cd + au + ly
        appDiv.innerHTML = ''
        appDiv.appendChild(egg)
      }
    }
    appDiv.appendChild(playButtonOuter)
    playButtonOuter.appendChild(playButton)
  } else if (obj.type === 'quizer') {
    appDiv.innerHTML = ''
    titleImage = document.createElement('img')
    titleImage.src = obj.headerImage
    titleImage.height = 300
    appDiv.appendChild(titleImage)
    const outerChoices = document.createElement('div')
    const firstChoice = document.createElement('img')
    const secondChoice = document.createElement('img')
    firstChoice.src = obj.good
    firstChoice.height = 200

    firstChoice.className = 'lighten'
    firstChoice.onclick = () => {
      pageNumber++
      generatePage(pages[pageNumber])
    }
    secondChoice.src = obj.bad
    secondChoice.height = 200

    secondChoice.className = 'lighten'
    secondChoice.onclick = () => {
      pageNumber++
      score++
      generatePage(pages[pageNumber])
    }
    appDiv.appendChild(outerChoices)
    outerChoices.appendChild(firstChoice)
    outerChoices.appendChild(secondChoice)
  } else if (obj.type === 'donezo') {
    appDiv.innerHTML = ''
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
    appDiv.appendChild(resolvedTextOuter)
    resolvedTextOuter.appendChild(resolvedText)
    appDiv.appendChild(resolvedImage)
  }
}

generatePage(pages[pageNumber])

function dank() {
}
