
export default (images) => {
  const randomNum = Math.floor((Math.random() * images.length));
  const image = images.filter((img, idx) => {
    return idx == randomNum;
  });
  // console.log(image)
  return image;
}