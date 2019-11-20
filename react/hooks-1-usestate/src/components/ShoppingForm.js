import React, {useState} from 'react';
import {Form,Button} from 'semantic-ui-react';

const ShoppingForm = ({addToList}) => {

	const [form,setValues] = useState({
		type:"",
		price:0,
		count:0
	})

	const onChange = (event) => {
		setValues({
			...form,
			[event.target.name]:event.target.value
		})
	}
	
	const onSubmit = (event) => {
		event.preventDefault();
		addToList(form);
	}
	
	return (
	<div style={{width:600,margin:"auto"}}>
		<Form onSubmit={onSubmit}>
			<Form.Field>
				<label htmlFor="type">Type</label>
				<input type="text"
						name="type"
						onChange={onChange}
						value={form.type}/>
			</Form.Field>
			<Form.Field>
				<label htmlFor="count">Count</label>
				<input type="number"
						name="count"
						min="0"
						onChange={onChange}
						value={form.count}/>
			</Form.Field>
			<Form.Field>
				<label htmlFor="price">Price</label>
				<input type="number"
						name="price"
						min="0"
						step="0.01"
						onChange={onChange}
						value={form.price}/>
			</Form.Field>
			<Button type="submit">Add</Button>
		</Form>
	</div>
	)
}

export default ShoppingForm