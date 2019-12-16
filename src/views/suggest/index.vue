<template>
	<div class="suggest-container">
		<div class="suggest-block">
			<textarea
				data-v-13ea507a=""
				placeholder="请留下您宝贵的意见，以便我们更好的改进（不少于5个字）"
				class="suggest-text"
			></textarea>
		</div>
		<div class="btn-block">
			提交
		</div>
	</div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';

export default {
	name: 'Coming',
	components: {
		TopNav
	}
};
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.suggest-container {
	width: 100%;
	height: 100%;
	overflow: scroll;
	background-color: #fff;
	.suggest-block {
		width: 100%;
		height: 200px;
		padding: 10px 20px;
		margin-bottom: 40px;
		.suggest-text {
			width: calc(100vw - 60px);
			height: 100%;
			font-size: 14px;
			padding: 10px;
			border-radius: 5px;
		}
	}
	.btn-block {
		width: 300px;
		height: 44px;
		line-height: 44px;
		margin: 20px auto;
		border-radius: 8px;
		font-size: 15px;
		text-align: center;
		background: #d1d1d1;
		color: #fff;
		&.active {
			background: @activeColor;
		}
	}
}
</style>
