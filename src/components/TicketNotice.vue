<template>
	<van-popup
		v-model="isShow"
		round
		position="bottom"
		:style="{ height: '80%' }"
	>
		<ul class="explain-list">
			<li class="explain-item">
				<div class="title">
					<span class="num">1</span>
					<div>特惠购票</div>
				</div>
				<ul class="explain-detail">
					<li>
						1、已经出票的订单<span style="color: #f00;">不可改签、退款</span>
					</li>
					<li>2、特惠购票，可以较快速出票，节省时间。</li>
					<li>
						3、付款后5-60分钟出票，若未能出票，1小时后系统自动退回原支付账户。
					</li>
					<li>4、如有疑问，请联系平台客服。</li>
				</ul>
			</li>
			<li class="explain-item">
				<div class="title">
					<span class="num">2</span>
					<div>竞价购买</div>
				</div>
				<ul class="explain-detail">
					<li>
						1、已经出票的订单<span style="color: #f00;">不可改签、退款</span>
					</li>
					<li>2、竞价购票，较为耗时，有可能得到更优惠的价格。</li>
					<li>
						3、付款后10-60分钟出票，若未能出票，1小时后系统自动退回原支付账户。
					</li>
					<li>4、如有疑问，请联系平台客服。</li>
				</ul>
			</li>
		</ul>
	</van-popup>
</template>
<script>
export default {
	name: 'TicketNotice',
	data() {
		return {
			isShow: false
		};
	},
	methods: {
		open() {
			this.isShow = true;
		}
	}
};
</script>
<style lang="less" scoped>
@import '../style/mixin.less';

.explain-list {
	padding: 20px;
	.explain-item {
		margin-bottom: 15px;
		.title {
			height: 20px;
			color: #2c3e50;
			font-size: 16px;
			.flexible(row, flex-end, flex-start);
			.num {
				display: inline-block;
				width: 20px;
				height: 20px;
				font-size: 20px;
				font-weight: bold;
				text-align: center;
				background-color: @activeColor;
				border-radius: 50%;
			}
			div {
				margin-left: 10px;
				font-weight: bold;
			}
		}
		.explain-detail {
			width: 295px;
			padding: 10px 10px 10px 30px;
			li {
				line-height: 24px;
				font-size: 12px;
				font-weight: bold;
				word-wrap: break-word;
				color: rgb(66, 66, 66);
			}
		}
	}
}
</style>
