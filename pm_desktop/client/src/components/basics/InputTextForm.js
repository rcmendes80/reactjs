import React, { useState } from 'react';
import PropTypes from 'prop-types';

const renderError = (errors) => {
	return errors.length > 0 ? <div className="ui pointing red basic label">{errors}</div> : '';
};

const InputTextForm = ({ name, onChange, placeholder = '', label, required = false, value = '', validate = null }) => {
	const [ errors, setErrors ] = useState([]);

	const fieldClassName = `field ${required ? 'required' : ''} ${errors.length > 0 ? 'error' : ''}`;

	const onBlur = (e) => {
		if (validate) {
			setErrors(validate(e.target.value));
		}
	};

	return (
		<div className={fieldClassName}>
			<label>{label}</label>
			<input
				name={name}
				placeholder={placeholder}
				value={value}
				onBlur={onBlur}
				onChange={(e) => onChange(name, e.target.value)}
			/>
			{renderError(errors)}
		</div>
	);
};

InputTextForm.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired
};

export default InputTextForm;
