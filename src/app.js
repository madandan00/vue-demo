//import left from './js/components/left.vue'
//import right from './js/components/right.vue'
//import app from './app.vue'
//import Vue from 'vue'
//import Router from 'vue-router'
//
//
//new Vue({
//	el: "#app",
//	router,
//	components:{app},
//	template: '<app/>',
//	render: h => h(app)
//})
//var router=new Router({
////	routes:[{
////		path:'/',
////		component:app
////	}]
//routes: [{
//		path: '/left',
//		component: left
//	},{
//		path:'/right',
//		component:right
//	},{
//		path: '/',
//		redirect: 'left'
//	}]
//})
import Vue from 'vue'
import router from './js/router.js'
import http from 'vue-resource'
import app from './app.vue'
import './app.scss'
import store from './js/vuex.js'
Vue.use(http)
new Vue({
	el: "#app",
	router,
	store,
	data: {
		list: []
	},
	
	
	render: h => h(app)
})