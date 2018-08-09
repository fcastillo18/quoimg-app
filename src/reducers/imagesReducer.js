import * as types from '../actions/actionTypes'

const imagesReducerDefaultState = [
  // 'http://via.placeholder.com/200x200?text=Loading...',
  // 'http://via.placeholder.com/200x200?text=Loading...',
  // 'http://via.placeholder.com/200x200?text=Loading...'
  ];

export default (state = imagesReducerDefaultState, action) => {
  switch (action.type) {
    case types.LOAD_IMAGE_SUCCESS:
      //console.log(action.type + '--:'+ state);
      return [
        ...state, 
        action.image
      ]
      
    case types.RESET_IMAGES:
    return []

    default:
      return state;
  }
}
