import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	const [ selectedMenu, setSelectedMenu ] = useState('home');
	return (
		<div>
			<div className="ui secondary pointing menu">
				<Link
					to="/"
					className={`item ${selectedMenu === 'home' ? 'active' : ''}`}
					onClick={()=> setSelectedMenu('home')}
				>
					Project Manager Desktop
				</Link>
				<div className="right menu">
					<Link
						to="/users"
						className={`item ${selectedMenu === 'users' ? 'active' : ''}`}
						onClick={()=> setSelectedMenu('users')}
					>
						Users
					</Link>
					<div className="item">
						<div className="ui transparent icon input">
							<input type="text" placeholder="Search..." />
							<i className="search link icon" />
						</div>
					</div>
				</div>
			</div>
			<div className="ui segment">
				<p>{selectedMenu}</p>
			</div>
		</div>
	);
};

export default Header;
