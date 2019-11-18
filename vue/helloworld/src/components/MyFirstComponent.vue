<template>
	<div>
		<p>Hello, {{firstname}}</p>
		<p>{{computedhello}}</p>
		<p>{{methodhello()}}</p>
	</div>
</template>

<script>
export default {
	name:"MyFirstComponent",
	props: ['firstname'],
	computed: {
		computedhello: function() {
			return "Hello from computed value, "+this.firstname
		}
	},
	methods: {
		methodhello: function() {
			return "Hello from method, "+this.firstname
		}
	}
}
</script>