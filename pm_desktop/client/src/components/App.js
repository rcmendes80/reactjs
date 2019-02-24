import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';

import Header from './Header';
import UserList from './users/UserList';
import ProductList from './products/ProductList';
import ProductCreate from './products/ProductCreate';
import ProductEdit from './products/ProductEdit';
import LogbookList from './logbooks/LogbookList';
import TodoList from './todos/TodoList';
import TodoCreate from './todos/TodoCreate';
import TodoEdit from './todos/TodoEdit';

const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<div className="ui grid">
					<div className="four wide column">
						<Header />
					</div>
					<div className="twelve wide stretched column">
						<Switch>
							<Route path="/users" exact component={UserList} />
							<Route path="/todos" exact component={TodoList} />
							<Route path="/todos/new" exact component={TodoCreate} />
							<Route path="/todos/edit/:id" exact component={TodoEdit} />
							<Route path="/products" exact component={ProductList} />
							<Route path="/products/new" exact component={ProductCreate} />
							<Route path="/products/edit/:id" exact component={ProductEdit} />
							<Route path="/products/:productId/logbooks" exact component={LogbookList} />
						</Switch>
					</div>
				</div>
			</Router>
		</div>
	);
};

export default App;
