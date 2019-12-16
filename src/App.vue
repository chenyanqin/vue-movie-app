<template>
	<div id="app">
		<router-view />
		<foot-tab v-if="isTabShow"></foot-tab>
	</div>
</template>
<script>
import FootTab from '@/components/FootTab.vue';

export default {
	name: 'App',
	components: {
		FootTab
	},
	computed: {
		isTabShow() {
			return ['/movie', '/coming', '/cinema', '/my'].includes(this.$route.path);
		}
	}
};
</script>
<style>
#app {
	font-family: 'PingFang SC', 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: 100%;
	height: 100%;
}
</style>
