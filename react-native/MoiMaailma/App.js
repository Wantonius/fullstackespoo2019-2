/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

export default class App extends React.Component {
	
	state = {
		tempText:"Hello World"
	}
	
	styles = StyleSheet.create({
		textStyle:{
			color:"red",
			fontSize:40
			},
		buttonStyle: {
			flexDirection:"row",
			justifyContent:"center",
			width:50
		}
		});
	
	onButtonPress = (event) => {
		this.setState({
			tempText:"You pressed the button"
		})
	}
	
	render() {
		return (
			<View>
				<Text style={this.styles.textStyle}>{this.state.tempText}</Text>
				<Button 
					style={this.styles.buttonStyle}
					onPress={this.onButtonPress}
					title="Press me!"/>
			</View>
		)
	}
}
