<template>
	<div>
		<div class="form form-group">
			<label for="type">Item type:</label>
			<input type="text"
					name="type"
					v-model="item.type"/>
		</div>
		<div class="form form-group">
			<label for="price">Price:</label>
			<input type="number"
					name="price"
					v-model="item.price"
					minimum="0"
					step="0.01"/>
		</div>
		<div class="form form-group">
			<label for="count">Count:</label>
			<input type="number"
					name="count"
					v-model="item.count"
					minimum="0"/>
		</div>
		<button v-on:click="addToList()"
				class="btn btn-primary">Add</button>
	</div>
</template>
<script>
export default {
	name:"ShoppingForm",
	data() {
		return {
			item: {
				id:0,
				type:"",
				price:0,
				count:0
			}
		}
	},
	methods: {
		addToList: function() {
			this.$store.dispatch("addToList",this.item);
			this.item = {
				id:0,
				type:"",
				price:0,
				count:0
			}
		}
	}
}
</script>