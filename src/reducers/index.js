import {combineReducers} from 'redux';
import attributeReducer from './attributeReducer';

export default combineReducers({
    attributes: attributeReducer
})