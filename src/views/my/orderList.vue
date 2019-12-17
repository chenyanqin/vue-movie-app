<template>
	<div class="order-container">
		<div class="nav-wrap">
			<div
				v-for="(item, index) in navList"
				:key="index"
				:class="[index === activeIndex ? 'active' : '', 'nav-block']"
				@click="handleNav(index)"
			>
				{{ item }}
			</div>
		</div>
		<div class="body-container">
			<div class="order-list" v-if="activeIndex === 0">
				<div class="order-item">
					<van-cell title="受理失败" is-link to="/orderOffer" value="" />
					<div class="body-content">
						<div class="left-block">
							<img
								src="http://p1.meituan.net/128.180/movie/967b253953bc7e660cfadbf9d78f67b62852693.jpg"
								alt=""
							/>
						</div>
						<div class="right-block">
							<div class="content">
								<div class="name">误杀 2张</div>
								<div class="common-text place">云顶国际3D影院</div>
								<div class="common-text position">1号厅</div>
								<div class="common-text date ellipsis">
									今天12月14日 23:35 国语2D
								</div>
								<div class="case ellipsis">5排6座</div>
							</div>
							<div class="btn">
								购票
							</div>
						</div>
					</div>
					<div class="pay-status">
						未支付：￥0元
					</div>
				</div>
				<div class="order-item">
					<van-cell title="受理失败" is-link to="/orderList" value="" />
					<div class="body-content">
						<div class="left-block">
							<img
								src="http://p1.meituan.net/128.180/movie/967b253953bc7e660cfadbf9d78f67b62852693.jpg"
								alt=""
							/>
						</div>
						<div class="right-block">
							<div class="content">
								<div class="name">误杀 2张</div>
								<div class="common-text place">云顶国际3D影院</div>
								<div class="common-text position">1号厅</div>
								<div class="common-text date ellipsis">
									今天12月14日 23:35 国语2D
								</div>
								<div class="case ellipsis">5排6座</div>
							</div>
							<div class="btn">
								购票
							</div>
						</div>
					</div>
					<div class="pay-status">
						未支付：￥0元
					</div>
				</div>
				<div class="order-item">
					<van-cell title="受理失败" is-link to="/orderList" value="" />
					<div class="body-content">
						<div class="left-block">
							<img
								src="http://p1.meituan.net/128.180/movie/967b253953bc7e660cfadbf9d78f67b62852693.jpg"
								alt=""
							/>
						</div>
						<div class="right-block">
							<div class="content">
								<div class="name">误杀 2张</div>
								<div class="common-text place">云顶国际3D影院</div>
								<div class="common-text position">1号厅</div>
								<div class="common-text date ellipsis">
									今天12月14日 23:35 国语2D
								</div>
								<div class="case ellipsis">5排6座</div>
							</div>
							<div class="btn">
								购票
							</div>
						</div>
					</div>
					<div class="pay-status">
						未支付：￥0元
					</div>
				</div>
				<div class="order-item">
					<van-cell title="受理失败" is-link to="/orderList" value="" />
					<div class="body-content">
						<div class="left-block">
							<img
								src="http://p1.meituan.net/128.180/movie/967b253953bc7e660cfadbf9d78f67b62852693.jpg"
								alt=""
							/>
						</div>
						<div class="right-block">
							<div class="content">
								<div class="name">误杀 2张</div>
								<div class="common-text place">云顶国际3D影院</div>
								<div class="common-text position">1号厅</div>
								<div class="common-text date ellipsis">
									今天12月14日 23:35 国语2D
								</div>
								<div class="case ellipsis">5排6座</div>
							</div>
							<div class="btn">
								购票
							</div>
						</div>
					</div>
					<div class="pay-status">
						未支付：￥0元
					</div>
				</div>
			</div>
			<div class="no-data" v-else>
				<img src="../../assets/nodata.png" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';

export default {
	name: 'Coming',
	data() {
		return {
			activeIndex: 0,
			navList: ['全 部', '待付款', '待出票', '已出票', '退款/售后']
		};
	},
	components: {
		TopNav
	},
	methods: {
		handleNav(index) {
			this.activeIndex = index;
		}
	}
};
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.order-container {
	width: 100%;
	height: 100%;
	overflow: scroll;
	background-color: #fff;
	.nav-wrap {
		position: fixed;
		top: 0;
		width: 100%;
		height: 50px;
		line-height: 50px;
		padding: 0 10px;
		font-weight: 900;
		background-color: #fff;
		border-bottom: 1px solid #f5f5f5;
		box-sizing: border-box;
		z-index: 100;
		.flexible(row, center, space-between);
		.nav-block {
			height: 100%;
			font-size: 14px;
			&.active {
				border-bottom: 2px solid @activeColor;
				box-sizing: border-box;
			}
		}
	}
	.body-container {
		height: calc(100vh - 50px);
		padding-top: 50px;
		overflow: auto;
		.order-list {
			width: 100%;
			flex: 1;
			overflow: auto;
			.order-item {
				margin-bottom: 8px;
				overflow-x: hidden;
				.body-content {
					width: 100%;
					height: 123px;
					padding: 10px;
					position: relative;
					box-sizing: border-box;
					.flexible(row, flex-start, flex-start);
					&::after {
						content: '';
						position: absolute;
						width: 100%;
						bottom: 0;
						height: 1px;
						background: rgb(243, 243, 243);
					}
					.left-block {
						width: 70px;
						height: 100px;
						img {
							width: 100%;
							height: 100%;
							border-radius: 3px;
						}
					}
					.right-block {
						flex: 1;
						height: 100px;
						font-size: 14px;
						color: #666;
						.flexible(row, center, space-between);
						.content {
							flex: 1;
							height: 100%;
							margin-left: 10px;
							padding: 2px 0;
							box-sizing: border-box;
							.flexible(column, flex-start, space-between);
							.ellipsis {
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
							.name {
								color: #333;
								font-size: 16px;
								font-weight: bold;
							}
							.score {
								color: #ff495b;
								font-weight: bold;
							}
						}
						.btn {
							width: 50px;
							flex: 0 0 50px;
							height: 30px;
							line-height: 30px;
							background: #ff9934;
							border-radius: 30px;
							color: #fff;
							text-align: center;
						}
					}
				}
				.pay-status {
					padding: 15px 10px 15px 10px;
					font-weight: bold;
					font-size: 14px;
					color: #ff495b;
				}
			}
		}
		.no-data {
			display: flex;
			align-items: center;
			width: 100%;
			height: calc(100vh - 150px);
			img {
				width: 130px;
				height: 130px;
				margin: auto;
			}
		}
	}
}
</style>
