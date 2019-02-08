import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';

const WelcomePage = () => <div>Welcome !!!</div>;

class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<BrowserRouter>
					<div>
						<Header />
						<Route path="/" exact component={WelcomePage} />
						<Route path="/streams/new" exact component={StreamCreate} />
						<Route path="/streams/edit" exact component={StreamEdit} />
						<Route path="/streams/delete" exact component={StreamDelete} />
						<Route path="/streams/show" exact component={StreamShow} />
						<Route path="/streams/list" exact component={StreamList} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
