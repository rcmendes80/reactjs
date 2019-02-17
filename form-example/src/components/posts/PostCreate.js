import React from 'react';
import { reduxForm, Field } from 'redux-form';

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

	const onSubmit = (formValues) => {
		console.log(formValues);
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
							name="Description"
							component={renderInput}
							placeholder="Enter a Description"
							label="Description"
						/>
					</form>
					<button className="btn btn-primary" onClick={props.handleSubmit(onSubmit)}>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default reduxForm({ form: 'PostCreate' })(PostCreate);
