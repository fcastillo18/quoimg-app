class ImageApi {  
  static getRandomImage() {
    return fetch('https://picsum.photos/200/200/?random')
      .then(response => {
          return response;
      })
      .catch(error => {
        return error;
      });
  }
}

export default ImageApi;  