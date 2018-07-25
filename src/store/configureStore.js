import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import imagesReducer from '../reducers/imagesReducer';
import quotesReducer from '../reducers/quotesReducer';
import quoImgReducer from '../reducers/quoImgReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    //Store creation
    const store = createStore(
        combineReducers({
            auth: authReducer,
            images: imagesReducer,
            quotes: quotesReducer,
            quoImg: quoImgReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store; 
}
