import React from 'react';

import PostList from './posts/PostList';
import PostCreate from './posts/PostCreate';

const App = () => {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">Redux-form Example</h1>
				<div>
					<PostCreate />
				</div>
				<div>
					<PostList />
				</div>
			</div>
		</div>
	);
};

export default App;
