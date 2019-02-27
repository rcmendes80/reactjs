import React from 'react';
import { connect } from 'react-redux';

import { updateProduct, fetchProduct } from '../../actions';

import ProductForm from './ProductForm';

class ProductEdit extends React.Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchProduct(id);
	}

	onSubmit = (formValues) => {
		this.props.updateProduct(formValues);
	};

	onAddTag = (tag) => {
		const { id } = this.props.match.params;
		// this.props.addProductTag({ productId: id, tag });
	};

	render() {
		if (!this.props.initialValues) {
			return <div>Loading...</div>;
		}
		// console.log(this.props);
		return (
			<div>
				<h3>Product Edit</h3>
				<ProductForm
					onAddTag={this.onAddTag}
					onSubmit={this.onSubmit}
					initialValues={this.props.initialValues}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	initialValues: state.products[ownProps.match.params.id]
});

export default connect(mapStateToProps, { updateProduct, fetchProduct })(ProductEdit);
