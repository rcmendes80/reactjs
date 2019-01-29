import { combineReducers } from 'redux';
const songsReducer = () => {
	return [
		{ title: 'Music A', duration: '2:25' },
		{ title: 'Music B', duration: '3:00' },
		{ title: 'Music C', duration: '4:05' },
		{ title: 'Music D', duration: '3:32' },
		{ title: 'Music E', duration: '4:08' }
	];
};

const selectSongReducer = (state = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return state;
};

export default combineReducers({
	songs: songsReducer,
	selectSong: selectSongReducer
});
