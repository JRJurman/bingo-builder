const Tram = require('tram-one')
const html = Tram.html({
  'bingo-header': require('./components/bingo-header'),
  'bingo-input': require('./components/bingo-input'),
  'bingo-area': require('./components/bingo-area')
})
const app = new Tram()

const home = (state) => {
  const onupdatewords = (event) => {
    state.dispatch({type: 'update_words', words: event.currentTarget.value})
  }
  return html`
    <div>
      <bingo-header></bingo-header>
      <bingo-input
        onupdatewords=${onupdatewords}
        words=${state.words}>
      </bingo-input>
      <div>
        <bingo-area words=${state.words}></bingo-area>
      </div>
    </div>
  `
}

app.addRoute('/', home)
app.addReducer('words',
  require('./reducers/words-reducer'),
  'string, int, hash, dict, long, float, char, array, class'
)
app.start('.main')
