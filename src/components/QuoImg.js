import React from 'react';
import { connect } from 'react-redux';

const QuoImg = (props) =>  {
  // console.log(props.quoImg);
  return (
    <div id="quoimg"> 
      <img id="image_container--item" src={props.quoImg.image}/>
      <p> {props.quoImg.quote.text} <i>{props.quoImg.quote.author}</i></p> 
      <button>QuoImg</button>
    </div> 
  )
}
const mapStateToProps = (state) => ({
  quoImg:{
    quote: state.quoImg.quote, //create a selector for this
    image: state.quoImg.image ////create a selector for this
  }
})

export default connect(mapStateToProps)(QuoImg);