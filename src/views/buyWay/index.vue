<template>
	<div class="buy-way">
		<div class="content-wrap">
			<div class="order-info-wrap">
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
					<div class="price"><span>市场价</span> ¥33/张</div>
				</div>
			</div>
			<h2 class="title">
				请选择购票方式
			</h2>
			<div class="way">
				<div class="left-block" @click="radio = '1'">
					<img
						src="data:image/png;base64,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"
						alt=""
					/>
					<div class="name-wrap">
						<div class="name">特惠购票</div>
						<div class="sub-name">
							(出票耗时较长，电影开场前一小时停售)
						</div>
					</div>
				</div>
				<div class="right-block">
					<div class="price">¥29.7/张</div>
					<van-radio-group v-model="radio">
						<van-radio name="1" checked-color="#ff9934"></van-radio>
					</van-radio-group>
				</div>
			</div>
			<div class="way">
				<div class="left-block" @click="radio = '2'">
					<img
						src="data:image/png;base64,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"
						alt=""
					/>
					<div class="name-wrap">
						<div class="name">竞价购买</div>
						<div class="sub-name">
							(竞价耗时较长，可能获得更低的折扣，开场前一小时停售。)
						</div>
					</div>
				</div>
				<div class="right-block">
					<div class="price">等待竞价</div>
					<van-radio-group v-model="radio">
						<van-radio name="2" checked-color="#ff9934"></van-radio>
					</van-radio-group>
				</div>
			</div>
			<div class="look-intro" @click="openTicketNotice">
				查看购票方式说明
			</div>
		</div>
		<div
			:class="[radio ? 'active' : '', 'next-btn']"
			@click="$router.push('/pay')"
		>
			下一步
		</div>
		<ticket-notice ref="ticketNoticeRef"></ticket-notice>
	</div>
</template>
<script>
import TicketNotice from '@/components/TicketNotice.vue';

export default {
	name: 'BuyWay',
	data() {
		return {
			radio: null
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
<style lang="less" scoped>
@import '../../style/mixin.less';

.buy-way {
	width: 100%;
	height: 100%;
	.content-wrap {
		.order-info-wrap {
			width: 100%;
			height: 223px;
			padding: 20px;
			box-sizing: border-box;
			.order-info {
				width: 100%;
				height: 100%;
				padding: 10px 20px;
				border-radius: 6px;
				box-shadow: 0 0 10px #ccc;
				box-sizing: border-box;
				.title-block {
					width: 100%;
					height: 42px;
					line-height: 42px;
					padding: 5px 0 8px;
					box-sizing: border-box;
					.flexible(row, center, space-between);
					.title-text {
						color: #333;
						font-size: 16px;
						font-weight: bold;
					}
					.count {
						color: #ff495b;
						font-size: 14px;
						font-weight: 600;
					}
				}
				.date {
					padding: 5px 0 8px;
					color: #ff495b;
					font-size: 14px;
					font-weight: 600;
				}
				.location {
					padding: 5px 0 8px;
					color: #666;
					font-size: 14px;
				}
				.place-wrap {
					width: 100%;
					height: 40px;
					box-sizing: border-box;
					.flexible(row, center, flex-start);
					.place {
						width: 37.2px;
						height: 27px;
						line-height: 27px;
						color: #fff;
						font-size: 12px;
						background-color: @activeColor;
						border-radius: 3px;
						text-align: center;
					}
					.seat {
						margin-left: 10px;
						color: #2c3e50;
						font-size: 14px;
					}
				}
				.price {
					text-align: right;
					font-size: 14px;
					font-weight: 500;
					color: #ff495b;
					span {
						color: #999;
						font-weight: 500;
					}
				}
			}
		}
		.title {
			height: 40px;
			line-height: 40px;
			padding: 0 20px;
			color: #333;
			font-size: 20px;
			font-weight: bold;
		}
		.way {
			position: relative;
			width: 100%;
			height: 100px;
			padding: 10px 20px;
			box-sizing: border-box;
			.flexible(row, center, space-between);
			&::after {
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				content: ' ';
				height: 1px;
				background-color: rgb(243, 243, 243);
			}
			.left-block {
				.flexible(row, center, flex-start);
				img {
					width: 30px;
					height: 30px;
				}
				.name-wrap {
					margin-left: 10px;
					.name {
						color: #666;
						font-size: 15px;
						font-weight: bold;
					}
					.sub-name {
						width: 175px;
						line-height: 12px;
						margin-top: 10px;
						font-size: 12px;
						color: #999;
					}
				}
			}
			.right-block {
				.flexible(row, center, flex-start);
				.price {
					margin-right: 15px;
					color: #ff495b;
					font-size: 15px;
					font-weight: 600;
				}
			}
		}
		.look-intro {
			width: 100%;
			height: 36px;
			line-height: 36px;
			padding: 0 20px;
			color: #ff495b;
			font-size: 16px;
			font-weight: bold;
			box-sizing: border-box;
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
}
</style>
