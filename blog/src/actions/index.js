import axios from 'axios';
/*
export const fetchPosts = () => {
	return async function(dispatch, getState) {
		//const data = [ { title: 'Title 1' }, { title: 'Title 2' } ];
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
		dispatch({
			type: 'FETCH_POSTS',
			payload: response
		});
	};
};
*/

export const fetchPosts = () => async (dispatch) => {
	//const data = [ { title: 'Title 1' }, { title: 'Title 2' } ];
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
	dispatch({
		type: 'FETCH_POSTS',
		payload: response
	});
};
