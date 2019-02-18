import React from 'react';
import { reduxForm, Field, getFormValues } from 'redux-form';
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
					onClick={(input) => {
						addTag(input);
					}}
				>
					Add
				</button>
			</div>
		);
	};

	const addTag = (tag) => {
		console.log('#: addTag -> tag', tag);
		console.log('#: addTag -> props', props);
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

const mapStateToProps = (state) => ({
	form: state.form,
	posts: state.posts,
	zzzz: getFormValues('PostCreate')(state)
});

const postForm = reduxForm({ form: 'PostCreate' })(PostCreate);
//values: getFormValues('PostCreate')(state)
export default connect(mapStateToProps)(postForm);
