import React from 'react';
import Decorator from './Decorator'

class SecondButton extends React.Component {
	
	sendMessage = (event) => {
		this.props.sendMessage("You pressed the Second Button");
	}

	render() {
		let buttonStyle={backgroundColor:this.props.color}
		return(
			<button onClick={this.sendMessage}
				style={buttonStyle}>Send message</button>
		)
	}
}

export default Decorator(SecondButton);