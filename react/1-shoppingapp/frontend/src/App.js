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
			id:100,
			list:[]
		}
	}
	
	addToList = (item) => {
		item.id = this.state.id;
		let tempList = this.state.list.concat(item);
		let tempId = this.state.id+1;
		this.setState({
			id:tempId,
			list:tempList
		})
	}
	
	removeFromList = (id) => {
		let tempId = parseInt(id,10);
		let tempList = [];
		for(let i=0;i<this.state.list.length;i++) {
			if(this.state.list[i].id !== tempId) {
				tempList.push(this.state.list[i]);
			}
		}
		this.setState({
			list:tempList
		})
	}
	
	editItem = (item) => {
		console.log(item);
		let tempList = [];
		for(let i=0;i<this.state.list.length;i++) {
			if(this.state.list[i].id !== item.id) {
				tempList.push(this.state.list[i]);
			} else {
				tempList.push(item);
			}			
		}
		this.setState({
			list:tempList
		})		
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
