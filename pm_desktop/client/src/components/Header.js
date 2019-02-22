import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import MessageBox from '../components/basics/MessageBox';

class Header extends React.Component {
	render() {
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
				<MessageBox message={this.props.globalMessage} type="error" />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	selectedMenu: state.header.selectedMenu,
	globalMessage: state.header.globalMessage
});

export default connect(mapStateToProps)(Header);
