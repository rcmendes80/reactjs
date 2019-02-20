import React, { useState } from 'react';

const renderError = (field) => {
	return <div className="ui pointing red basic label">{`The field '${field}' is required.`}</div>;
};

const InputTextForm = ({ name, onChange, placeholder = '', label, required = false, value = '' }) => {
	const [ hasError, setHasError ] = useState(false);

	const checkForErrors = (required, value) => {
		required && value.trim().length < 1 ? setHasError(true) : setHasError(false);
	};

	const fieldClassName = `field ${required ? 'required' : ''} ${hasError ? 'error' : ''}`;

	return (
		<div className={fieldClassName}>
			<label>{label}</label>
			<input
				type="text"
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				onBlur={() => checkForErrors(required, value)}
				onFocus={() => setHasError(false)}
			/>
			{hasError && renderError(label, required)}
		</div>
	);
};

export default InputTextForm;
