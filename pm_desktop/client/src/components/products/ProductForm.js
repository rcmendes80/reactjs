import React from 'react';
import { reduxForm, Field } from 'redux-form';

class ProductForm extends React.Component {
	renderErrorMessage = ({ error, touched }) => {
		if (touched && error) {
			return <div className="ui pointing red basic label">{error}</div>;
		}
	};

	renderInput = ({ input, label, meta, placeholder }) => {
		const className = `field ${meta.touched && meta.error ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} placeholder={placeholder} />
				{this.renderErrorMessage(meta)}
			</div>
		);
	};

	renderTextArea = ({ input, label, meta, placeholder }) => {
		return (
			<div className="field">
				<label>{label}</label>
				<textarea {...input} maxLength="200" placeholder={placeholder} />
			</div>
		);
	};

	renderTagInput = ({ input, label, meta, placeholder }) => {
		return (
			<div className="ui right labeled left icon input">
				<i className="tags icon" />
				<input {...input} placeholder={placeholder} />
				<button className="ui tag label">Add Tag</button>
			</div>
		);
	};

	render() {
		return (
			<div>
				<form className="ui form error" onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
					<Field name="name" component={this.renderInput} label="Name" placeholder="Enter a name" />
					<Field
						name="description"
						component={this.renderTextArea}
						label="Description"
						placeholder="Enter description of the product"
					/>
					<Field name="tags" component={this.renderTagInput} label="Tags" placeholder="Enter tags" />
					<div className="ui ">
						<button className="ui button primary">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

//<a class="ui tag label">New</a>
//<a class="ui red tag label">Upcoming</a>
//<a class="ui teal tag label">Featured</a>

const validate = (formValues) => {
	const errors = {};

	if (!formValues.name || formValues.name.trim() < 1) {
		errors.name = 'You must enter a name';
	}

	return errors;
};

export default reduxForm({ form: 'Product Form', validate })(ProductForm);
