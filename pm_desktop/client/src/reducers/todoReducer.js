import {
	FETCH_TODOS,
	FETCH_TODO,
	SAVE_TODO,
	CREATE_TODO,
	CREATE_TEMP_TODO,
	CHANGE_VALUE_TODO_FIELD
} from '../actions/types';

const INITIAL_STATE = {
	data: {},
	isError: false,
	errorMessage: null,
	loading: false,
	tempTodo: {
		title: '',
		description: ''
	}
};

export default (state = INITIAL_STATE, action) => {
	const { type, loading, isError, success, errorMessage, payload } = action;
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
		case SAVE_TODO:
			if (isError) {
				return { ...state, isError, error: errorMessage };
			}

			if (success) {
				const newData = { ...state.data, [payload.id]: payload };
				return { ...state, data: newData };
			}

			return { ...state, loading };

		case CREATE_TEMP_TODO:
			return { ...INITIAL_STATE };
		case CHANGE_VALUE_TODO_FIELD:
			const { field, value } = action;
			const newTempTodo = { ...state.tempTodo, [field]: value };

			return {
				...state,
				tempTodo: newTempTodo
			};
		default:
			return state;
	}
};
