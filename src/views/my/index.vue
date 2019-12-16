<template>
	<div class="my-container">
		<div class="info-container">
			<div class="avatar">
				<img
					src="http://thirdwx.qlogo.cn/mmopen/vi_32/m7fLWyJrnwHZXBZ1dphZELkd3UC9qVbjT41Uz9TpClHbdib9ciadgOIPVo8NAojEVJpV4Y8vWfyQaCWvic7VvASOw/132"
					alt=""
				/>
			</div>
			<div class="info">
				<div class="nick">乘风破浪</div>
				<div class="userId">ID: 266083</div>
			</div>
		</div>
		<div class="order-container">
			<van-cell title="我的订单" is-link to="/orderList" value="全部订单" />
			<order-tab></order-tab>
		</div>
		<div class="service-container">
			<van-cell title="我的服务" />
			<van-cell title="建议反馈" is-link to="/suggest" class="suggest" />
			<div></div>
		</div>
	</div>
</template>

<script>
import OrderTab from '@/components/OrderTab.vue';

export default {
	name: 'My',
	components: {
		OrderTab
	}
};
</script>
<style lang="less">
.suggest {
	.van-cell__title {
		font-size: 13px;
	}
	.van-cell:not(:last-child)::after {
		left: 0 !important;
	}
}
</style>

<style lang="less" scoped>
@import '../../style/mixin.less';

.my-container {
	width: 100%;
	height: 100%;
	padding-bottom: 48px;
	box-sizing: border-box;
	.flexible(column, flex-start, flex-start);
	.info-container {
		width: 100%;
		height: 115px;
		padding: 20px;
		background: url('../../assets/my_bg.png');
		box-sizing: border-box;
		.flexible(row, flex-start, flex-start);
		.avatar {
			width: 55px;
			height: 55px;
			img {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
		.info {
			margin-left: 10px;
			color: #333;
			.nick {
				margin-top: 10px;
				font-size: 16px;
			}
			.userId {
				margin-top: 8px;
				font-size: 12px;
			}
		}
	}
	.order-container {
		width: 100%;
		height: 102px;
		border-bottom: 10px solid #f5f5f5;
	}
	.service-container {
		width: 100%;
		flex: 1;
	}
}
</style>
