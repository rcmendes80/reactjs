import _ from 'lodash';
import {
	FETCH_PRODUCTS,
	FETCH_PRODUCT,
	CREATE_PRODUCT,
	UPDATE_PRODUCT,
	DELETE_PRODUCT,
	ADD_PRODUCT_TAG,
	DELETE_PRODUCT_TAG
} from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case CREATE_PRODUCT:
			return { ...state, [action.payload.id]: action.payload };
		//case ADD_PRODUCT_TAG:
		//const products = state[]
		//return;
		default:
			return state;
	}
};
