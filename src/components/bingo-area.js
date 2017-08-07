const Tram = require('tram-one')
const html = Tram.html({
  'bingo-word': require('./bingo-word')
})

const containerStyle = `
  display: inline-block;
  position: relative;
  width: 80%;
  text-align: center;
  margin-top: 3rem;
`

const fillStyle = `
  margin-top: 100%;
`

module.exports = (attrs) => {
  const words = attrs.words.split(', ')

  // determine the smallest square
  const smallestSquare = Math.floor(Math.pow(words.length, 0.5))

  // shuffle words
  const shuffledWords = words.reduce((shuffle, word) => {
    return Math.round(Math.random()) ? shuffle.concat([word]) : [word].concat(shuffle)
  }, [])

  // trim words into smallest square
  const squareWords = shuffledWords.slice(0, Math.pow(smallestSquare, 2))

  // build empty 2D array
  const board = '.'.repeat(smallestSquare - 1).split('.').map( () =>
    '.'.repeat(smallestSquare - 1).split('.')
  )

  // put shuffled words into 2D array
  squareWords.forEach((word, index) => {
    const row = Math.floor(index / (board.length))
    const col = index % (board[0].length)
    board[row][col] = html`<bingo-word word=${word}></bingo-word>`
  })

  const gridStyle = `
    display: grid;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    grid-template-columns: ${'1fr '.repeat(smallestSquare)};
    grid-template-rows: ${'1fr '.repeat(smallestSquare)};
  `

  return html`
    <div style=${containerStyle}>
      <div style=${fillStyle}></div>
      <div style=${gridStyle}>
        ${board}
      </div>
    </div>
  `
}
