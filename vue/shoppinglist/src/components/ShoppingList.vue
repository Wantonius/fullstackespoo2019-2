<template>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Type</th>
				<th>Price</th>
				<th>Count</th>
				<th>Buy</th>
				<th>Edit</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in list" :key="item.id">
				<template v-if="editId !== item.id">
					<td>{{item.type}}</td>
					<td>{{item.price}}</td>
					<td>{{item.count}}</td>
					<td><button v-on:click="remove(item.id)"
					class="btn btn-primary">Buy</button></td>
					<td><button v-on:click="edit(item.id)"
					class="btn btn-dark">Edit</button></td>
				</template>
				<template v-else>
					<td><input type="text"
					v-model="type"/></td>
					<td><input type="number"
					v-model="price"/></td>
					<td><input type="count"
					v-model="count"/></td>
					<td><button v-on:click="saveItem()"
					class="btn btn-success">Save</button></td>
					<td><button v-on:click="cancel()"
					class="btn btn-danger">Cancel</button></td>
				</template>
			</tr>
		</tbody>		
	</table>
</template>
<script>
export default {
	name:"ShoppingList",
	props:['list'],
	data() {
		return {
			editId:-1,
			type:"",
			price:0,
			count:0
		}
	},
	methods: {
		remove:function(id) {
			this.$emit('remove-from-list',id);
		},
		edit:function(id) {
			this.editId = id;
			for(let i=0;i<this.list.length;i++) {
				if(id === this.list[i].id) {
					this.type = this.list[i].type;
					this.price = this.list[i].price;
					this.count = this.list[i].count;
				}
			}
		},
		cancel:function() {
			this.editId = -1;
		},
		saveItem:function() {
			let tempItem = {
				id:this.editId,
				type:this.type,
				price:this.price,
				count:this.count
			}
			this.$emit("edit-item",tempItem);
			this.editId = -1;
			this.type = "";
			this.count = 0;
			this.price = 0;
		}
	}	
}
</script>
