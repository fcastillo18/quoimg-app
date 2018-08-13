import React from 'react';
import { connect } from 'react-redux';
import { resetQuotes, loadQuote } from '../actions/quotes';
import { addQuoImg } from '../actions/quoImg';

class Quotes extends React.Component {

  handleQuotes = () => {
    this.props.resetQuotes();
    this.props.loadQuote();
    this.props.loadQuote();
    this.props.loadQuote();
  }

  handleNewQuoImg = (quote) => {
    //console.log(`value: ${image}`);
    this.props.addQuoImg(quote, this.props.quoImg.image+'&blur');
  }

  render(){
    return ( 
      <div>
      <button className="button" onClick={this.handleQuotes}>New quotes</button>
        <div className="quote-container">
        <br/>
        {/*<h3 className="row vertical-text ">Quotes</h3>*/}
          {
            this.props.quotes.map((quoteObj, idx) =>( <p key={idx} className="quote-item" onClick={ () => this.handleNewQuoImg(quoteObj) }> {quoteObj.quoteText}  <i>{quoteObj.quoteAuthor}</i></p>) )
          }
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  quotes: [...state.quotes], 
  quoImg: state.quoImg
})

const mapDispatchToProps = (dispatch) => ({
  resetQuotes: () => dispatch(resetQuotes()),
  loadQuote:   () => dispatch(loadQuote()),
  addQuoImg:  (quote, image) => dispatch(addQuoImg(quote, image))
})

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);