import 'react-dates/initialize';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage'
import { loadImage } from './actions/images';
import { loadQuote } from './actions/quotes';
import quoteApi from './api/QuoteApi';
import imageApi from './api/ImageApi';
import { addQuoImg } from './actions/quoImg';

const store = configureStore();

//Loading images to show on Init Page
store.dispatch(loadImage());
store.dispatch(loadImage());
store.dispatch(loadImage());

//Loading quotes
store.dispatch(loadQuote());
store.dispatch(loadQuote());
store.dispatch(loadQuote());

store.dispatch(addQuoImg({
    quoteAuthor: "Ralph Emerson", 
    quoteText: "Good luck is another name for tenacity of purpose. ", 
    quoteLink: "http://forismatic.com/en/9eedbbce1a/"}, 
    'https://picsum.photos/200/200/?image=282'));

//console.log(imageApi.getRandomImage())
// quoteApi.getRandomQuote().done((resp) => {
//     console.log(resp);
// });


// console.log(store.getState());
const jsx = ( 
    //Redux
    //Router
    <Provider store={store}> 
        <AppRouter />
    </Provider>
)

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// firebase.auth().onAuthStateChanged((user) => {
    if (true) {
        //store.dispatch(login(user.uid));
        renderApp();
        if (history.location.pathname ==='/') {
            history.push('/dashboard');
        }
        //console.log('Log in');
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
        //console.log('Log out');
    }
// });