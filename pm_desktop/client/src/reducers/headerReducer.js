import { SHOW_GLOBAL_MESSAGE, HIDE_GLOBAL_MESSAGE } from '../actions/types';
const INITIAL_STATE = {
	selectedMenu: 'home',
	globalMessage: {
		type: '',
		title: null,
		details: null,
		show: false
	}
};
export default (state = INITIAL_STATE, action) => {
	const { type, globalMessage } = action;

	switch (type) {
		default:
			return state;
	}
};
