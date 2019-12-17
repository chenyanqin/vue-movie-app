<template>
	<div class="coming-container">
		<top-nav :activeTab="1"></top-nav>
		<div class="main-container">
			<div class="most-expected">
				<div class="title">近期最受期待</div>
				<van-swipe :loop="false" :width="85" :show-indicators="false">
					<van-swipe-item class="expected-item"
						><div class="poster">
							<img
								src="http://p0.meituan.net/170.230/movie/120f2e1e6b0a67449e31107a598c5c911203737.jpg"
								onerror="this.style.visibility='hidden'"
							/>
							<span class="wish"
								><span class="wish-num">844194</span>人想看</span
							>
							<h5 class="name line-ellipsis">唐人街探案3</h5>
							<p class="date">2020年1月25日 周六</p>
						</div>
					</van-swipe-item>
					<van-swipe-item class="expected-item"
						><div class="poster">
							<img
								src="http://p0.meituan.net/170.230/movie/120f2e1e6b0a67449e31107a598c5c911203737.jpg"
								onerror="this.style.visibility='hidden'"
							/>
							<span class="wish"
								><span class="wish-num">844194</span>人想看</span
							>
							<h5 class="name line-ellipsis">唐人街探案3</h5>
							<p class="date">2020年1月25日 周六</p>
						</div>
					</van-swipe-item>
					<van-swipe-item class="expected-item"
						><div class="poster">
							<img
								src="http://p0.meituan.net/170.230/movie/120f2e1e6b0a67449e31107a598c5c911203737.jpg"
								onerror="this.style.visibility='hidden'"
							/>
							<span class="wish"
								><span class="wish-num">844194</span>人想看</span
							>
							<h5 class="name line-ellipsis">唐人街探案3</h5>
							<p class="date">2020年1月25日 周六</p>
						</div>
					</van-swipe-item>
					<van-swipe-item class="expected-item"
						><div class="poster">
							<img
								src="http://p0.meituan.net/170.230/movie/120f2e1e6b0a67449e31107a598c5c911203737.jpg"
								onerror="this.style.visibility='hidden'"
							/>
							<span class="wish"
								><span class="wish-num">844194</span>人想看</span
							>
							<h5 class="name line-ellipsis">唐人街探案3</h5>
							<p class="date">2020年1月25日 周六</p>
						</div>
					</van-swipe-item>
					<van-swipe-item class="expected-item"
						><div class="poster">
							<img
								src="http://p0.meituan.net/170.230/movie/120f2e1e6b0a67449e31107a598c5c911203737.jpg"
								onerror="this.style.visibility='hidden'"
							/>
							<span class="wish"
								><span class="wish-num">844194</span>人想看</span
							>
							<h5 class="name line-ellipsis">唐人街探案3</h5>
							<p class="date">2020年1月25日 周六</p>
						</div>
					</van-swipe-item>
				</van-swipe>
			</div>
			<div class="coming-list">
				<p class="group-date">12月18号 周三</p>
				<div class="coming-movies">
					<div class="movie-item">
						<div class="left-block">
							<img
								src="http://p1.meituan.net/128.180/movie/967b253953bc7e660cfadbf9d78f67b62852693.jpg"
								alt=""
							/>
						</div>
						<div class="right-block">
							<div class="content">
								<div class="name ellipsis">误杀</div>
								<div class="wantsee"><span class="score">7161</span>人想看</div>
								<div class="role ellipsis">肖央,谭卓,陈冲</div>
								<div class="date ellipsis">
									2019-12-18 本周三重映
								</div>
							</div>
							<div class="btn want">
								购票
							</div>
						</div>
					</div>
				</div>
				<p class="group-date">12月18号 周三</p>
				<div class="coming-movies">
					<div class="movie-item">
						<div class="left-block">
							<img
								src="http://p1.meituan.net/128.180/movie/967b253953bc7e660cfadbf9d78f67b62852693.jpg"
								alt=""
							/>
						</div>
						<div class="right-block">
							<div class="content">
								<div class="name ellipsis">误杀</div>
								<div class="wantsee"><span class="score">7161</span>人想看</div>
								<div class="role ellipsis">肖央,谭卓,陈冲</div>
								<div class="date ellipsis">
									2019-12-18 本周三重映
								</div>
							</div>
							<div class="btn">
								购票
							</div>
						</div>
					</div>
				</div>
				<p class="group-date">12月18号 周三</p>
				<div class="coming-movies">
					<div class="movie-item">
						<div class="left-block">
							<img
								src="http://p1.meituan.net/128.180/movie/967b253953bc7e660cfadbf9d78f67b62852693.jpg"
								alt=""
							/>
						</div>
						<div class="right-block">
							<div class="content">
								<div class="name ellipsis">误杀</div>
								<div class="wantsee"><span class="score">7161</span>人想看</div>
								<div class="role ellipsis">肖央,谭卓,陈冲</div>
								<div class="date ellipsis">
									2019-12-18 本周三重映
								</div>
							</div>
							<div class="btn">
								购票
							</div>
						</div>
					</div>
					<div class="movie-item">
						<div class="left-block">
							<img
								src="http://p1.meituan.net/128.180/movie/967b253953bc7e660cfadbf9d78f67b62852693.jpg"
								alt=""
							/>
						</div>
						<div class="right-block">
							<div class="content">
								<div class="name ellipsis">误杀</div>
								<div class="wantsee"><span class="score">7161</span>人想看</div>
								<div class="role ellipsis">肖央,谭卓,陈冲</div>
								<div class="date ellipsis">
									2019-12-18 本周三重映
								</div>
							</div>
							<div class="btn">
								购票
							</div>
						</div>
					</div>
				</div>
			</div>
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
<style lang="less">
.coming-container {
	.van-swipe__track {
		width: 3000px !important;
	}
}
</style>

<style lang="less" scoped>
@import '../../style/mixin.less';
.coming-container {
	width: 100%;
	height: 100%;
	overflow: hidden;
	.flexible(column, flex-start, flex-start);
	.main-container {
		width: 100%;
		flex: 1;
		padding-bottom: 48px;
		overflow: auto;
		.most-expected {
			width: 100%;
			height: 211px;
			padding: 12px 0 12px 15px;
			background-color: #fff;
			margin-bottom: 10px;
			box-sizing: border-box;
			.title {
				margin: 0 0 12px;
				font-size: 14px;
				color: #333;
			}
			.expected-item {
				overflow: hidden;
				margin-right: 10px;
				.poster {
					width: 85px;
					// height: 115px;
					position: relative;
					margin-bottom: 6px;
					img {
						width: 85px;
						height: 115px;
					}
					.wish {
						position: absolute;
						left: 4px;
						top: 98px;
						color: #faaf00;
						font-size: 11px;
						font-weight: 600;
					}
					.name {
						margin: 0 0 3px;
						font-size: 13px;
						color: #222;
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
					}
					.date {
						margin: 0;
						font-size: 12px;
						color: #999;
					}
				}
			}
		}
		.coming-list {
			.group-date {
				padding: 12px 15px 0;
				margin: 0;
				font-size: 14px;
				color: #333;
			}
			.movie-item {
				width: 100%;
				height: 114px;
				padding: 10px;
				position: relative;
				box-sizing: border-box;
				.flexible(row, flex-start, flex-start);
				.left-block {
					width: 64px;
					height: 90px;
					img {
						width: 100%;
						height: 100%;
						border-radius: 3px;
					}
				}
				.right-block {
					position: relative;
					flex: 1;
					height: 90px;
					font-size: 14px;
					color: #666;
					.flexible(row, center, space-between);
					&::after {
						content: '';
						position: absolute;
						bottom: -10px;
						left: 10px;
						right: 0;
						height: 1px;
						background: rgb(243, 243, 243);
					}
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
							font-size: 17px;
							font-weight: bold;
						}
						.wantsee {
							span {
								color: #faaf00;
								font-size: 15px;
								font-weight: 600;
							}
						}
					}
					.btn {
						width: 47px;
						flex: 0 0 47px;
						height: 27px;
						line-height: 27px;
						background: #ff9934;
						border-radius: 4px;
						color: #fff;
						text-align: center;
						font-size: 12px;
					}
					.want {
						background-color: #3c9fe6;
					}
				}
			}
		}
	}
}
</style>
