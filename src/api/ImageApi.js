class ImageApi {  
  static getRandomImage() {
    return fetch('https://picsum.photos/250/250/?random')
      .then(response => {
          return response;
      })
      .catch(error => {
        return error;
      });
  }
}

export default ImageApi;  