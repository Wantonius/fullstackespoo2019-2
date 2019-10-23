import React from 'react';
import {Switch,Route} from 'react-router-dom';
import ShoppingForm from './components/ShoppingForm';
import NavBar from './components/NavBar';
import ShoppingList from './components/ShoppingList';
import './App.css';

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state= {
			list:[]
		}
	}
	
	componentDidMount() {
		this.getList();
	}
	
	getList = () => {
		let request = {
			method:"GET",
			mode:"cors",
			headers:{"Content-type":"application/json"}
		}
		fetch("/api/shopping",request).then((response) => {
			if(response.ok) {
				response.json().then((data) => {
						this.setState({
							list:data
						})
				}).catch((error) => {
					console.log("Failed to handle JSON:"+error);
				});
			} else {
				console.log("Server responded with status:"+response.status);
			}
		}).catch((error) => {
			console.log("Server responded with an error:"+error);
		});
	}
	
	addToList = (item) => {
		let request = { 
			method:"POST",
			mode:"cors",
			headers:{"Content-type":"application/json"},
			body:JSON.stringify(item)
		}
		fetch("/api/shopping",request).then((response) => {
			if(response.ok) {
				this.getList();
			} else {
				console.log("Server responded with status:"+response.status)
			}		
		}).catch((error) => {
			console.log("Server responded with error:"+error);
		});
	}
	
	removeFromList = (id) => {
		let request = { 
			method:"DELETE",
			mode:"cors",
			headers:{"Content-type":"application/json"}
		}
		fetch("/api/shopping/"+id,request).then((response) => {
			if(response.ok) {
				this.getList();
			} else {
				console.log("Server responded with status:"+response.status)
			}		
		}).catch((error) => {
			console.log("Server responded with error:"+error);
		});
	}
	
	editItem = (item) => {
		let request = { 
			method:"PUT",
			mode:"cors",
			headers:{"Content-type":"application/json"},
			body:JSON.stringify(item)
		}
		fetch("/api/shopping/"+item.id,request).then((response) => {
			if(response.ok) {
				this.getList();
			} else {
				console.log("Server responded with status:"+response.status)
			}		
		}).catch((error) => {
			console.log("Server responded with error:"+error);
		});
	}
	
	render() {
		return (
			<div className="App">
				<NavBar/>
				<hr/>
				<Switch>
					<Route exact path="/" render={
					() => <ShoppingList list={this.state.list}
						removeFromList={this.removeFromList}
						editItem={this.editItem}/>
					}/>
					<Route path="/form" render={
					() => <ShoppingForm addToList={this.addToList}/>	
					}/>
				</Switch>
			</div>
		)
	}
}

export default App;
