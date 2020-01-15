import React from 'react';

import {
	View,
	Button,
	TextInput,
	Text,
	TouchableHighlight
} from 'react-native';

export default class ShoppingForm extends React.Component {
	constructor(props) {
		super(props);	
		this.state = {
			type:"",
			price:"",
			count:""
		}
	}
	
	
	styles = {
		hilightStyle: {
			width:50,
			height:30,
			alignSelf:"center"
		},
		buttonStyle: {
			backgroundColor:"blue",
			width:50,
			height:30,
			alignSelf:"center"
		}
	}
	
	addToList = (event) => {
		let item = {
			id:0,
			type:this.state.type,
			price:this.state.price,
			count:this.state.count
		}
		this.props.addToList(item);
		this.setState({
			type:"",
			price:"",
			count:""
		})
	}
	
	render() {
		return (
			<View>
				<View>
					<Text>Type:</Text>
					<TextInput onChangeText={
						(text) => {
							this.setState({
								type:text
									})
								}	
							}
								value={this.state.type}
								placeholder="Item type"/>
				</View>
				<View>
					<Text>Count:</Text>
					<TextInput onChangeText={
						(text) => {
							this.setState({
								count:text
									})
								}	
							}
								value={this.state.count}
								placeholder="Item count"
								keyboardType="numeric"/>
				</View>
				<View>
					<Text>Price:</Text>
					<TextInput onChangeText={
						(text) => {
							this.setState({
								price:text
									})
								}	
							}
								value={this.state.price}
								placeholder="Item price"
								keyboardType="numeric"/>
				</View>
				<TouchableHighlight style={this.styles.hilightStyle} onPress={this.addToList}>
					<View style={this.styles.buttonStyle}>
						<Text>Add</Text>
					</View>
				</TouchableHighlight>
			</View>
		)
	}
	
}