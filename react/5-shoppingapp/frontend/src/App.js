import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import ShoppingForm from './components/ShoppingForm';
import NavBar from './components/NavBar';
import ShoppingList from './components/ShoppingList';
import LoginForm from './components/LoginForm';
import './App.css';

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state= {
			list:[]
		}
	}
	
	componentDidMount() {
		if(sessionStorage.getItem("state")) {
			let state = JSON.parse(sessionStorage.getItem("state"));
			this.setState(state,() => {
				if(this.props.isLogged) {
					this.getList();
				}
			});
		}

	}
	
	//HELPER FUNCTIONS
	
	saveToStorage = () => {
		sessionStorage.setItem("state",JSON.stringify(this.state));
	}

	

	//SHOPPING API
	
	getList = (search) => {
		let request = {
			method:"GET",
			mode:"cors",
			headers:{"Content-type":"application/json",
					 "token":this.props.token}
		}
		let url = "/api/shopping";
		if(search) {
			url = url + "?type="+search;
		}
		fetch(url,request).then((response) => {
			if(response.ok) {
				response.json().then((data) => {
						this.setState({
							list:data
						},() => {
							this.saveToStorage();
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
			headers:{"Content-type":"application/json",
					 "token":this.props.token},
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
			headers:{"Content-type":"application/json",
					 "token":this.props.token}
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
			headers:{"Content-type":"application/json",
					 "token":this.props.token},
			body:JSON.stringify(item)
		}
		fetch("/api/shopping/"+item._id,request).then((response) => {
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
					<Route exact path="/" render= {
						() => this.props.isLogged ?
						(<Redirect to="/list"/>) :
						(<LoginForm/>)
					}/>
					<Route path="/list" render={
					() => this.props.isLogged ? 
					(<ShoppingList list={this.state.list}
						removeFromList={this.removeFromList}
						editItem={this.editItem}
						getList={this.getList}/>) :
						(<Redirect to="/"/>)
					}/>
					<Route path="/form" render={
					() => this.props.isLogged ? 
					(<ShoppingForm addToList={this.addToList}/>):
					(<Redirect to="/"/>)
					}/>
					<Route render={() => <Redirect to="/"/>}/>
				</Switch>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged:state.isLogged,
		token:state.token
	}
}

export default withRouter(connect(mapStateToProps)(App));
