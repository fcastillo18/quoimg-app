import React from 'react';
import { connect } from 'react-redux';
import selectImage from '../selectors/images';
import selectQuote from '../selectors/quotes';
import { addQuoImg } from '../actions/quoImg';
import CanvasQuoImg from './CanvasQuoImg';

class QuoImg extends React.Component {

  handleClick = () => {
    this.props.addQuoImg(selectQuote(this.props.quotes), selectImage(this.props.images))
  }

  shouldComponentUpdate = (nextProps) => {
    return this.props.quoImg !== nextProps.quoImg;
  }

  // componentDidMount () {
  //   this.props.addQuoImg(selectQuote(this.props.quotes), selectImage(this.props.images))
  // }

  render(){
    const quote = this.props.quoImg.quote;
    const image= this.props.quoImg.image ;
    //console.log('CenterQuoteImg.js---> ', image, quote);
    if (quote && image) {
        return(
            <div>
                <CanvasQuoImg image={image} quote={quote.quoteText} author={quote.quoteAuthor} width="300" height="300" />
            </div>  
        )
    }else {
        return <div></div>
    }
    /*
    return (
      <div id="quoimg"> 
        <br/>
        <img id="image_container--item" src={this.props.quoImg.image}/>
        <p> {this.props.quoImg.length !== 0 ? this.props.quoImg.quote.quoteText : ''} 
          <i>{this.props.quoImg.length !== 0 ? this.props.quoImg.quote.quoteAuthor: ''}</i>
        </p>
        {<button onClick={this.handleClick}>New QuoImg</button>}
      </div> 
    )*/
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