import { ADD_PRODUCT_TAG, DELETE_PRODUCT_TAG, FETCH_PRODUCT_TAGS } from '../actions/types';
import _ from 'lodash';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_PRODUCT_TAGS:
			return { ...state, ..._.mapKeys(action.payload, 'title') };
		case ADD_PRODUCT_TAG:
			let tags = state.tags;
			if (!tags) {
				tags = [];
			}
			const newProduct = { ...state, tags: _.uniq([ ...tags, action.payload ]) };
			console.log('new product form', newProduct);
			return newProduct;
		case DELETE_PRODUCT_TAG:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
