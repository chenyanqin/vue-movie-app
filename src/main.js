import 'babel-polyfill';
import 'normalize.css/normalize.css';
import './style/init.css';
import 'amfe-flexible';
import Vue from 'vue';
import App from './App.vue';
import router from './route/router';
import {
	Tab,
	Tabs,
	Swipe,
	SwipeItem,
	DropdownMenu,
	DropdownItem,
	TreeSelect,
	List,
	Cell,
	Step,
	Steps
} from 'vant';

Vue.use(Tab)
	.use(Tabs)
	.use(Swipe)
	.use(SwipeItem)
	.use(DropdownMenu)
	.use(DropdownItem)
	.use(TreeSelect)
	.use(List)
	.use(Cell)
	.use(Step)
	.use(Steps);

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
