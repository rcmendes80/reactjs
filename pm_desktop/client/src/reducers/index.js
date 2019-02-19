import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import userReducer from './userReducer';
import productReducer from './productReducer';
import todoReducer from './todoReducer';

export default combineReducers({
	users: userReducer,
	products: productReducer,
	todos: todoReducer,
	form: formReducer
});
