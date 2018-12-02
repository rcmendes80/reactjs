import { combineReducers } from 'redux'

import types from '../actions/types'

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_POSTS:
            return [{ id: 1, title: 'Title 1' }]
        default:
            return state
    }
}

export default combineReducers({ posts: postsReducer })