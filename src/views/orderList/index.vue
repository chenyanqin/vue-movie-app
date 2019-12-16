<template>
	<div class="order-container">
		<van-tabs v-model="activeTab" title-active-color="#ff9934">
			<van-tab title="全部"></van-tab>
			<van-tab title="待付款"></van-tab>
			<van-tab title="待出票"></van-tab>
			<van-tab title="已出票"></van-tab>
			<van-tab title="退款/售后"></van-tab>
		</van-tabs>
		<van-cell title="受理失败" is-link to="/orderList" value="" />
		<order-tab></order-tab>
	</div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';

export default {
	name: 'Coming',
	data() {
		return {
			activeTab: 0
		};
	},
	components: {
		TopNav
	}
};
</script>

<style lang="less" scoped>
.order-container {
	width: 100%;
	height: 100%;
	overflow: scroll;
	background-color: #fff;
}
</style>
