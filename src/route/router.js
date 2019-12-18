import Vue from 'vue';
import Router from 'vue-router';
import Movie from '../views/movie/index.vue';
import Coming from '../views/coming/index.vue';
import Cinema from '../views/cinema/index.vue';
import My from '../views/my/index.vue';
import MovieDetail from '../views/movie/detail.vue';
import OrderList from '../views/my/orderList.vue';
import Suggest from '../views/my/suggest.vue';
import OrderOffer from '../views/my/orderOffer.vue';
import Search from '../views/movie/search.vue';
import Location from '../views/movie/location.vue';

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
			path: '/movieDetail',
			name: 'MovieDetail',
			component: MovieDetail
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
		},
		{
			path: '/orderOffer',
			name: 'OrderOffer',
			component: OrderOffer
		},
		{
			path: '/search',
			name: 'Search',
			component: Search
		},
		{
			path: '/location',
			name: 'Location',
			component: Location
		}
	]
});
