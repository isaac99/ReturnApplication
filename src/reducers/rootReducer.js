/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import simpleReducer from './sampleReducer';
import newReturnModalReducer from './newReturnModalReducer';
import loginFormModalReducer from './loginFormModalReducer';
import setSignedInReducer from './setSignedInReducer';

export default combineReducers({
    simple: simpleReducer,
    newReturnMenuOpen: newReturnModalReducer,
    loginFormOpen: loginFormModalReducer,
    userSignIn: setSignedInReducer
});