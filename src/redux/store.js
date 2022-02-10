import { combineReducers, createStore ,compose ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { ArticleReducer, SlideReducer } from './reducers';


const reducers = combineReducers({
    article: ArticleReducer,
    slide: SlideReducer
})

//this is for devtools extensions
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)));

export default store