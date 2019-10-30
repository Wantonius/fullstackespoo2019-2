import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import ShoppingForm from './components/ShoppingForm';
import NavBar from './components/NavBar';
import ShoppingList from './components/ShoppingList';
import LoginForm from './components/LoginForm';
import './App.css';

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state= {
			list:[],
			token:"",
			isLogged:false
		}
	}
	
	componentDidMount() {
		if(sessionStorage.getItem("state")) {
			let state = JSON.parse(sessionStorage.getItem("state"));
			this.setState(state,() => {
				if(this.state.isLogged) {
					this.getList();
				}
			});
		}

	}
	
	//HELPER FUNCTIONS
	
	saveToStorage = () => {
		sessionStorage.setItem("state",JSON.stringify(this.state));
	}
	
	//LOGIN API	

	register = (user) => {
		let request = {
			method:"POST",
			mode:"cors",
			headers:{"Content-type":"application/json"},
			body:JSON.stringify(user)
		}
		fetch("/register",request).then((response) => {
			if(response.ok) {
				alert("Register success!");
			} else {
				console.log("Server responded with status:"+response.status);
			}
		}).catch((error) => {
			console.log("Server responded with error:"+error);
		})
	}

	login = (user) => {
		let request = {
			method:"POST",
			mode:"cors",
			headers:{"Content-type":"application/json"},
			body:JSON.stringify(user)
		}
		fetch("/login",request).then((response) => {
			if(response.ok) {
				response.json().then(data => {
					this.setState({
						token:data.token,
						isLogged:true
					},() => {
						this.getList();
						this.saveToStorage();
					})
				}).catch((error) => {
					console.log("JSON parse failed with error:"+error);
				})
			} else {
				console.log("Server responded with status:"+response.status);
			}
		}).catch((error) => {
			console.log("Server responded with error:"+error);
		})
	}
	
	logout = () => {
		let request = {
			method:"POST",
			mode:"cors",
			headers:{"Content-type":"application/json",
					 "token":this.state.token}
		}
		fetch("/logout",request).then(response => {
			this.setState({
				list:[],
				token:"",
				isLogged:false
			}, () => {
				this.saveToStorage();
			}) 	
		}).catch(error => {
			console.log("Server responded with error:"+error);
			this.setState({
				list:[],
				token:"",
				isLogged:false
			}, () => {
				this.saveToStorage();
			}) 
		})

	}
	
	//SHOPPING API
	
	getList = () => {
		let request = {
			method:"GET",
			mode:"cors",
			headers:{"Content-type":"application/json",
					 "token":this.state.token}
		}
		fetch("/api/shopping",request).then((response) => {
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
					 "token":this.state.token},
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
					 "token":this.state.token}
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
					 "token":this.state.token},
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
				<NavBar isLogged={this.state.isLogged}
						logout={this.logout}/>
				<hr/>
				<Switch>
					<Route exact path="/" render= {
						() => this.state.isLogged ?
						(<Redirect to="/list"/>) :
						(<LoginForm login={this.login}
								register={this.register}/>)
					}/>
					<Route path="/list" render={
					() => this.state.isLogged ? 
					(<ShoppingList list={this.state.list}
						removeFromList={this.removeFromList}
						editItem={this.editItem}/>) :
						(<Redirect to="/"/>)
					}/>
					<Route path="/form" render={
					() => this.state.isLogged ? 
					(<ShoppingForm addToList={this.addToList}/>):
					(<Redirect to="/"/>)
					}/>
					<Route render={() => <Redirect to="/"/>}/>
				</Switch>
			</div>
		)
	}
}

export default App;
