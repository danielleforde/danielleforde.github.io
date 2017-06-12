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
    },
    button: './nextHand.jpg'
  },
  {
    type: 'postdonezo',
    info: {
      half: {
        image: './halfFuckedResult.jpg'
      },
      full: {
        image: './fullyFuckedResult.jpg'
      }
    },
    button: './toLastPage.jpg'
  },
  {
    type: 'final',
    image: 'final.jpg'
  }
]

const appDiv = document.getElementById('app')

function generatePage(obj) {
  if (obj.type === 'title') {
    appDiv.innerHTML = ''
    const firstTitleImage = document.createElement('img')
    firstTitleImage.src = obj.image
    firstTitleImage.height = 400
    appDiv.appendChild(firstTitleImage)
    const playButtonOuter = document.createElement('div')
    const playButton = document.createElement('img')
    playButton.src = obj.buttonImage
    playButton.height = 90

    playButton.className = 'lighten'
    playButton.onclick = () => {
      pageNumber++
      generatePage(pages[pageNumber])
    }
    playButton.onmousedown = e => {
      if (e.which === 2) {
        const rands = [
          '4N3N1MlvVc4?'
        ]
        const cd = rands[0]
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
    const titleImage = document.createElement('img')
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
    let nextFunction
    if (score < 1) {
      scoreResolved = 'none'
      nextFunction = () => {
        pageNumber = pageNumber + 2
        generatePage(pages[pageNumber])
      }
    } else if (score >= 1 && score <= 4) {
      scoreResolved = 'half'
      nextFunction = () => {
        pageNumber++
        generatePage(pages[pageNumber])
      }
    } else if (score > 4) {
      scoreResolved = 'full'
      nextFunction = () => {
        pageNumber++
        generatePage(pages[pageNumber])
      }
    }
    const resolvedTextOuter = document.createElement('div')
    const resolvedText = document.createElement('img')
    const resolvedImage = document.createElement('img')
    const nextButton = document.createElement('img')
    resolvedText.src = obj.info[scoreResolved].text
    resolvedText.height = 150
    resolvedImage.src = obj.info[scoreResolved].image
    resolvedImage.height = 400
    nextButton.src = obj.button
    nextButton.height = 120
    nextButton.className = 'lighten'
    nextButton.onclick = nextFunction
    appDiv.appendChild(resolvedTextOuter)
    resolvedTextOuter.appendChild(resolvedText)
    appDiv.appendChild(resolvedImage)
    appDiv.appendChild(nextButton)
  } else if (obj.type === 'postdonezo') {
    appDiv.innerHTML = ''
    const result = document.createElement('img')
    const goToFinal = document.createElement('img')
    let scoreResolved
    if (score >= 1 && score <= 4) {
      scoreResolved = 'half'
    } else if (score > 4) {
      scoreResolved = 'full'
    }
    result.src = obj.info[scoreResolved].image
    result.height = 400
    goToFinal.src = obj.button
    goToFinal.height = 110
    goToFinal.className = 'lighten'
    goToFinal.onclick = () => {
      pageNumber++
      generatePage(pages[pageNumber])
    }
    appDiv.appendChild(result)
    appDiv.appendChild(goToFinal)
  } else if (obj.type === 'final') {
    app.innerHTML = ''
    const final = document.createElement('img')
    const outerLink = document.createElement('div')
    const link = document.createElement('a')
    final.src = obj.image
    final.height = 600
    link.setAttribute('href', 'https://ourworldindata.org/')
    link.innerHTML = 'Click here for a source! I\'m not making this shit up, I promise!'
    appDiv.appendChild(final)
    appDiv.appendChild(outerLink)
    outerLink.appendChild(link)
  }
}

generatePage(pages[pageNumber])
