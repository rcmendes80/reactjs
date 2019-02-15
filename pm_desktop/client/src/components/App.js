import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';

import Header from './Header';
import UserList from './users/UserList';

const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<Route path="/users" exact component={UserList} />
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;
