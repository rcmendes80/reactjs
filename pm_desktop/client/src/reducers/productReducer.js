import _ from 'lodash';
import { FETCH_PRODUCTS, FETCH_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../actions/types';

export default (state = {}, { type, payload }) => {
	switch (type) {
		case FETCH_PRODUCTS:
			return { ...state, ..._.mapKeys(payload, 'id') };
		case FETCH_PRODUCT:
		case CREATE_PRODUCT:
		case UPDATE_PRODUCT:
			return { ...state, [payload.id]: payload };
		case DELETE_PRODUCT:
			return _.omit(state, payload);
		default:
			return state;
	}
};
