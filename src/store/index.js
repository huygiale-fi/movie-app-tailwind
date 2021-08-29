import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import movieReducer from './reducers/movieReducer';
import authReducer from './reducers/authReducer'
const rootReducer = combineReducers({
    movieReducer: movieReducer,
    authReducer:authReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;