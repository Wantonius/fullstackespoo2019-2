/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import ShoppingForm from './components/ShoppingForm'
import ShoppingList from './components/ShoppingList'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

export default class App extends React.Component {
	
	constructor(props) {
		super(props);	
		this.state = {
			list:[],
			id:100
		}
	}
	
	addToList = (item) => {
		item.id = this.state.id;
		let templist = this.state.list.concat(item);
		this.setState({
			list:templist,
			id:item.id+1
		})
	}
	
	removeFromList = (id) => {
		let templist = [];
		for(let i=0;i<this.state.list.length;i++) {
			if(id !== this.state.list[i].id) {
				templist.push(this.state.list[i])
			}
		}
		this.setState({
			list:templist
		})
	}
	
	render() {
		return (
			<View>
				<ShoppingForm addToList={this.addToList}/>
				<ShoppingList list={this.state.list}
							removeFromList={this.removeFromList}/>
			</View>
		)
	}
}
