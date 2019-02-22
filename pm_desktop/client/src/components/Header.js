import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MessageBox from '../components/basics/MessageBox';

const Header = () => {
	const [ selectedMenu, setSelectedMenu ] = useState('home');
	return (
		<div>
			<div className="ui secondary pointing menu">
				<Link
					to="/"
					className={`item ${selectedMenu === 'home' ? 'active' : ''}`}
					onClick={() => setSelectedMenu('home')}
				>
					Project Manager Desktop
				</Link>
				<div className="right menu">
					<Link
						to="/todos"
						className={`item ${selectedMenu === 'todos' ? 'active' : ''}`}
						onClick={() => setSelectedMenu('todos')}
					>
						TODOS
					</Link>
					<Link
						to="/users"
						className={`item ${selectedMenu === 'users' ? 'active' : ''}`}
						onClick={() => setSelectedMenu('users')}
					>
						Users
					</Link>
					<Link
						to="/products"
						className={`item ${selectedMenu === 'products' ? 'active' : ''}`}
						onClick={() => setSelectedMenu('products')}
					>
						Products
					</Link>
					<div className="item">
						<div className="ui transparent icon input">
							<input type="text" placeholder="Search..." />
							<i className="search link icon" />
						</div>
					</div>
				</div>
			</div>
			<MessageBox message="Testing 1234" />
			<MessageBox message="Testing 2" type="success" />
			<MessageBox message="Testing 3" type="warning" />
			<MessageBox message="Testing 4" type="error" />
		</div>
	);
};

export default Header;
