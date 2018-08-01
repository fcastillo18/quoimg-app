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
import quoteApi from './api/QuoteApi';
import imageApi from './api/ImageApi';
import { addQuoImg } from './actions/quoImg';
import { fetchImages, fetchQuotes, fetchQuoImg } from './fixtures/init';

const store = configureStore();

//dispathing actions to fetch images an quotes
fetchImages(store.dispatch);
fetchQuotes(store.dispatch);
//fetchQuoImg(store.dispatch);

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

