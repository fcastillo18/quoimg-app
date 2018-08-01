import React from 'react';
import { connect } from 'react-redux';
import selectImage from '../selectors/images';
import selectQuote from '../selectors/quotes';
import { addQuoImg } from '../actions/quoImg';

class QuoImg extends React.Component {

  handleClick = () => {
    this.props.addQuoImg(selectQuote(this.props.quotes), selectImage(this.props.images))
  }

  shouldComponentUpdate = (nextProps) => {
    // let resultQuote = this.props.quotes != undefined;
    // let resultImage = this.props.images != undefined;

    // if (resultQuote & resultImage 
    //     & this.props.quotes.length === 3 
    //     & this.props.quotes.length === 3) {
    //   //console.log('shouldComponentUpdate: ', this.props.quotes.length)
    //   return true;
    // } else {
    //   return false;
    // }
    return this.props.quoImg !== nextProps.quoImg;
  }

  // componentDidMount () {
  //   this.props.addQuoImg(selectQuote(this.props.quotes), selectImage(this.props.images))
  // }

  render(){
    //console.log('QuoImg: render call: ', this.props.quoImg);
    return (
      <div id="quoimg"> 
        <br/>
        <img id="image_container--item" src={this.props.quoImg.image}/>
        <p> {this.props.quoImg.length !== 0 ? this.props.quoImg.quote.quoteText : ''} 
          <i>{this.props.quoImg.length !== 0 ? this.props.quoImg.quote.quoteAuthor: ''}</i>
        </p>
        {<button onClick={this.handleClick}>New QuoImg</button>}
      </div> 
    )
  }
}

const mapStateToProps = (state) => ({
  quoImg: state.quoImg,
  quotes: state.quotes,
  images: state.images
})

const mapDispatchToProps = (dispatch) => ({
  //setQuoImg: (quote, image) => dispatch(setQuoImg(quote, image)),
  addQuoImg: (quote, image) => dispatch(addQuoImg(quote, image))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuoImg);