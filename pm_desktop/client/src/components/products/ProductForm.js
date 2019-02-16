import React from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';

class ProductForm extends React.Component {
	state = {
		editTag: '',
		tags: []
	};
	onRemoveTag = (tagToBeRemoved) => {
		console.log(tagToBeRemoved);
		const { tags } = this.props.initialValues;
		const newTagList = tags.filter((item) => {
			return item !== tagToBeRemoved;
		});

		this.props.initialValues = { ...this.props.initialValues, tags: newTagList };
		console.log(this.props.initialValues);
	};
	/*
	onAddTag = () => {
		// this.props.onAddTag(this.state.editTag);
		const newTagList = _.uniq([ ...this.state.tags, this.state.editTag ]);
		this.setState({ ...this.state, editTag: null, tags: newTagList });
		// this.props.dispatch(this.props.change('tags', newTagList));
		this.props.change('tags', newTagList);
		this.props.change('newTag', '');
		console.log(this.props.initialValues);
	};*/

	onAddTag = () => {
		const newTagList = _.uniq([ ...this.state.tags, this.state.editTag ]);
		this.setState({ ...this.state, editTag: null, tags: newTagList });
		this.props.onAddTag(this.state.editTag);
	};

	onChangeTag = (event) => {
		this.setState({ editTag: event.target.value });
	};

	renderTags = (tags) => {
		if (tags) {
			console.log(tags);
			return tags.map((tag) => {
				return (
					<div className="ui right left icon input" key={tag.title}>
						<button className="ui tag label teal">
							{tag.title}
							<i className="icon close " onClick={() => this.onRemoveTag(tag)} />
						</button>
					</div>
				);
			});
		}
	};

	renderTagInput = ({ input, label, meta, placeholder }) => {
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

	renderInputTags({ input }) {
		console.log('tag input', input);
		return <input {...input} type="text" />;
	}

	render() {
		console.log(this.props);
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
					<Field
						name="newTag"
						component={this.renderTagInput}
						label="Tag"
						placeholder="Enter new tag"
						onChange={(e) => this.onChangeTag(e)}
					/>
					<Field name="tags" component={this.renderInputTags} />

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

export default reduxForm({ form: 'ProductForm', validate })(ProductForm);
