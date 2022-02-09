import { combineReducers } from 'redux'
import repos from './repos'
import page from './page';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    repos,
    page,
    loadingBar: loadingBarReducer,
})