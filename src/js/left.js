import Vue from 'vue'
import 'vue-resource'
new vue({
	el: '.left',
	data: {

	},
	computed: {
		list() {
			return this.$store.state.dramaList
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
})