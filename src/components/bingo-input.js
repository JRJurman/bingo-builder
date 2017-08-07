const Tram = require('tram-one')
const html = Tram.html()

const inputStyle = `
  width: 80%;
`
module.exports = (attrs) => {
  return html`
    <textarea
        style=${inputStyle}
        onchange=${attrs.onupdatewords}>
      ${attrs.words}
    </textarea>
  `
}
