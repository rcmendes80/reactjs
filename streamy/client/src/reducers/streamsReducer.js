import _ from 'lodash';
import { CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, DELETE_STREAM, EDIT_STREAM } from '../actions/types';
export default (state = [], action) => {
	switch (action.type) {
		case CREATE_STREAM:
			return [ ...state, action.payload ];
		default:
			return state;
	}
};
