import _ from 'lodash';
import {
	FETCH_PRODUCTS,
	FETCH_PRODUCT,
	CREATE_PRODUCT,
	UPDATE_PRODUCT,
	DELETE_PRODUCT,
	ADD_PRODUCT_TAG
} from '../actions/types';

export default (state = {}, { type, payload }) => {
	switch (type) {
		case FETCH_PRODUCTS:
			return { ...state, ..._.mapKeys(payload, 'id') };
		case FETCH_PRODUCT:
			return { ...state, [payload.id]: payload };
		case CREATE_PRODUCT:
			return { ...state, [payload.id]: payload };
		case UPDATE_PRODUCT:
			return { ...state, [payload.id]: payload };
		case DELETE_PRODUCT:
			return state;
		case ADD_PRODUCT_TAG:
			const { productId } = payload;
			const { tag } = payload;
			let product = state[productId];
			product.tags = _.uniq([ ...product.tags, tag ]);
			return { ...state, [productId]: product };
		default:
			return state;
	}
};
