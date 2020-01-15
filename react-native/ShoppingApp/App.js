/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import ShoppingForm from './components/ShoppingForm'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

export default class App extends React.Component {
	
	
	render() {
		return (
			<View>
				<ShoppingForm/>
			</View>
		)
	}
}
