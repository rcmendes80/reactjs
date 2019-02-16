import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import userReducer from './userReducer';
import productReducer from './productReducer';
import productFormReducer from './productFormReducer';

export default combineReducers({
	users: userReducer,
	products: productReducer,
	productForm: productFormReducer,
	form: formReducer
});
