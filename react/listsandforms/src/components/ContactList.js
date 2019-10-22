import React from 'react';
import {Table} from 'semantic-ui-react';

export default class ContactList extends React.Component {

	render() {
		let items = this.props.list.map(item => 
			<Table.Row key={item.id}>
				<Table.Cell>{item.firstname}</Table.Cell>
				<Table.Cell>{item.lastname}</Table.Cell>
				<Table.Cell>{item.email}</Table.Cell>
				<Table.Cell>{item.phone}</Table.Cell>
			</Table.Row>
		)
		return(
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>First Name</Table.HeaderCell>
						<Table.HeaderCell>Last Name</Table.HeaderCell>
						<Table.HeaderCell>Email</Table.HeaderCell>
						<Table.HeaderCell>Phone</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{items}
				</Table.Body>
			</Table>
		
		)
		
	}
}