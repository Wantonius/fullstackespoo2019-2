
<template>
	<div>
		<ShoppingForm @add-to-list="addToList(...arguments)"/>
		<hr/>
		<ShoppingList v-bind:list="list" @remove-from-list="remove(...arguments)"/>
	</div>
</template>
<script>
import ShoppingForm from './ShoppingForm';
import ShoppingList from './ShoppingList';

export default {
	name:"ShoppingContainer",
	data() {
		return {
			list:[],
			id:0
		}
	},
	components: {
		ShoppingForm,
		ShoppingList
	},
	methods: {
		addToList:function(data) {
			data.id = this.id;
			this.id++;
			this.list.push(data);
		},
		remove:function(id) {
			for(let i=0;i<this.list.length;i++) {
				if(id == this.list[i].id) {
					this.list.splice(i,1);
				}
			}
			
		}
	}

}
</script>