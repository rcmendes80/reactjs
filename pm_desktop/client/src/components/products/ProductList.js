import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchProducts } from '../../actions';

class ProductList extends React.Component {
	componentDidMount() {
		this.props.fetchProducts();
	}

	renderList() {
		return this.props.products.map((product) => {
			return (
				<Link to={`/products/${product.id}`} className="item" key={product.id}>
					<div className="content">
						<div className="header">{product.name}</div>
						<div className="description">{product.description}</div>
					</div>
				</Link>
			);
		});
	}

	render() {
		return <div className="ui relaxed divided list">{this.renderList()}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		products: Object.values(state.products)
	};
};

export default connect(mapStateToProps, { fetchProducts })(ProductList);
