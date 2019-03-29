import {combineReducers} from 'redux';
import gifsReducer from './gifs_reducer';
import loadingReducer from './loading_reducer';


const reducers = combineReducers({
    gifs: gifsReducer,
    loading:loadingReducer
});

export default reducers;