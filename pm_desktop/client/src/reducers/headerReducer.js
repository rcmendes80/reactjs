import { SHOW_GLOBAL_MESSAGE, HIDE_GLOBAL_MESSAGE, SELECT_MENU, SHOW_LOAD_SPINNER } from '../actions/types';
const INITIAL_STATE = {
	menu: 'home',
	globalMessage: {
		type: '',
		title: null,
		details: null,
		show: false
	}
};
export default (state = INITIAL_STATE, action) => {
	const { type, globalMessage, menu, loading = false } = action;

	switch (type) {
		case SELECT_MENU:
			return { ...state, menu };
		case SHOW_GLOBAL_MESSAGE:
			return { ...state, globalMessage };
		case HIDE_GLOBAL_MESSAGE:
			return { ...state, globalMessage };
		case SHOW_LOAD_SPINNER:
			return { ...state, loading };
		default:
			return state;
	}
};
