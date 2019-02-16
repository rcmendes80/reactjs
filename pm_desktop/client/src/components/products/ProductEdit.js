import React from 'react';
import { reduxForm, Field } from 'redux-form';
//import _ from 'lodash';
import { connect } from 'react-redux';

import { updateProduct, addProductTag, fetchProduct } from '../../actions';

class ProductEdit extends React.Component {
	componentDidMount() {
		const { id } = this.props.match.params;
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

	renderTags = () => {
		const { tags } = this.props.initialValues;
		if (tags) {
			return tags.map((tag, idx) => {
				return (
					<div className="ui right left icon input" key={idx}>
						<button className="ui tag label teal">
							{tag}
							<i className="icon close " onClick={() => this.onRemoveTag(tag)} />
						</button>
					</div>
				);
			});
		}
	};

	renderTagInput = ({ input, placeholder }) => {
		return (
			<div>
				<div className="ui right labeled left icon input">
					<i className="tags icon" />
					<input placeholder={placeholder} {...input} />
					<button className="ui tag label" onClick={() => this.onAddTag(input)}>
						Add Tag
					</button>
				</div>
			</div>
		);
	};

	onSubmit = (formValues) => {
		this.props.updateProduct(formValues);
		this.props.dispatch(this.props.change('newTag', ''));
	};

	onAddTag = ({ value }) => {
		console.log(value);
		const { id } = this.props.match.params;
		this.props.addProductTag({ productId: id, tag: value });
	};

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
					<Field name="newTag" component={this.renderTagInput} label="Tag" placeholder="Enter new tag" />
					<Field name="tags" component={this.renderInputHidden} />
					<div className="ui segment">{this.renderTags()}</div>
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
