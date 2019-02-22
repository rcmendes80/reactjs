import React from 'react';

const InputCheckboxForm = ({ name, onChange, label, required = false, value = false }) => {
	const fieldClassName = `inline field ${required ? 'required' : ''}`;
	return (
		<div className={fieldClassName}>
			<div className="ui toggle checkbox">
				<input type="checkbox" className="hidden" tabIndex="0" name={name} checked={value} readOnly />
				<label onClick={() => onChange(name, !value)}>{label}</label>
			</div>
		</div>
	);
};

export default InputCheckboxForm;
