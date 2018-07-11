<template>
	<div id="app">

		<div>啦啦啦{{list}}</div>
		<router-link to="/left">左边</router-link>
		<router-link to='/right'>右边</router-link>
		
		<router-view></router-view>
		
	</div>
</template>
<script type="text/javascript">
	export default {
		name: "app",
		data: {

		},
		

	}
</script>