<template>
	<div>
		<div class="form form-group">
		<label for="typeinput">Item type:</label>
		<input type="text"
				name="typeinput"
				v-model="item.type"/>
		</div>
		<div class="form form-group">
		<label for="priceinput">Price:</label>
		<input type="number"
				name="priceinput"
				v-model="item.price"
				minimum="0"
				step="0.01"/>
		</div>
		<div class="form form-group">
		<label for="countinput">Count:</label>
		<input type="number"
				name="countinput"
				v-model="item.count"
				minimum="0"/>
		</div>
		<button class="btn btn-primary" v-on:click="addToList()">Add</button>
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
		addToList:function() {
			this.$emit("add-to-list",this.item);
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