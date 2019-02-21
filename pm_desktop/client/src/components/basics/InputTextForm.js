import React, { useState } from 'react';

const renderError = (errors) => {
	return errors.length > 0 ? <div className="ui pointing red basic label">{errors}</div> : '';
};

const InputTextForm = ({
	name,
	setValueHandler,
	placeholder = '',
	label,
	required = false,
	value = '',
	validate = null
}) => {
	const [ errors, setErrors ] = useState([]);
	// const [ touched, setTouched ] = useState(false);

	const fieldClassName = `field ${required ? 'required' : ''} ${errors.length > 0 ? 'error' : ''}`;

	const onBlur = () => {
		// if (touched && validate) {
		if (validate) {
			setErrors(validate());
		}
	};

	const onFocus = () => {
		// setTouched(true);
	};

	return (
		<div className={fieldClassName}>
			<label>{label}</label>
			<input
				name={name}
				placeholder={placeholder}
				value={value}
				onBlur={onBlur}
				onChange={(e) => setValueHandler(e.target.value)}
				onFocus={onFocus}
			/>
			{renderError(errors)}
		</div>
	);
};

export default InputTextForm;
