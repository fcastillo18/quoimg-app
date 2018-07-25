class QuoteApi {
  static getRandomQuote(){
    return $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp', // we need this for Forismatic
      dataType: 'jsonp', // this too
      // these keys build one complete API endpoint
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
        // which results in http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp
        //https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en
      },
      success: function(response) {
        response;
      }
    })
  }
}

export default QuoteApi;