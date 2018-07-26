import * as types from '../actions/actionTypes'

const imagesReducerDefaultState = [];

export default (state = imagesReducerDefaultState, action) => {
  switch (action.type) {
    case types.LOAD_IMAGE_SUCCESS:
      //console.log(action.type + '--:'+ state);
      return [
        ...state, 
        action.image
      ]
      
    case types.RESET_IMAGES:
    return [
      //imagesReducerDefaultState
    ]

    default:
      return state;
  }
}
