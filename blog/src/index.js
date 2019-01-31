import { render } from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './component/App';

import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
