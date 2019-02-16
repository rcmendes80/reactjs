import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import userReducer from './userReducer';
import productReducer from './productReducer';

export default combineReducers({
	users: userReducer,
	products: productReducer,
	form: formReducer
});
