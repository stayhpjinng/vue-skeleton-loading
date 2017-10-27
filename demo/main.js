import Vue from 'vue';
import VueRouter from 'vue-router';
import VueSkeletonLoading from '../src';
import App from './app.vue';
import Index from './components'

Vue.use(VueSkeletonLoading);
Vue.use(VueRouter);


const routes = [
	{
		name: 'index',
		path: '/',
		component: Index
	}
];
const router = new VueRouter({
	routes
});

new Vue({
	el: '#app',
	router,
	template: '<App />',
	components: {
		App
	}
});