import {
	FETCH_TODOS,
	FETCH_TODO,
	UPDATE_TODO,
	CREATE_TODO,
	UPDATE_TODO_PROPERTY_VALUE,
	DELETE_TODO
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_TODOS:
			return payload.reduce((obj, todo) => {
				obj[todo.id] = todo;
				return obj;
			}, {});
		case FETCH_TODO:
		case UPDATE_TODO:
		case CREATE_TODO:
			return {
				...state,
				[payload.id]: payload
			};
		case DELETE_TODO:
			const newState = { ...state };
			delete newState[payload];
			return newState;
		case UPDATE_TODO_PROPERTY_VALUE:
			const { id, property, value } = payload;
			const updatedTodo = { ...state[id], [property]: value };
			return { ...state, [id]: updatedTodo };
		default:
			return state;
	}
};
