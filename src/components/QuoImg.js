import React from 'react';
import { connect } from 'react-redux';
import selectImage from '../selectors/images';
import selectQuote from '../selectors/quotes';

const QuoImg = (props) =>  {
  return (
    <div id="quoimg"> 
      <img id="image_container--item" src={props.quoImg.image}/>
      <p> {props.quoImg.quote.quoteText} <i>{props.quoImg.quote.quoteAuthor}</i></p>
    </div> 
  )
}

const mapStateToProps = (state) => ({
  quoImg:{
    quote: selectQuote(state.quotes), //create a selector for this
    image: selectImage(state.images) ////create a selector for this
  }
})

export default connect(mapStateToProps)(QuoImg);