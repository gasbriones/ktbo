import {combineReducers} from 'redux';
import gifsReducer from './gifs_reducer';
import loadingReducer from './loading_reducer'
import titleReducer from './title_reducer';


const reducers = combineReducers({
    gifs: gifsReducer,
    loading:loadingReducer,
    title:titleReducer
});

export default reducers;