//import Vue from 'vue'
//import Router from 'vue-router'
//import left from './components/left.vue'
//import right from './components/right.vue'
//
//Vue.use(Router)
//export default new Router ({
//	routes: [{
//		path: "/left",
//		component: left
//	}, {
//		path: "/right",
//		component: right
//	}, {
//		path: "/",
//		redirect: "/left"
//	}]
//})
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import left from './components/left.vue'
import right from './components/right.vue'

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/left',
            component: left
        },{
        	path: '/right',
            component: right
        },{
        	path:'/',
        	redirect:'/left'
        }
    ]
})