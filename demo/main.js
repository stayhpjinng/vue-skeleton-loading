import Vue from 'vue';
import VueRouter from 'vue-router';
import VueSkeletonLoading from 'vue-skeleton-loading';
import App from './app.vue';
import Index from './components';
import Page from './components/page';
import List1 from './components/list1';

Vue.use(VueSkeletonLoading);
Vue.use(VueRouter);


const routes = [
	{
		name: 'index',
		path: '/',
		component: Index
	},
	{
        name: 'page',
        path: '/page',
        component: Page
	},
    {
        name: 'list1',
        path: '/list1',
        component: List1
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