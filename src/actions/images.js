import * as types from './actionTypes'
import imageApi from "../api/ImageApi";

export const loadImageSuccess = (image) => ({
  type: types.LOAD_IMAGE_SUCCESS,
  image
});

export const loadImage = () => {
  return (dispatch) => {
    return imageApi.getRandomImage()
      .then(resp => {
        //console.log('image in action: ',resp.url);
        dispatch(loadImageSuccess(resp.url));
      })
      .catch(error => {
        throw(error);
      });
  };
}
