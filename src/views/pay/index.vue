<template>
	<div class="pay-wrap">
		<div class="order-info-wrap borderBottom10">
			<div class="order-info">
				<div class="title-block">
					<div class="title-text">
						叶问4：完结篇
					</div>
					<div class="count">1张</div>
				</div>
				<div class="date">明天12月22日 11:30 国语2D</div>
				<div class="location">中影超达影城（台安店）</div>
				<div class="place-wrap">
					<div class="place">3号厅</div>
					<div class="seat">5排7座</div>
				</div>
			</div>
			<div class="show-item price">
				<span class="label">市场价</span>
				<span class="value gray-text">¥33/张</span>
			</div>
			<div class="show-item price">
				<span class="label">
					购票方式<van-icon
						@click="openTicketNotice"
						name="question"
						color="rgb(209, 209, 209)"
					/>
				</span>
				<span class="value red-text">特惠购票</span>
			</div>
			<div class="show-item price">
				<span class="label">优惠</span>
				<span class="value red-text">-3.30</span>
			</div>
			<div class="show-item price">
				<span class="label">票价总计</span>
				<span class="value red-text">¥29.70</span>
			</div>
		</div>
		<div class="phone-wrap borderBottom10">
			<div class="title-block">
				<h3 class="borderBottom1">
					手机号<span style="color: #ff9934; font-weight: bold;">（选填）</span>
				</h3>
				<div class="value">
					<input
						v-model="phone"
						type="text"
						placeholder="手机号仅用于场次取消或异常情况时联系"
					/>
				</div>
			</div>
		</div>
		<div class="alternative-seat borderBottom10">
			<div class="title-block borderBottom1">
				<h3>备选座位</h3>
				<van-switch
					v-model="swtichChecked"
					disabled
					active-color="#07c160"
					size="24px"
				/>
			</div>
			<ul>
				<li>1.接受调座，当您选择的座位已出售时，自动为您选择最佳观影座位。</li>
				<li>2.若不接受调座则出票率较低，请谨慎选择。</li>
			</ul>
		</div>
		<div class="purchase-tip">
			<div class="title-block borderBottom1">
				<h3>购票须知</h3>
				<van-checkbox v-model="isChecked" checked-color="#ff9934"
					>已读</van-checkbox
				>
			</div>
			<ul>
				<li>1.请确认好该场次的播放时间、片名，人数、座位；</li>
				<li>已经出票的订单<span>不可改签、退款；</span></li>
				<li>
					3.若因设备故障、存在少量影院排片变化等不可抗因素，会进行退款退票；
				</li>
				<li>
					4.若因系统繁忙的情况下，出现出票失败的情况下，1小时内系统将会退回原账户；
				</li>
				<li>5.如有疑问，请联系平台客服。</li>
			</ul>
		</div>
		<div :class="[isChecked ? 'active' : '', 'next-btn']">
			确定购买
		</div>
		<ticket-notice ref="ticketNoticeRef"></ticket-notice>
	</div>
</template>
<script>
import TicketNotice from '@/components/TicketNotice.vue';

export default {
	name: 'Pay',
	data() {
		return {
			swtichChecked: true,
			isChecked: false,
			phone: ''
		};
	},
	components: {
		TicketNotice
	},
	methods: {
		openTicketNotice() {
			this.$refs['ticketNoticeRef'].open();
		}
	}
};
</script>

<style lang="less">
.pay-wrap {
	.van-checkbox__label {
		font-size: 16px;
		font-weight: bold;
	}
}
::-webkit-input-placeholder {
	font-size: 16px;
	color: #bbb;
	font-weight: 500;
}
::-moz-placeholder {
	font-size: 16px;
	color: #bbb;
	font-weight: 500;
}
:-ms-input-placeholder {
	font-size: 16px;
	color: #bbb;
	font-weight: 500;
}
:-moz-placeholder {
	font-size: 16px;
	color: #bbb;
	font-weight: 500;
}
</style>
<style lang="less" scoped>
@import '../../style/mixin.less';

.pay-wrap {
	width: 100%;
	height: 100%;
	padding-bottom: 70px;
	color: #666;
	overflow: auto;
	box-sizing: border-box;
	.order-info-wrap {
		width: 100%;
		padding-left: 15px;
		box-sizing: border-box;
		.order-info {
			width: 100%;
			height: 100%;
			padding: 15px 15px 15px 0;
			border-radius: 6px;
			box-sizing: border-box;
			.title-block {
				width: 100%;
				height: 30px;
				padding: 5px 0;
				box-sizing: border-box;
				.flexible(row, center, space-between);
				.title-text {
					color: #333;
					font-size: 18px;
					font-weight: bold;
				}
				.count {
					color: #ff495b;
					font-size: 20px;
					font-weight: 600;
				}
			}
			.date {
				height: 24px;
				padding: 5px 0;
				color: #3d9efc;
				font-size: 14px;
				font-weight: 600;
				box-sizing: border-box;
			}
			.location {
				height: 24px;
				padding: 5px 0;
				font-size: 14px;
				font-weight: 500;
				box-sizing: border-box;
			}
			.place-wrap {
				width: 100%;
				height: 24px;
				padding: 5px 0;
				font-size: 14px;
				box-sizing: border-box;
				.flexible(row, center, flex-start);
				.place {
					width: 37.2px;
					text-align: center;
					font-weight: 500;
				}
				.seat {
					margin-left: 10px;
					font-weight: 500;
				}
			}
		}
		.show-item {
			position: relative;
			width: 100%;
			height: 47px;
			padding-right: 15px;
			box-sizing: border-box;
			font-size: 16px;
			.flexible(row, center, space-between);
			&::after {
				position: absolute;
				content: ' ';
				bottom: 0;
				left: 0;
				right: 0;
				height: 1px;
				background-color: #f5f5f5;
			}
			.label {
				font-weight: 500;
			}
			.value {
				font-weight: 500;
				&.gray-text {
				}
				&.red-text {
					color: #ff495b;
				}
			}
			.van-icon-question {
				margin-left: 5px;
				vertical-align: -2px;
			}
		}
	}
	.next-btn {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		line-height: 50px;
		background-color: #f5f5f5;
		color: #ccc;
		font-size: 20px;
		text-align: center;
		&.active {
			background-color: #ff9934;
			color: #fff;
		}
	}
	.phone-wrap {
		width: 100%;
		height: 80px;
		padding-left: 15px;
		.title-block {
			width: 100%;
			height: 37px;
			line-height: 37px;
			h3 {
				color: #666;
			}
			.value {
				width: 100%;
				height: 43px;
				padding: 0 15px 10px 0;
				box-sizing: border-box;
				input {
					width: 100%;
				}
			}
		}
	}
	.alternative-seat {
		padding: 0 15px;
		.title-block {
			height: 59px;
			.flexible(row, center, space-between);
		}
	}
	.purchase-tip {
		padding-left: 15px;
		.title-block {
			height: 50px;
			padding-right: 15px;
			box-sizing: border-box;
			.flexible(row, center, space-between);
		}
	}
	h3 {
		color: #333;
		font-size: 15px;
		font-weight: bold;
	}
	.borderBottom10 {
		border-bottom: 10px solid #f5f5f5;
	}
	.borderBottom1 {
		border-bottom: 1px solid #f5f5f5;
	}
	ul {
		li {
			line-height: 22px;
			color: #999;
			font-size: 12px;
		}
	}
}
</style>
