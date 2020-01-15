import React from 'react';

import {
	View,
	TouchableHighlight,
	StyleSheet,
	Text,
	FlatList
} from 'react-native';

export default class ShoppingList extends React.Component {
	
	render() {
		let styles = StyleSheet.create({
			textStyle:{
				flex:4,
				fontSize:18,
				paddingRight:10,
				color:"blue"
			},
			buttonStyle:{
				flex:1,
				width:80,
				height:50,
				backgroundColor:"red",
				justifyContent:"center",
				alignItems:"center"
			},
			viewStyle:{
				flexDirection:"row",
				height:80,
				backgroundColor:"green"
			}
		})
		return(
			<View>
				<FlatList
					data={this.props.list}
					renderItem={
						({item}) => {
							return (
								<View style={styles.viewStyle}>
									<Text style={styles.textStyle}>
										Type:{item.type} Count:{item.count} Price:{item.price}
									</Text>
									<TouchableHighlight onPress={() => this.props.removeFromList(item.id)}
										style={styles.buttonStyle}>
										<Text>Remove</Text>
									</TouchableHighlight>
								</View>
							)
						}
					}
					keyExtractor={item => ""+item.id}
				/>
			</View>
		)
	}
}