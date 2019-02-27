import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

class ProductForm extends React.Component {
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

	renderTextAreaInput = ({ input, label, placeholder }) => {
		return (
			<div className="field">
				<label>{label}</label>
				<textarea {...input} maxLength="200" placeholder={placeholder} />
			</div>
		);
	};

	renderInputHidden({ input }) {
		return <input {...input} type="text" />;
	}

	renderTags = () => {
		if (this.props.currentForm) {
			const { tags } = this.props.currentForm.values;
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
		}
	};

	renderTagInput = ({ input, placeholder }) => {
		return (
			<div>
				<div className="ui right labeled left icon input">
					<i className="tags icon" />
					<input placeholder={placeholder} {...input} />
					<button className="ui tag label" onClick={(e) => this.onAddTag(input.value)}>
						Add Tag
					</button>
				</div>
			</div>
		);
	};

	onAddTag = (tag) => {
		console.log('#: onAddTag -> tag', tag);
		console.log('form values', this.props);

		const newTagList = [ ...this.props.currentForm.values.tags, tag ];
		// this.props.onAddTag(tag);
		// this.props.clea
		this.props.change('newTag', '');
		this.props.change('tags', newTagList);
		// this.props.reset();
		// e.preventDefault();
	};

	onKeyPress = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
		}
	};

	render() {
		if (!this.props.initialValues) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<div className="ui form error">
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
						<button
							className="ui button primary"
							disabled={this.props.pristine || this.props.submitting}
							onClick={() => this.props.handleSubmit(this.props.onSubmit())}
						>
							Submit
						</button>
					</div>
				</div>
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

const mapStateToProps = (state) => ({ currentForm: state.form['Product Form'] });

const productForm = reduxForm({ form: 'Product Form', validate })(ProductForm);
export default connect(mapStateToProps)(productForm);
