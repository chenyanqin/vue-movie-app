<template>
	<div class="movie-container">
		<top-nav :activeTab="0"></top-nav>
		<div class="movie-list">
			<!-- <van-list
				v-model="loading"
				:finished="finished"
				finished-text="没有更多了"
				@load="onLoad"
			> -->
			<div class="movie-item">
				<div class="left-block">
					<img
						src="http://p1.meituan.net/128.180/movie/967b253953bc7e660cfadbf9d78f67b62852693.jpg"
						alt=""
					/>
				</div>
				<div class="right-block">
					<div class="content">
						<div class="name">误杀</div>
						<div class="rate">观众评分 <span class="score">9.5</span></div>
						<div class="role ellipsis">主演:肖央,谭卓,陈冲</div>
						<div class="case ellipsis">
							今天19家影院放映203场
						</div>
					</div>
					<div class="btn">
						购票
					</div>
				</div>
			</div>
			<!-- </van-list> -->
		</div>
		<!-- <ul class="movie-list">
			
		</ul> -->
	</div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';

export default {
	name: 'Movie',
	data() {
		return {
			loading: false,
			finished: false
		};
	},
	components: {
		TopNav
	}
};
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.movie-container {
	height: 100%;
	.flexible(column, flex-start, flex-start);
	.movie-list {
		width: 100%;
		flex: 1;
		.movie-item {
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
					padding: 4px 0;
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
	}
}
</style>
