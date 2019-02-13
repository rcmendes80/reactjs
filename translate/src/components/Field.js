import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
	static contextType = LanguageContext; //property name must be contextType to work!!!
	render() {
		const text = this.context === 'english' ? 'Name' : 'Naam'; // this.context contains the context value.

		return (
			<div className="ui field">
				<label>{text}</label>
				<input />
			</div>
		);
	}
}

export default Field;
