import { loadImage } from '../actions/images';
import { loadQuote } from '../actions/quotes';

export const fetchImages = (dispatch) => {
  //Loading images to show on Init Page
  dispatch(loadImage());
  dispatch(loadImage());
  dispatch(loadImage());
}

export const fetchQuotes = (dispatch) => {
  //Loading quotes
  dispatch(loadQuote());
  dispatch(loadQuote());
  dispatch(loadQuote());
}