import React, { useState } from 'react';

const renderError = (errors) => {
	return errors.length > 0 ? <div className="ui pointing red basic label">{errors}</div> : '';
};

const InputForm = ({
	name,
	onChange,
	placeholder = '',
	label,
	required = false,
	value = '',
	validate = null,
	type = 'text'
}) => {
	const [ errors, setErrors ] = useState([]);
	const fieldClassName = `field ${required ? 'required' : ''} ${errors.length > 0 ? 'error' : ''}`;

	const onBlur = () => {
		if (validate) {
			setErrors(validate());
		}
	};

	const checkboxClassName = `${type === 'checkbox' ? 'ui checkbox' : ''}`;
	return (
		<div className={checkboxClassName}>
			<div className={fieldClassName}>
				<label>{label}</label>
				<input
					type={type}
					name={name}
					placeholder={placeholder}
					value={value}
					onBlur={onBlur}
					onChange={(e) => onChange(name, e.target.value)}
					onFocus={() => setErrors([])}
				/>
				{renderError(errors)}
			</div>
		</div>
	);
};

export default InputForm;
