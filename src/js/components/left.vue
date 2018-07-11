<template>
	<div>

		<div class="left">我是左边</div>

		<ul>
			<li v-for="mm in list">{{mm.firstName}}</li>
		</ul>
	</div>

</template>
<script>
	export default {
		name: "left",

		data: {
			
		},
		computed: {
			list() {
				return this.$store.state.list
			}
		},
		created() {
			this.$http.get('mock/list.json').then((res) => {
					console.log(res.data.data)
					this.$store.state.list = res.data.data

				},
				(res) => {
					console.log(res)
				})
		}

	}
</script>
<!--<script type="text/javascript" src="../left.js">
	
</script>-->