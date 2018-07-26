import * as types from '../actions/actionTypes';

const quoImgReducerDefaultState = [];

export default (state = quoImgReducerDefaultState, action) => {
  switch (action.type) {
    case types.ADD_QUOIMG:
    //console.log(action);
      return {
        quote: action.quote,
        image: action.image
      }

    default:
      return state;
  }
}
