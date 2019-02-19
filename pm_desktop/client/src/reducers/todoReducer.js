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
	error: null,
	loading: false,
	tempTodo: {
		title: null,
		description: null
	}
};

export default (state = INITIAL_STATE, action) => {
	const { type } = action;
	switch (type) {
		case FETCH_TODOS:
			const { payload, loading, isError, error } = action;
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
				error,
				data: {
					...INITIAL_STATE.data,
					...todos
				}
			};
		case CREATE_TEMP_TODO:
			return { ...INITIAL_STATE };
		case CHANGE_VALUE_TODO_FIELD:
			const { field, value } = action;

			//todo update state with field
			return {
				...state
			};
		default:
			return state;
	}
};
