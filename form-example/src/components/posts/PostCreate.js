import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
// import { createPost } from '../../actions';

const PostCreate = (props) => {
	const renderInput = ({ input, meta, label, placeholder }) => {
		return (
			<div className="form-group">
				<label>{label}</label>
				<input {...input} placeholder={placeholder} className="form-control" />
			</div>
		);
	};

	const renderTags = (tags) => {
		return tags.map((tag, idx) => {
			return (
				<span key={idx} className="badge badge-secondary">
					{tag}
				</span>
			);
		});
	};

	const newTagInput = ({ input, label, placeholder }) => {
		return (
			<div className="form-group">
				<label>{label}</label>
				<input {...input} placeholder={placeholder} className="form-control" />
				<button
					className="btn btn-success"
					onClick={(e) => {
						addTag(e, input.value);
					}}
				>
					Add
				</button>
			</div>
		);
	};

	const addTag = (e, tag) => {
		console.log('#: addTag -> e', e);
		console.log('#: addTag -> tag', tag);
		console.log('#: addTag -> props', props);
		props.dispatch(props.change('tags', tag));
		e.preventDefault();
	};

	const onSubmit = (formValues) => {
		console.log('#: onSubmit -> formValues', formValues);
	};

	return (
		<div className="card">
			<div className="card-body">
				<div className="card-title">
					<h4>Create Your Post</h4>
				</div>
				<div>
					<form>
						<Field name="title" component={renderInput} placeholder="Enter a title" label="Title" />
						<Field
							name="description"
							component={renderInput}
							placeholder="Enter a Description"
							label="Description"
						/>
						<Field name="newTag" component={newTagInput} placeholder="Enter a new Tag" label="New Tag" />
						<Field name="tags" component="input" />
					</form>
					<button className="btn btn-primary" onClick={props.handleSubmit(onSubmit)}>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	const selector = formValueSelector('Post Create');
	console.log('#: mapStateToProps -> selector', selector);
	return {
		currentForm: state.form,
		posts: state.posts,
		tags: selector(state, 'tags')
	};
};

const postForm = reduxForm({ form: 'Post Create' })(PostCreate);
//values: getFormValues('PostCreate')(state)
export default connect(mapStateToProps)(postForm);
