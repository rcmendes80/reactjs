import React from 'react';
import { connect } from 'react-redux';
import { createProduct } from '../../actions';

import ProductForm from './ProductForm';

class ProductCreate extends React.Component {
	onAddTagClick = () => {};

	onSubmit = (formValues) => {
		this.props.createProduct(formValues);
	};

	render() {
		return (
			<div>
				<h3>Create a Product</h3>
				<ProductForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(null, { createProduct })(ProductCreate);
