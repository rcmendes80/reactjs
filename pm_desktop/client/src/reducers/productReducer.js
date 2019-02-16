import _ from 'lodash';
import { FETCH_PRODUCTS, FETCH_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		default:
			return state;
	}
};
