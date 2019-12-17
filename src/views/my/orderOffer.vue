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
		<van-steps direction="vertical" :active="0" active-color="#ff9934">
			<van-step>
				<h4>支付失败</h4>
				<p style="color: #afafaf; font-size: 10px;">2016-07-12 12:40</p>
			</van-step>
		</van-steps>
	</div>
</template>

<script>
export default {
	name: 'Offer'
};
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.offer-container {
	padding: 10px 15px;
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
}
</style>
