import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from './history';

import Header from './Header';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';

class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<Router history={history}>
					<div>
						<Header />
						<Route path="/" exact component={StreamList} />
						<Route path="/streams/new" exact component={StreamCreate} />
						<Route path="/streams/edit/:id" exact component={StreamEdit} />
						<Route path="/streams/delete/:id" exact component={StreamDelete} />
						<Route path="/streams/show/:id" exact component={StreamShow} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;

// gol: 190210009413
