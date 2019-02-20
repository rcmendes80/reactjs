import React, { useState } from 'react';

const renderError = (errors) => {
	return errors.length > 0 ? <div className="ui pointing red basic label">{errors}</div> : '';
};

const InputTextForm = ({ name, onChange, placeholder = '', label, required = false, value = '', validate = null }) => {
	const [ errors, setErrors ] = useState([]);
	const fieldClassName = `field ${required ? 'required' : ''} ${errors.length > 0 ? 'error' : ''}`;

	const onBlur = () => {
		if (validate) {
			setErrors(validate());
		}
	};

	return (
		<div className={fieldClassName}>
			<label>{label}</label>
			<input
				type="text"
				name={name}
				placeholder={placeholder}
				value={value}
				onBlur={onBlur}
				onChange={(e) => onChange(name, e.target.value)}
				onFocus={() => setErrors([])}
			/>
			{renderError(errors)}
		</div>
	);
};

export default InputTextForm;
