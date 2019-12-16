import Vue from 'vue';
import Router from 'vue-router';
import Movie from '../views/movie/index.vue';
import Coming from '../views/coming/index.vue';
import Cinema from '../views/cinema/index.vue';
import My from '../views/my/index.vue';
import OrderList from '../views/orderList/index.vue';
import Suggest from '../views/suggest/index.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/movie'
		},
		{
			path: '/movie',
			name: 'Movie',
			component: Movie
		},
		{
			path: '/coming',
			name: 'Coming',
			component: Coming
		},
		{
			path: '/cinema',
			name: 'Cinema',
			component: Cinema
		},
		{
			path: '/my',
			name: 'My',
			component: My
		},
		{
			path: '/orderList',
			name: 'OrderList',
			component: OrderList
		},
		{
			path: '/suggest',
			name: 'Suggest',
			component: Suggest
		}
	]
});
