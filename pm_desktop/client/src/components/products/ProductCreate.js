import React from 'react';
import { connect } from 'react-redux';
import { createProduct } from '../../actions';
import _ from 'lodash';

import ProductForm from './ProductForm';

class ProductCreate extends React.Component {
	onSubmit = (formValues) => {
		console.log(formValues);
		//this.props.createProduct(formValues);
	};

	onAddTag = (title) => {
		console.log('onAddProductTag', title);
	};

	render() {
		console.log('Rendering ProductCreate');
		return (
			<div>
				<h3>Create a Product</h3>
				<ProductForm
					onSubmit={this.onSubmit}
					onAddTag={this.onAddTag}
					initialValues={{
						name: 'XXXXXX',
						tags: [ 'Tag A', 'Tag B', 'Tag C' ]
					}}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		initialValues: state.productForm
	};
};

export default connect(mapStateToProps, { createProduct })(ProductCreate);
