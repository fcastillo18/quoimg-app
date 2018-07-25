import * as types from './actionTypes';

export const addQuoImg = (quote, image) => ({
  type: types.ADD_QUOIMG,
  quote, 
  image
});

