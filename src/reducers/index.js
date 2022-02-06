import { combineReducers } from 'redux'
import repos from './repos'
import page from './page';

export default combineReducers({
    repos,
    page,
})