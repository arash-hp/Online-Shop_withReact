import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ArticleReducer, ProductReducer } from './reducers';
import { CategoryReducer } from './reducers/CategoryReducer';
import { OrderReducer } from './reducers/OrderReducer';
import { ShoppingCartReducer } from './reducers/ShoppingCartReducer';


const reducers = combineReducers({
    article: ArticleReducer,
    product: ProductReducer,
    category: CategoryReducer,
    order: OrderReducer,
    shoppingCart: ShoppingCartReducer,
})

//this is for devtools extensions
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store