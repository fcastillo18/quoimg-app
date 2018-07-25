import * as types from './actionTypes';
import quoteApi from '../api/QuoteApi';

export const loadQuoteSuccess = (quote) => ({
  type: types.LOAD_QUOTE_SUCCESS,
  quote
});

export const loadQuote = () => {
  return (dispatch) => {
    return quoteApi.getRandomQuote()
      .done((resp)=>{
        //console.log(resp);
        dispatch(loadQuoteSuccess({
          quoteAuthor: resp.quoteAuthor,
          quoteText: resp.quoteText,
          quoteLink: resp.quoteLink
        }))
      })
  }
}
