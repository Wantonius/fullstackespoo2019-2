import React from 'react';

export default class HelloWorld extends React.Component {
	
	render() {
		let temp = "World"
		if(this.props.name) {
			temp = this.props.name
		}
		return (
			<p>Hello {temp}</p>
		)
	}

}