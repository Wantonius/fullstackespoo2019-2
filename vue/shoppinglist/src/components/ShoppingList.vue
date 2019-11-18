<template>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Item Type</th>
				<th>Count</th>
				<th>Price</th>
				<th>Remove</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in list" :key="item.id">
				<td>{{item.type}}</td>
				<td>{{item.count}}</td>
				<td>{{item.price}}</td>
				<td><button class="btn btn-secondary" 
				v-on:click="remove(item.id)">Remove</button></td>
			</tr>
		</tbody>
	</table>
</template>
<script>
export default {
	name:"ShoppingList",
	props:['list'],
	methods: {
		remove:function(id){
			this.$emit("remove-from-list",id);
		}
	}
}
</script>
