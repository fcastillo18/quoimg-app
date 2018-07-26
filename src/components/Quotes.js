import React from 'react';
import { connect } from 'react-redux';
import { resetQuotes, loadQuote } from '../actions/quotes';

class Quotes extends React.Component {

  handleQuotes = () => {
    this.props.resetQuotes();
    this.props.loadQuote();
    this.props.loadQuote();
    this.props.loadQuote();
  }

  render(){
    return ( 
      <div>
        {
          this.props.quotes.map((quoteObj, idx) =>( <p key={idx}> {quoteObj.quoteText}  <i>{quoteObj.quoteAuthor}</i></p>) )
        }
        <button onClick={this.handleQuotes}>New quotes</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  quotes: [...state.quotes]
})

const mapDispatchToProps = (dispatch) => ({
  resetQuotes: () => dispatch(resetQuotes()),
  loadQuote:   () => dispatch(loadQuote())
})

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);