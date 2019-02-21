import React from 'react';

const InputCheckboxForm = ({ name, setValueHandler, label, required = false, value = false }) => {
	const fieldClassName = `inline field ${required ? 'required' : ''}`;
	return (
		<div className={fieldClassName}>
			<div className="ui toggle checkbox">
				<input type="checkbox" className="hidden" tabIndex="0" name={name} checked={value} readOnly />
				<label onClick={() => setValueHandler(!value)}>{label}</label>
			</div>
		</div>
	);
};

export default InputCheckboxForm;
