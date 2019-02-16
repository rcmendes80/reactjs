import React from 'react';
import { reduxForm, Field } from 'redux-form';
//import _ from 'lodash';
import { connect } from 'react-redux';

import { updateProduct, addProductTag, fetchProduct } from '../../actions';

class ProductEdit extends React.Component {
	onSubmit = (formValues) => {
		this.props.updateProduct(formValues);
	};

	componentDidMount() {
		const { id } = this.props.match.params;
		console.log(id);
		this.props.fetchProduct(id);
	}

	renderErrorMessage = ({ error, touched }) => {
		if (touched && error) {
			return <div className="ui pointing red basic label">{error}</div>;
		}
	};

	renderTextInput = ({ input, label, meta, placeholder }) => {
		const className = `field ${meta.touched && meta.error ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} placeholder={placeholder} />
				{this.renderErrorMessage(meta)}
			</div>
		);
	};

	renderTextAreaInput = ({ input, label, meta, placeholder }) => {
		return (
			<div className="field">
				<label>{label}</label>
				<textarea {...input} maxLength="200" placeholder={placeholder} />
			</div>
		);
	};

	renderInputHidden({ input }) {
		console.log('hidden input', input);
		return <input {...input} type="text" />;
	}

	render() {
		if (!this.props.initialValues) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
					<Field name="name" component={this.renderTextInput} label="Name" placeholder="Enter a name" />
					<Field
						name="description"
						component={this.renderTextAreaInput}
						label="Description"
						placeholder="Enter description of the product"
					/>

					<div className="ui buttons">
						<button className="ui button primary">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

const validate = (formValues) => {
	const errors = {};

	if (!formValues.name || formValues.name.trim() < 1) {
		errors.name = 'You must enter a name';
	}

	return errors;
};

const mapStateToProps = (state, ownProps) => ({
	initialValues: state.products[ownProps.match.params.id]
});

const form = reduxForm({ form: 'ProductEdit', validate })(ProductEdit);
export default connect(mapStateToProps, { updateProduct, addProductTag, fetchProduct })(form);
