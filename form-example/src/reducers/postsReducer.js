import _ from 'lodash';
import { CREATE_POST, FETCH_POSTS, ADD_POST_TAG } from '../actions/types';
export default (state = {}, { type, payload }) => {
	switch (type) {
		case FETCH_POSTS:
			return { ...state, ..._.mapKeys(payload, 'id') };
		case CREATE_POST:
			const { id } = payload;
			return { ...state, [id]: payload };
		case ADD_POST_TAG:
			return state;
		default:
			return state;
	}
};
