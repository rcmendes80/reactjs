import React from 'react';
import { reduxForm, Field } from 'redux-form';

class ProductForm extends React.Component {
	componentDidMount() {
		console.log('mounting');
		this.props.initialize(this.props.initialValues);
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
					<button className="ui tag label" onClick={(e) => this.onAddTag(input.value, e)}>
						Add Tag
					</button>
				</div>
			</div>
		);
	};

	onAddTag = (tag, e) => {
		this.props.onAddTag(tag);
		// this.props.dispatch(this.props.change('newTag', ''));
		this.props.reset();
		e.preventDefault();
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
		console.log(this.props);
		return (
			<div>
				<form className="ui form error" onSubmit={this.props.handleSubmit} onKeyPress={this.onKeyPress}>
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
						<button className="ui button primary" disabled={this.props.pristine || this.props.submitting}>
							Submit
						</button>
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

export default reduxForm({ form: 'ProductForm', validate, enableReinitialize: true })(ProductForm);
