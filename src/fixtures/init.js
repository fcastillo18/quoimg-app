import { loadImage } from '../actions/images';
import { loadQuote } from '../actions/quotes';
import { addQuoImg } from '../actions/quoImg';

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

export const fetchQuoImg = (dispatch) => {
  dispatch(addQuoImg({
      text:'text', 
      author:'me',
      link:'link'
    },'image'
  ))
}