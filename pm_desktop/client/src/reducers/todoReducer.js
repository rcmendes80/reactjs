import { FETCH_TODOS, FETCH_TODO, SAVE_TODO, CREATE_TODO } from '../actions/types';

const INITIAL_STATE = {
	data: {},
	isError: false,
	error: '',
	loading: false
};

export default (state = INITIAL_STATE, { type, payload, loading, isError, error }) => {
	switch (type) {
		case FETCH_TODOS:
			console.log(type, payload, loading, isError, error);
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
					...state.data,
					...todos
				}
			};
		default:
			return state;
	}
};
