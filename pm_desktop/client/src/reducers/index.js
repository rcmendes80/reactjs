import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import headerReducer from './headerReducer';
import userReducer from './userReducer';
import productReducer from './productReducer';
import todoReducer from './todoReducer';

export default combineReducers({
	header: headerReducer,
	users: userReducer,
	products: productReducer,
	todos: todoReducer,
	form: formReducer
});
