import React from 'react';
import { connect } from 'react-redux';
import selectImage from '../selectors/images';
import selectQuote from '../selectors/quotes';
import { addQuoImg } from '../actions/quoImg';
import CanvasQuoImg from './CanvasQuoImg';
import { CompactPicker }from 'react-color';
import SketchColorPicker from './SketchColorPicker';
import ButtonExample from './ButtonExample';

class QuoImg extends React.Component {

  handleClick = () => {
    this.props.addQuoImg(selectQuote(this.props.quotes), selectImage(this.props.images))
  }

  shouldComponentUpdate = (nextProps) => {
    return this.props.quoImg !== nextProps.quoImg;
  }

  componentDidMount () {
    this.props.addQuoImg("Your quote", "http://via.placeholder.com/400x400?text=QuoImg")
  }

  render(){
    const quote = this.props.quoImg.quote;
    let image= this.props.quoImg.image ;
    //console.log('CenterQuoteImg.js---> ', image, quote);
    if (quote && image) {
      image = image.replace('200', '400');
      image = image.replace('200', '400');
      console.log(image);
        return(
            <div className="quoimg">
                <CanvasQuoImg image={image} quote={quote.quoteText} author={quote.quoteAuthor} width="400" height="400" />
                <div className="quoimg-sharing">
                  <a href="#"><i className="button--sharing fab fa-facebook fa-2x" ></i></a>
                  <a href="#"><i className="button--sharing fab fa-twitter fa-2x" ></i></a>
                  <a href="#"><i className="button--sharing fas fa-save fa-2x" ></i></a>
                </div>
                <SketchColorPicker />
                <ButtonExample />
                {/*
                  <ion-icon name="logo-facebook" size="large"></ion-icon> <a href="#">Facebook</a>
                <ion-icon name="logo-twitter" size="large"></ion-icon> <a href="#">Twiter</a>
                <ion-icon name="save" size="large"></ion-icon> <a href="#">Save</a>
                */}
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