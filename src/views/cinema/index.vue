<template>
	<div class="cinema-container">
		<select-tab :showType="1"></select-tab>
	</div>
</template>

<script>
import SelectTab from '@/components/SelectTab';

export default {
	name: 'Cinema',
	components: {
		SelectTab
	},
	methods: {}
};
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.cinema-container {
	width: 100%;
	height: 100%;
	padding-bottom: 48px;
	box-sizing: border-box;
	.down-arrow {
		margin-right: 5px;
		width: 0;
		height: 0;
		border: 4px solid #b0b0b0;
		border-left-color: transparent;
		border-right-color: transparent;
		border-bottom-color: transparent;
		display: inline-block;
		margin-left: 4px;
		margin-top: 5px;
	}
}
</style>
