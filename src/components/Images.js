import React from 'react';
import { connect } from 'react-redux';
import { loadImage, resetImages } from '../actions/images';
import { fetchImages } from '../fixtures/init';
import { addQuoImg } from '../actions/quoImg';

class Images extends React.Component {

  componentDidMount(){
    
  }

  handleNewImages = () => {
    console.log(this.props);
    this.props.resetImages();
    this.props.loadImage();
    this.props.loadImage();
    this.props.loadImage();
  }

  handleNewQuoImg = (image) => {
    //console.log(`value: ${image}`);
    this.props.addQuoImg(this.props.quoImg.quote, image);
  }

  render() {
    return (
      <div className="image-container">
      <h3 className="row">Images</h3>
        {
          this.props.images.map((img, idx) => (
            <img key={idx} className="image-container__item" src={img}
                 onClick={ () => this.handleNewQuoImg(img)}/>
                )
          )
        }
        <br/>
        <button className="button" onClick={this.handleNewImages}>New images</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  images: [...state.images],
  quoImg: state.quoImg 
});

const mapDispatchToProps = (dispatch) => ({
  loadImage:  () => dispatch(loadImage()),
  resetImages:() => dispatch(resetImages()),
  addQuoImg:  (quote, image) => dispatch(addQuoImg(quote, image))
});

export default connect(mapStateToProps, mapDispatchToProps)(Images);
//['https://picsum.photos/200/200?random', 'https://picsum.photos/200/200?random']
