import Vue from 'vue';
import VueRouter from 'vue-router';
import VueSkeletonLoading from '../src';
import App from './app.vue';

vue.use(VueSkeletonLoading);
Vue.use(VueRouter);


const routes = [
	{
		name: 'index',
		path: '/index',
		component: Index
	}
];
const router = new VueRouter({
	routes
});

new Vue({
	el: '#app',
	router,
	components: {
		App,
		router
	}
});