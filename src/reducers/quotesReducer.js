import * as types from '../actions/actionTypes';

const quotesReducerDefaultState = [];

export default (state = quotesReducerDefaultState, action) => {
  switch (action.type) {
    case types.LOAD_QUOTE_SUCCESS:
    //console.log(action.quote);
      return [
        ...state,
        action.quote
      ]
    case types.RESET_QUOTES:
    return []
    
    default:
      return state;
  }
}
