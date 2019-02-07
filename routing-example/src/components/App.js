import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const FirstPage = () => <div>First Page</div>;
const WelcomePage = () => <div>Welcome!!!</div>;
const SecondPage = () => <div>Second Page</div>;
const Header = () => {
	return (
		<div>
			<span style={{ backgroundColor: 'blue' }}>
				<Link to="/">Home</Link>
			</span>
			<span style={{ backgroundColor: 'red' }}>
				<Link to="/first">First Page</Link>
			</span>
			<span style={{ backgroundColor: 'green' }}>
				<Link to="/second">Second Page</Link>
			</span>
		</div>
	);
};

export const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={WelcomePage} />
					<Route path="/first" component={FirstPage} />
					<Route path="/second" component={SecondPage} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
