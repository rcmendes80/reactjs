import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';

import Header from './Header';
import UserList from './users/UserList';
import ProductList from './products/ProductList';
import ProductCreate from './products/ProductCreate';

const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<Route path="/users" exact component={UserList} />
						<Route path="/products" exact component={ProductList} />
						<Route path="/products/new" exact component={ProductCreate} />
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;
