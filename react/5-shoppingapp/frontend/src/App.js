import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import ShoppingForm from './components/ShoppingForm';
import NavBar from './components/NavBar';
import ShoppingList from './components/ShoppingList';
import LoginForm from './components/LoginForm';
import {getList} from './actions/shoppingActions';
import './App.css';

class App extends React.Component {
	
	componentDidMount() {
		if(this.props.token)  {
			this.props.dispatch(getList(this.props.token));
		}
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
					(<ShoppingList />) :
						(<Redirect to="/"/>)
					}/>
					<Route path="/form" render={
					() => this.props.isLogged ? 
					(<ShoppingForm/>):
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
		isLogged:state.login.isLogged,
		token:state.login.token
	}
}

export default connect(mapStateToProps)(App);
