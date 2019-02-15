import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';

import Header from './Header';

const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />App
				</div>
			</Router>
		</div>
	);
};

export default App;
