import React from 'react'
import {Form,Button} from 'semantic-ui-react';
import {connect} from 'react-redux';

class ShoppingForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			type:"",
			count:0,
			price:0
		}
	}
	
	change = (event) => {
		let state = {};
		state[event.target.name] = event.target.value;
		this.setState(state);
	}
	
	submit = (event) => {
		event.preventDefault();
		let item = {
			id:0,
			type:this.state.type,
			price:this.state.price,
			count:this.state.count
		}
		console.log("ShoppingForm: ADD_TO_LIST")
		this.props.dispatch({
			type:"ADD_TO_LIST",
			item:item
		})
		this.setState({
			type:"",
			price:0,
			count:0
		})
	}
	render() {
		return (
			<Form onSubmit={this.submit}>
				<Form.Field>
					<label htmlFor="type">Type:</label>
					<input type="text"
						   name="type"
						   value={this.state.type}
						   onChange={this.change}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="count">Count:</label>
					<input type="number"
						   name="count"
						   value={this.state.count}
						   onChange={this.change}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="price">Price:</label>
					<input type="number"
						   name="price"
						   value={this.state.price}
						   onChange={this.change}/>
				</Form.Field>
				<Button type="submit">Add</Button>
			</Form>
		)
	}
}


export default connect()(ShoppingForm);