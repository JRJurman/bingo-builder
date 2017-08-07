module.exports = (words, action) => {
  if (action.type === 'update_words') {
    return action.words
  }
  return words
}
