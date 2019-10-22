import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			id:100,
			list:[]
		}
	}
	
	addContact = (contact) => {
		contact.id = this.state.id;
		let tempList = this.state.list.concat(contact);
		let tempId = this.state.id+1;
		this.setState({
			id:tempId,
			list:tempList
		},() => {
			console.log(this.state)
		})
	}
	
	render() {
		return(
			<div className="App">
				<ContactForm addContact={this.addContact}/>
				<hr/>
				<ContactList list={this.state.list}/>
			</div>
		)
	}
}



export default App;
