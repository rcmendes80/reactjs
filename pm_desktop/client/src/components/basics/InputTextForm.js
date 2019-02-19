import React from 'react';

const InputTextForm = ({ name, onChange, placeholder = '', label, required = false, value = '' }) => {
	const fieldClassName = `field ${required ? 'required' : ''}`;

	return (
		<div className={fieldClassName}>
			<label>{label}</label>
			<input type="text" name={name} placeholder={placeholder} onChange={onChange} value={value} />
		</div>
	);
};

export default InputTextForm;
