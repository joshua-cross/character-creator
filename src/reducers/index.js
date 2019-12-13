import {combineReducers} from 'redux';
import registerReducer from './registerReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    register: registerReducer,
    errors: errorReducer
})