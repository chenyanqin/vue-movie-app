<template>
	<div class="offer-container">
		<div class="movie-item">
			<div class="left-block">
				<div class="content">
					<div class="name">误杀 1张</div>
					<div class="common-text date">
						今天12月14日 23:35
					</div>
					<div class="common-text place">云顶国际3D影院 1号厅</div>
					<div class="common-text position">5排6座</div>
				</div>
			</div>
			<div class="right-block">
				<img
					src="http://p1.meituan.net/128.180/movie/967b253953bc7e660cfadbf9d78f67b62852693.jpg"
					alt=""
				/>
			</div>
		</div>
		<div class="price-item">
			<div class="common-text top-block">待支付:¥20.7 已支付:¥0</div>
			<div class="common-text bottom-block">市场价:¥23</div>
		</div>
		<div class="order-item">
			<div>
				订单编号:201912142232032660832013147264
				<button type="button" class="copy-btn">复制</button>
			</div>
			<div>创建时间:2019-12-14 22:32:03</div>
		</div>
		<van-steps
			class="steps-block"
			direction="vertical"
			:active="0"
			inactive-icon="checked"
			active-color="#ff9934"
		>
			<van-step>
				<h4>支付失败</h4>
				<p class="sub-title">2016-07-12 12:40</p>
			</van-step>
			<van-step>
				<h4 class="title">订单创建</h4>
				<h5 class="sub-title">您的订单创建</h5>
				<p class="sub-title">2016-07-12 12:40</p>
			</van-step>
			<van-step>
				<h4 class="flexHorizontal title">
					竞价中
					<img
						class="time-img"
						src="https://gw.hainishuo.com/webapp/img/clock.20ff53e9.png"
						alt=""
					/>
					<div class="coutdown-block">
						<van-count-down :time="time" />
					</div>
				</h4>
				<h5 class="sub-title">
					系统正努力为您筛选最优价格。五分钟内，客观要是觉得价格合适，可立即支付出票。
				</h5>
				<p class="actived-color small-size">
					<i class="point"></i>当前最新竞价：69.12元<span class="sub-title"
						>共优惠16.88</span
					>
				</p>
			</van-step>
			<van-step>
				<h4 class="title">等待支付</h4>
				<div class="cancel-btn">取消订单</div>
			</van-step>
		</van-steps>
		<div class="next-btn active">
			立即支付
		</div>
	</div>
</template>

<script>
export default {
	name: 'Offer',
	data() {
		return {
			time: 5 * 60 * 60 * 1000
		};
	}
};
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.offer-container {
	width: 100%;
	height: 100%;
	padding: 10px 15px;
	overflow: auto;
	box-sizing: border-box;
	.movie-item {
		width: 100%;
		height: 121px;
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
			flex: 1;
			height: 100px;
			.flexible(row, center, space-between);
			.content {
				flex: 1;
				height: 100%;
				padding: 4px 0;
				box-sizing: border-box;
				.flexible(column, flex-start, space-between);
				.date,
				.position {
					font-size: 13px;
				}
				.ellipsis {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.name {
					color: #333;
					font-size: 18px;
					font-weight: bold;
				}
				.date {
					color: #3d9efc;
				}
			}
		}
		.right-block {
			width: 70px;
			height: 100px;
			img {
				width: 100%;
				height: 100%;
				border-radius: 3px;
			}
		}
	}
	.price-item {
		position: relative;
		height: 59px;
		padding: 10px 0;
		font-size: 14px;
		font-weight: bold;
		box-sizing: border-box;
		.flexible(column, flex-start, space-between);
		&::after {
			content: '';
			position: absolute;
			width: 100%;
			bottom: 0;
			height: 1px;
			background: rgb(243, 243, 243);
		}
	}
	.order-item {
		width: 100%;
		height: 45px;
		padding: 10px;
		box-sizing: border-box;
		font-size: 10px;
		color: #afafaf;
		.flexible(column, flex-start, space-between);
		.copy-btn {
			padding: 2px 8px;
			border-radius: 20px;
			border: 1px solid #d1d1d1;
			background-color: #fff;
			margin-left: 5px;
			margin-right: -15px;
		}
	}
	.common-text {
		font-size: 14px;
		color: #2c3e50;
		font-weight: bold;
	}
	.steps-block {
		.actived-color {
			color: @activeColor;
		}
		.small-size {
			font-size: 12px;
		}
		.title {
			color: #333;
		}
		sub-title {
			color: #afafaf;
			font-size: 10px;
		}
		.time-img {
			width: 18px;
			height: 18px;
			margin-left: 10px;
		}
		.flexHorizontal {
			height: 24px;
			.flexible(row, flex-start, flex-start);
		}
		.coutdown-block {
			height: 20px;
			margin-left: 5px;
			padding: 0 1px 1px 1px;
			border: 1px solid @activeColor;
			border-radius: 5px;
			box-sizing: border-box;
			font-size: 12px;
			.van-count-down {
				height: 20px !important;
				line-height: 20px !important;
				font-size: 12px !important;
				color: @activeColor;
			}
		}
		.cancel-btn {
			margin-top: 5px;
			width: 60px;
			font-size: 12px;
			text-align: center;
			border-radius: 10px;
			border: 1px solid #afafaf;
		}
		.point {
			display: inline-block;
			width: 4px;
			height: 4px;
			margin-bottom: 1px;
			margin-right: 2px;
			background: @activeColor;
			border-radius: 50%;
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
