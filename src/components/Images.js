import React from 'react';
import { connect } from 'react-redux';
import { loadImage, resetImages } from '../actions/images';
import { fetchImages } from '../fixtures/init';


class Images extends React.Component {

  handleClick = () => {
    console.log(this.props);
    this.props.resetImages();
    this.props.loadImage();
    this.props.loadImage();
    this.props.loadImage();
  }

  render() {
    return (
      <div>
        {
          this.props.images.map((img, idx) => (<img key={idx} id="image_container--item" src={img}/>) )
        }
        <br/>
        <button onClick={this.handleClick}>New images</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  images: [...state.images] 
});

const mapDispatchToProps = (dispatch) => ({
  loadImage:  () => dispatch(loadImage()),
  resetImages:() => dispatch(resetImages())
});

export default connect(mapStateToProps, mapDispatchToProps)(Images);
//['https://picsum.photos/200/200?random', 'https://picsum.photos/200/200?random']
