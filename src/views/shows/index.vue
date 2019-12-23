<template>
	<div class="shows-wrap">
		<div class="head-block">
			<div class="left-location">
				<div class="movie-name">中数联谊影城（天河店）</div>
				<div class="location">铁东区二道街天河商场7楼</div>
			</div>
			<div class="location-icon">
				<img
					data-v-57b26544=""
					src="data:image/png;base64,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"
				/>
			</div>
		</div>
		<div class="body-block">
			<div
				class="post-bg"
				:style="{ backgroundImage: 'url(' + showDetail['img'] + ')' }"
			></div>
			<div class="post-bg-filter"></div>
			<swiper :options="swiperOption" ref="mySwiper">
				<swiper-slide v-for="(item, index) in slideList" :key="index">
					<div class="post">
						<img :src="item.img" alt="" />
					</div>
				</swiper-slide>
			</swiper>
			<div class="movie-info">
				<div class="movie-title">
					{{ showDetail.name
					}}<span style="color: #ffb400; font-weight: bold;">9.5</span
					><span style="color: #ffb400; font-size: 10px;">分</span>
				</div>
				<div class="movie-desc">107分钟 | 动作 | 甄子丹,吴樾,吴建豪</div>
			</div>
		</div>
		<div class="foot-block">
			<ul class="time-list">
				<li
					:class="[timeActiveIndex === index ? 'active' : '', 'time-item']"
					v-for="(item, index) in timeLine"
					:key="index"
					@click="handleToTime(index)"
				>
					{{ item }}
				</li>
			</ul>
			<ul class="scence-list">
				<li class="scence-item">
					<div class="left-block">
						<div class="time">
							<div class="begin-time">09:30</div>
							<span class="leave-time">11:17 散场</span>
						</div>
						<div class="center-place">
							<div class="movie-type">国语 2D</div>
							<span class="place">6号厅</span>
						</div>
					</div>
					<!-- 不可购买按钮 -->
					<div class="right-btn gray">购票</div>
				</li>
				<li class="scence-item">
					<div class="left-block">
						<div class="time">
							<div class="begin-time">09:30</div>
							<span class="leave-time">11:17 散场</span>
						</div>
						<div class="center-place">
							<div class="movie-type">国语 2D</div>
							<span class="place">6号厅</span>
						</div>
					</div>
					<!-- 可购买按钮 -->
					<div class="right-btn active" @click="handleToSelectSeat">购票</div>
				</li>
				<li class="scence-item">
					<div class="left-block">
						<div class="time">
							<div class="begin-time">09:30</div>
							<span class="leave-time">11:17 散场</span>
						</div>
						<div class="center-place">
							<div class="movie-type">国语 2D</div>
							<span class="place">6号厅</span>
						</div>
					</div>
					<!-- 不可购买按钮 -->
					<div class="right-btn gray">购票</div>
				</li>
				<li class="scence-item">
					<div class="left-block">
						<div class="time">
							<div class="begin-time">09:30</div>
							<span class="leave-time">11:17 散场</span>
						</div>
						<div class="center-place">
							<div class="movie-type">国语 2D</div>
							<span class="place">6号厅</span>
						</div>
					</div>
					<!-- 可购买按钮 -->
					<div class="right-btn active" @click="handleToSelectSeat">购票</div>
				</li>
				<li class="scence-item">
					<div class="left-block">
						<div class="time">
							<div class="begin-time">09:30</div>
							<span class="leave-time">11:17 散场</span>
						</div>
						<div class="center-place">
							<div class="movie-type">国语 2D</div>
							<span class="place">6号厅</span>
						</div>
					</div>
					<!-- 不可购买按钮 -->
					<div class="right-btn gray">购票</div>
				</li>
				<li class="scence-item">
					<div class="left-block">
						<div class="time">
							<div class="begin-time">09:30</div>
							<span class="leave-time">11:17 散场</span>
						</div>
						<div class="center-place">
							<div class="movie-type">国语 2D</div>
							<span class="place">6号厅</span>
						</div>
					</div>
					<!-- 可购买按钮 -->
					<div class="right-btn active" @click="handleToSelectSeat">购票</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
	name: 'Shows',
	data() {
		return {
			timeLine: [
				'今天12月18号',
				'明天12月19号',
				'后天12月20号',
				'周六12月21号',
				'周天12月22号'
			],
			timeActiveIndex: 0,
			swiperOption: {
				initialSlide: 0,
				direction: 'horizontal',
				slidesPerView: 4,
				spaceBetween: 15,
				centeredSlides: true,
				on: {
					slideChangeTransitionEnd: () => {
						let swiper = this.$refs.mySwiper.swiper;
						let i = swiper.activeIndex;
						console.log('this is e====>', swiper, i);
						this.showIndex = i;
						this.showDetail = this.slideList[i];
					}
				}
			},
			slideList: [
				{
					id: 1,
					img:
						'http://p0.meituan.net/148.208/movie/a3d6ca3bdd5b0ddd7016acff9a9f2f2e2805813.jpg',
					name: '叶问'
				},
				{
					id: 2,
					img:
						'http://p1.meituan.net/148.208/movie/967b253953bc7e660cfadbf9d78f67b62852693.jpg',
					name: '误杀'
				},
				{
					id: 3,
					img:
						'http://p0.meituan.net/148.208/movie/aa10dea915717372fc0b36bc75a4a5a92888124.jpg',
					name: '只有芸知道'
				},
				{
					id: 4,
					img:
						'http://p0.meituan.net/148.208/moviemachine/a16716ff2873be37857add59f882e44d5071965.jpg',
					name: '星球大战'
				},
				{
					id: 1,
					img:
						'http://p0.meituan.net/148.208/movie/a3d6ca3bdd5b0ddd7016acff9a9f2f2e2805813.jpg',
					name: '叶问'
				},
				{
					id: 1,
					img:
						'http://p0.meituan.net/148.208/movie/a3d6ca3bdd5b0ddd7016acff9a9f2f2e2805813.jpg',
					name: '叶问'
				}
			],
			showDetail: {
				img: '',
				name: ''
			},
			showIndex: 0
		};
	},
	components: {
		swiper,
		swiperSlide
	},
	methods: {
		handleToTime(index) {
			this.timeActiveIndex = index;
		},
		handleToSelectSeat() {
			this.$router.push('/seat');
		}
	},
	mounted() {
		this.showIndex = 0;
		this.showDetail = this.slideList[0];
	}
};
</script>
<style>
.swiper-container {
	margin-left: 10%;
}
.swiper-wrapper {
	height: 95px;
	display: flex;
}
</style>

<style lang="less" scoped>
@import '../../style/mixin.less';

.shows-wrap {
	width: 100%;
	height: 100%;
	overflow: auto;
	.head-block {
		width: 100%;
		height: 74px;
		padding: 15px 0 15px 15px;
		box-sizing: border-box;
		.flexible(row, center, space-between);
		.left-location {
			.movie-name {
				font-size: 17px;
				line-height: 24px;
				font-weight: 700;
				color: #333;
			}
			.location {
				margin-top: 2px;
				font-size: 13px;
				line-height: 18.5px;
				color: #999;
			}
		}
		.location-icon {
			width: 70px;
			height: 31px;
			border-left: 1px solid #d8d8d8;
			.flexible(row, center, center);
			img {
				width: 19px;
				height: 22px;
			}
		}
	}
	.body-block {
		width: 100%;
		height: 221.5px;
		padding: 20px 15px 20px 5px;
		transform: translateZ(0);
		margin: 0 auto;
		position: relative;
		overflow: hidden;
		list-style: none;
		z-index: 1;
		box-sizing: border-box;
		.post-bg {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: -1;
			overflow: hidden;
			filter: blur(30px);
			background-position-y: 40%;
		}
		.post-bg-filter {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			opacity: 0.55;
		}
		.swiper-wrapper {
			margin-top: -8px;
			.swiper-slide {
				width: 65px;
				height: 95px;
				.post {
					width: 65px;
					img {
						width: 65px;
						height: 95px;
						transform: scale(1);
					}
				}
			}
			.swiper-slide-active {
				position: relative;
				box-sizing: border-box;
				&::after {
					content: ' ';
					position: absolute;
					bottom: -21px;
					left: 58%;
					width: 0;
					height: 0;
					border: 6px solid transparent;
					border-top: 6px solid #fff;
					transform: translateX(-58%);
				}
				.post {
					position: relative;
					top: -8px;
					width: 70.15px;
					height: 109.25px;
					// transform: scale(1.15);
					border: 2px solid #fff;
					img {
						width: 71.15px !important;
						height: 109.25px !important;
					}
				}
			}
		}
		.movie-info {
			margin-top: 30px;
			text-align: center;
			.movie-title {
				height: 24px;
				line-height: 24px;
				font-size: 17px;
				color: #fff;
				font-weight: 700;
			}
			.movie-desc {
				margin-top: 2px;
				height: 18.5px;
				line-height: 18.5px;
				font-size: 13px;
				color: #fff;
			}
		}
	}
	.foot-block {
		position: relative;
		top: -10px;
		background: #fff;
		z-index: 100;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		.time-list {
			padding: 0;
			margin: 0;
			white-space: nowrap;
			overflow-x: scroll;
			height: 45px;
			border-bottom: 1px solid #ebedf0;
			box-sizing: border-box;
			.time-item {
				position: relative;
				display: inline-block;
				width: 115px;
				line-height: 43px;
				margin-left: 4.5px;
				font-size: 14px;
				text-align: center;
				list-style: none;
				&.active {
					border-bottom: 2px solid #ff9934;
					color: #ff9934;
				}
			}
		}
		.scence-list {
			width: 100%;
			border-bottom: 10px solid rgb(240, 240, 240);
			.scence-item {
				position: relative;
				height: 76px;
				padding: 17px 17px 17px 0;
				margin-left: 12.5px;
				box-sizing: border-box;
				&::after {
					content: ' ';
					position: absolute;
					width: 100%;
					bottom: 0;
					height: 1px;
					background: #ebedf0;
				}
				.flexible(row, center, space-between);
				.left-block {
					.flexible(row, center, flex-start);
					.time {
						.begin-time {
							font-size: 20px;
							color: #333;
							line-height: 1;
							white-space: nowrap;
						}
						.leave-time {
							color: #999;
							font-size: 11px;
							line-height: 1;
							white-space: nowrap;
						}
					}
					.center-place {
						margin-left: 17px;
						.movie-type {
							margin-top: 2px;
							line-height: 18px;
							font-size: 13px;
							color: #333;
							white-space: normal;
						}
						.place {
							margin-top: 7px;
							font-size: 11px;
							color: #999;
							white-space: normal;
						}
					}
				}
				.left-time {
					height: 20px;
					// .flexible(row, flex-end, flex-start);
				}

				.right-btn {
					width: 55px;
					height: 35px;
					line-height: 35px;
					font-size: 12px;
					color: #fff;
					border-radius: 4px;
					text-align: center;
					border-radius: 20px;
					&.gray {
						background: gray;
					}
					&.active {
						background: @activeColor;
					}
				}
			}
		}
	}
	::-webkit-scrollbar {
		display: none;
	}
}
</style>
