import _ from 'lodash';
import jsonplaceholder from '../apis/jsonPlaceholder';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER = 'FETCH_USER';

export const fetchPosts = () => async (dispatch) => {
	const response = await jsonplaceholder.get('/posts');
	dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
	const response = await jsonplaceholder.get(`/users/${id}`);
	dispatch({
		type: FETCH_USER,
		payload: response.data
	});
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());

	_.chain(getState().posts).map('userId').uniq().forEach((id) => dispatch(fetchUser(id))).value(); //Value executes the chain
};
