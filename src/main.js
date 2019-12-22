import 'babel-polyfill';
import 'normalize.css/normalize.css';
import './style/init.css';
import 'amfe-flexible';
import Vue from 'vue';
import App from './App.vue';
import router from './route/router';
import 'vant/lib/icon/local.css';
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
	Steps,
	IndexBar,
	IndexAnchor,
	Icon,
	RadioGroup,
	Radio,
	Popup,
	Checkbox,
	Switch,
	Field,
	CountDown
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
	.use(Steps)
	.use(IndexBar)
	.use(IndexAnchor)
	.use(Icon)
	.use(RadioGroup)
	.use(Radio)
	.use(Popup)
	.use(Checkbox)
	.use(Switch)
	.use(Field)
	.use(CountDown);

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
