import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectMenu } from '../actions';

import MessageBox from '../components/basics/MessageBox';

class Header extends React.Component {
	render() {
		return (
			<div>
				<div className="ui secondary pointing menu">
					<Link
						to="/"
						className={`item ${this.props.selectedMenu === 'home' ? 'active' : ''}`}
						onClick={() => this.props.selectMenu('home')}
					>
						Project Manager Desktop
					</Link>
					<div className="right menu">
						<Link
							to="/todos"
							className={`item ${this.props.selectedMenu === 'todos' ? 'active' : ''}`}
							onClick={() => this.props.selectMenu('todos')}
						>
							TODOS
						</Link>
						<Link
							to="/users"
							className={`item ${this.props.selectedMenu === 'users' ? 'active' : ''}`}
							onClick={() => this.props.selectMenu('users')}
						>
							Users
						</Link>
						<Link
							to="/products"
							className={`item ${this.props.selectedMenu === 'products' ? 'active' : ''}`}
							onClick={() => this.props.selectMenu('products')}
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
				<MessageBox {...this.props.globalMessage} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	selectedMenu: state.header.menu,
	globalMessage: state.header.globalMessage
});

export default connect(mapStateToProps, { selectMenu })(Header);
