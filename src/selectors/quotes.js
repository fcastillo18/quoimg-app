
export default (quotes) => {
  // console.log(quotes)
  const randomNum = Math.floor((Math.random() * quotes.length));
  const quote = quotes.filter((quote, idx) => {
    // console.log(idx,'--:',randomNum ,quote)
    return idx == randomNum;
  });
  // console.log(quote[0])
  return {...quote[0]};
}