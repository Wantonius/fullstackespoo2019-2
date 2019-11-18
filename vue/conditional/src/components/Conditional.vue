<template>
<div>
	<div v-if="isLogged" class="logged">
		<button v-on:click="logout()">Logout</button>
	</div>
	<div v-else class="notlogged">
		<button v-on:click="login()">Login</button>
	</div>
	<p v-show="isLogged">
		You have logged in!
	</p>
</div>
</template>

<script>
export default {
	name:"Conditional",
	data: function() {
		return {
			isLogged:false
		}
	},
	methods: {
		login:function() {
			this.isLogged = true
		},
		logout:function() {
			this.isLogged = false
		}
	}
}
</script>