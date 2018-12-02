import types from './types'
import jsonplaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = async () => {
    const response = await jsonplaceholder.get('/posts')
    return {
        type: types.FETCH_POSTS,
        payload: response.data
    }
}

