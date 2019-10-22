import React from 'react';
import {Form,Button} from 'semantic-ui-react';

export default class ContactForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state= {
			firstname:"",
			lastname:"",
			email:"",
			phone:"",
			id:0
		}
		
	}
	
	change = (event) => {
		let state = {}
		state[event.target.name] = event.target.value;
		this.setState(state);
	}
	
	submit = (event) => {
		event.preventDefault();
		let contact = {
			id:0,
			firstname:this.state.firstname,
			lastname:this.state.lastname,
			email:this.state.email,
			phone:this.state.phone
		}
		this.props.addContact(contact);
	}
	
	render() {
		return (
			<Form onSubmit={this.submit}>
				<Form.Field>
					<label htmlFor="firstname">First Name</label>
					<input type="text"
						   name="firstname"
						   value={this.state.firstname}
						   onChange={this.change}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="lastname">Last Name</label>
					<input type="text"
						   name="lastname"
						   value={this.state.lastname}
						   onChange={this.change}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="email">Email</label>
					<input type="email"
						   name="email"
						   value={this.state.email}
						   onChange={this.change}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="phone">Phone</label>
					<input type="text"
						   name="phone"
						   value={this.state.phone}
						   onChange={this.change}/>
				</Form.Field>
				<Button type="submit">Add Contact</Button>
			</Form>
		)	
	}

}