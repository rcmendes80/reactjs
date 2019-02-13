import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
	static contextType = LanguageContext; //property name must be contextType to work!!!

	render() {
		const text = this.context === 'english' ? 'Submit' : 'Voorleggen'; // this.context contains the context value.
		return <button className="ui button primary">{text}</button>;
	}
}

export default Button;
