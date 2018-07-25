import React from 'react';
import { connect } from 'react-redux';

const Quotes = (props) => {
  return ( 
    <div>
      {
        props.quotes.map((quoteObj, idx) =>( <p key={idx}> {quoteObj.quoteText}  <i>{quoteObj.quoteAuthor}</i></p>) )
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  quotes: [...state.quotes]
})

export default connect(mapStateToProps)(Quotes);