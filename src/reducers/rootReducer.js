/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import simpleReducer from './sampleReducer';
import newReturnModalReducer from './newReturnModalReducer';

export default combineReducers({
    simple: simpleReducer,
    newReturnMenuOpen: newReturnModalReducer
});