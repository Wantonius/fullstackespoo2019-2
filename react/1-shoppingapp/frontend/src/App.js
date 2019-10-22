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
	
	render() {
		return (
			<div className="App">
				<NavBar/>
				<hr/>
				<Switch>
					<Route exact path="/" render={
					() => <ShoppingList list={this.state.list}/>
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
