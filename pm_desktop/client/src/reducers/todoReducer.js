import { FETCH_TODOS, FETCH_TODO, UPDATE_TODO, CREATE_TODO } from '../actions/types';

const INITIAL_STATE = {
	data: {},
	isError: false,
	errorMessage: null,
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	const { type, loading = false, isError = false, success = false, errorMessage = '', payload } = action;
	switch (type) {
		case FETCH_TODOS:
			const todos =
				!loading && !isError
					? payload.reduce((obj, todo) => {
							obj[todo.id] = todo;
							return obj;
						}, {})
					: {};
			return {
				isError,
				loading,
				errorMessage,
				data: {
					...INITIAL_STATE.data,
					...todos
				}
			};
		case FETCH_TODO:
			let newState = { ...state, isError, errorMessage, loading };

			if (success) {
				return {
					...newState,
					data: {
						...newState.data,
						[payload.id]: payload
					}
				};
			}

			return newState;
		case UPDATE_TODO:
			newState = { ...state, isError, errorMessage, loading };

			if (success) {
				const newData = { ...newState.data, [payload.id]: payload };
				return { ...newState, data: newData };
			}

			return newState;

		case CREATE_TODO:
			newState = { ...state, isError, errorMessage, loading };

			if (success) {
				const newData = { ...newState.data, [payload.id]: payload };
				return { ...newState, data: newData };
			}

			return newState;
		default:
			return state;
	}
};
