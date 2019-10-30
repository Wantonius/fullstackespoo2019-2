import React from 'react';
import {Link} from 'react-router-dom';
import {List,Header} from 'semantic-ui-react';

export default class NavBar extends React.Component {

	render() {
		let style = {
			height:100,
			backgroundColor:"lightblue"
		}
		return(
			<div style={style}>
				<Header>Shopping App</Header>
				<List>
					<List.Item><Link to="/list">Shopping List</Link></List.Item>
					<List.Item><Link to="/form">Add new item</Link></List.Item>
				</List>
			</div>
		
		)
	}


}