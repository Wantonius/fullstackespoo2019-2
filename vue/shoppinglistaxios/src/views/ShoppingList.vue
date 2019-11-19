<template>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Item type</th>
				<th>Count</th>
				<th>Price</th>
				<th>Remove</th>
				<th>Edit</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in $store.state.list" :key="item.id">
				<template v-if="editId != item.id">
					<td>{{item.type}}</td>
					<td>{{item.count}}</td>
					<td>{{item.price}}</td>
					<td><button class="btn btn-primary"
						v-on:click="remove(item.id)">Remove</button></td>
					<td><button class="btn btn-dark"
						v-on:click="edit(item.id)">Edit</button></td>
				</template>
				<template v-else>
					<td><input v-model="item.type"/></td>
					<td><input type="number" minimum="0" v-model="item.count"/></td>
					<td><input type="number" minimum="0" step="0.01" v-model="item.price"/></td>
					<td><button class="btn btn-success" v-on:click="saveItem()">Save</button></td>
					<td><button class="btn btn-danger" v-on:click="cancel()">Cancel</button></td>
				</template>
			</tr>
		</tbody>
	</table>
</template>
<script>
export default {
	name:"ShoppingList",
	data() {
		return {
			editId:-1,
			item: {
				id:0,
				type:"",
				price:0,
				count:0
			}
		}
	},
	mounted: function() {
		this.$store.dispatch("getList");
	},
	methods: {
		remove:function(id) {
			this.$store.dispatch("removeFromList",id);
		},
		edit:function(id) {
			for(let i=0;i<this.$store.state.list.length;i++) {
				if(id == this.$store.state.list[i].id) {
					this.editId = id;
					this.item = this.$store.state.list[i];
					return;
				}
			}
		},
		saveItem:function() {
			this.$store.dispatch("editItem",this.item);
			this.cancel();
		},
		cancel:function() {
			this.item = {
				id:0,
				type:"",
				price:0,
				count:0
			}
			this.editId = -1;		
		}
	}
}
</script>