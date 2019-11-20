import React from 'react';
import Decorator from './Decorator';

class FirstButton extends React.Component {

	sendMessage = (event) => {
		this.props.sendMessage("You pressed the First Button");
	}

	render() {
		let buttonStyle={backgroundColor:this.props.color}
		return(
			<button onClick={this.sendMessage}
				style={buttonStyle}>Send message</button>
		)
	}
}

export default Decorator(FirstButton);