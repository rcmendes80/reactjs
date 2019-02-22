import { FETCH_TODOS, FETCH_TODO, UPDATE_TODO, CREATE_TODO, UPDATE_TODO_PROPERTY_VALUE } from '../actions/types';

const INITIAL_STATE = {
	data: {},
	isError: false,
	errorMessage: null,
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	const { type, loading = false, isError = false, success = false, errorMessage = '', payload } = action;
	const newState = { ...state, isError, errorMessage, loading };
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
			if (success) {
				const newData = { ...newState.data, [payload.id]: payload };
				return { ...newState, data: newData };
			}

			return newState;

		case CREATE_TODO:
			if (success) {
				const newData = { ...newState.data, [payload.id]: payload };
				return { ...newState, data: newData };
			}

			return newState;
		case UPDATE_TODO_PROPERTY_VALUE:
			const { id, property, value } = payload;
			const updatedTodo = { ...newState.data[id], [property]: value };
			return { ...newState, data: { ...newState.data, [id]: updatedTodo } };
		default:
			return state;
	}
};
