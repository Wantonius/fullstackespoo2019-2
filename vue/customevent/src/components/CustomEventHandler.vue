<template>
	<div>
		<h1>Child components says:{{message}}</h1>
		<CustomEventEmitter @my-custom-event="eventHandler(...arguments)"/>
	</div>
</template>

<script>
import CustomEventEmitter from './CustomEventEmitter';

export default {
	name:"CustomEventHandler",
	data() {
		return {
			message:"No message yet"
		}
	},
	methods: {
		eventHandler:function(data) {
			this.message = data
		}
	},
	components: {
		CustomEventEmitter
	}
}
</script>