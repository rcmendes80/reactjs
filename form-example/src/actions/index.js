import { CREATE_POST, FETCH_POSTS, ADD_POST_TAG } from './types';

let POST_ID_COUNTER = 3;

export const fetchPosts = () => {
	return {
		type: FETCH_POSTS,
		payload: [
			{
				id: 1,
				title: 'Post Title 1',
				description: 'Description of post title 1',
				tags: [ 'tag 1', 'tag 2' ]
			},
			{
				id: 2,
				title: 'Post Title 2',
				description: 'Description of post title 2',
				tags: [ 'tag A', 'tag B' ]
			},
			{
				id: 3,
				title: 'Post Title 3',
				description: 'Description of post title 3',
				tags: [ 'tag alfa', 'tag beta' ]
			}
		]
	};
};

export const createPost = (post) => {
	console.log('createPost Action:', post);
	POST_ID_COUNTER = POST_ID_COUNTER + 1;
	post.id = POST_ID_COUNTER;
	return {
		type: CREATE_POST,
		payload: post
	};
};

export const addPostTag = (tag) => {
	console.log('addPostTag Action:', tag);

	return {
		type: ADD_POST_TAG,
		payload: tag
	};
};
