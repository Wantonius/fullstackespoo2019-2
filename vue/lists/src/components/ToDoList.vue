<template>
	<div>
		<label for="todoinput">Enter ToDo:</label>
		<input name="todoinput"
				type="text"	
				v-model="currentToDo"
				v-on:keyup.enter="addToDo()"/>

		<hr/>
		<ul v-if="todolist.length">
			<li v-for="(todo,index) in todolist" :key="todo.id">
				{{todo.todo}}
				<button v-on:click="remove(index)">Do!</button>
			</li>
		</ul>
		<p v-else>Nothing to do</p>
	</div>
</template>

<script>
export default {
	name:"ToDoList",
	data() {
		return {
			todolist: [
				{todo:"Do laundry",id:0},
				{todo:"Code Vue",id:1}
			],
			currentToDo:"",
			currentId:2
		}
	},
	methods: {
		addToDo:function() {
			this.todolist.push({
				todo:this.currentToDo,
				id:this.currentId
			})
			this.currentId++;
			this.currentToDo="";
		},
		remove:function(index) {
			this.todolist.splice(index,1);
		}
	}
	
}

</script>