const Tram = require('tram-one')
const html = Tram.html()

const wordStyle = `
  text-align: center;
  border: 1px solid black;
  font-size: 1.4em;
  padding-top: 40%;
`
module.exports = (attrs) => {
  return html`
    <div style=${wordStyle}>
      ${attrs.word}
    </div>
  `
}
