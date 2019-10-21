import React from 'react';

export default class StatefulComponent extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			color:"red"
		}
	}
	
	colorChange = (event) => {
		this.setState({
			color:event.target.value
		})
	}
	
	render() {
		let style = {"backgroundColor":this.state.color}
		return (
			<div>
				<p style={style}>The background color changes</p>
				<label htmlFor="colorchange">Write to change color:</label>
				<input type="text"
					   name="colorchange"
					   value={this.state.color}	
					   onChange={this.colorChange}/>
		
			</div>
				
		) 
	}
	
}