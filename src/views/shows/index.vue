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
				style='background-image: url("http://p0.meituan.net/148.208/movie/a3d6ca3bdd5b0ddd7016acff9a9f2f2e2805813.jpg");'
			></div>
			<div class="post-bg-filter"></div>
			<div
				class="swiper-wrapper"
				style="transform: translate3d(154px, 0px, 0px);
    transition-duration: 0ms;"
			>
				<div class="swiper-slide swiper-slide-active">
					<div class="post">
						<img
							src="http://p0.meituan.net/148.208/movie/a3d6ca3bdd5b0ddd7016acff9a9f2f2e2805813.jpg"
							alt=""
						/>
					</div>
					<i class="down-arrow"></i>
				</div>
				<div class="swiper-slide">
					<div class="post">
						<img
							src="http://p0.meituan.net/148.208/movie/a3d6ca3bdd5b0ddd7016acff9a9f2f2e2805813.jpg"
							alt=""
						/>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="post">
						<img
							src="http://p0.meituan.net/148.208/movie/a3d6ca3bdd5b0ddd7016acff9a9f2f2e2805813.jpg"
							alt=""
						/>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="post">
						<img
							src="http://p0.meituan.net/148.208/movie/a3d6ca3bdd5b0ddd7016acff9a9f2f2e2805813.jpg"
							alt=""
						/>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="post">
						<img
							src="http://p0.meituan.net/148.208/movie/a3d6ca3bdd5b0ddd7016acff9a9f2f2e2805813.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
			<div class="movie-info">
				<div class="movie-title">
					叶问4：完结篇<span style="color: #ff9934;">9.5分</span>
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
			timeActiveIndex: 0
		};
	},
	methods: {
		handleToTime(index) {
			this.timeActiveIndex = index;
		},
		handleToSelectSeat() {
			this.$router.push('/seat');
		}
	}
};
</script>
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
		// .swiper-wrapper {
		// 	position: relative;
		// 	width: 100%;
		// 	height: 100%;
		// 	z-index: 1;
		// 	display: -webkit-box;
		// 	display: -ms-flexbox;
		// 	display: flex;
		// 	transition-property: -webkit-transform;
		// 	transition-property: transform;
		// 	transition-property: transform, -webkit-transform;
		// 	-webkit-box-sizing: content-box;
		//   box-sizing: content-box;
		// 	.swiper-slide {
		// 		height: 95px;
		// 		flex-shrink: 0;
		// 		width: 100%;
		// 		height: 100%;
		// 		position: relative;
		// 		transition-property: transform;
		// 		// white-space: nowrap;
		// 		// overflow-x: scroll;
		// 		.post {
		// 			width: 65.15px;
		// 			-webkit-transition: -webkit-transform 0.3s;
		// 			transition: -webkit-transform 0.3s;
		// 			transition: transform 0.3s;
		// 			transition: transform 0.3s, -webkit-transform 0.3s;
		// 			position: relative;
		// 			// box-sizing: border-box;
		// 			img {
		// 				width: 65.15px;
		// 				// height: 109.25px;
		// 				// height: 95px;
		// 				// -webkit-transform: scale(1);
		// 				// transform: scale(1);
		// 			}
		// 		}
		// 	}
		// 	.swiper-slide-active {
		// 		height: 95px;
		// 		position: relative;
		// 		padding-right: 5px;
		// 		&::after {
		// 			content: '';
		// 			position: absolute;
		// 			bottom: -6px;
		// 			left: 50%;
		// 			transform: translateX(-50%);
		// 			width: 10px;
		// 			height: 5px;
		// 			background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAAGXRFW…DgLorvI3AVJWozsELJuhmYocyaCvQo1f2jeiT/cK8AAwBzvH2t7aaajQAAAABJRU5ErkJggg==)
		// 				no-repeat;
		// 			background-size: contain;
		// 		}
		// 		.post {
		// 			transform: scale(1.15);
		// 			border: 2px solid #fff;
		// 		}
		// 	}
		// }
		.swiper-wrapper {
			// position: relative;
			// width: 100%;
			// height: 100%;
			// z-index: 1;
			// display: -webkit-box;
			// display: -ms-flexbox;
			margin-top: -8px;
			display: flex;
			padding: 0;
			// margin: 0;
			white-space: nowrap;
			overflow-x: scroll;
			// transition-property: -webkit-transform;
			// transition-property: transform;
			// transition-property: transform, -webkit-transform;
			// -webkit-box-sizing: content-box;
			// box-sizing: content-box;
			.swiper-slide {
				width: 65px;
				height: 95px;
				margin-right: 8px;
				flex-shrink: 0;
				// width: 100%;
				// height: 100%;
				.post {
					// width: 100%;
					width: 65px;
					// -webkit-transition: -webkit-transform 0.3s;
					// transition: -webkit-transform 0.3s;
					// transition: transform 0.3s;
					// transition: transform 0.3s, -webkit-transform 0.3s;
					// position: relative;
					// box-sizing: border-box;
					img {
						width: 65px;
						height: 95px;
						// height: 109.25px;
						// height: 95px;
						// -webkit-transform: scale(1);
						// transform: scale(1);
					}
				}
			}
			.swiper-slide-active {
				width: 74.75px;
				height: 117.3px;
				position: relative;
				margin-right: 5px;
				border: 2px solid #fff;
				box-sizing: border-box;
				&::after {
					// content: ' ';
					// position: absolute;
					// bottom: -12px;
					// left: 50%;
					// width: 0;
					// height: 0;
					// border: 6px solid transparent;
					// border-top: 6px solid #fff;
					// transform: translateX(-50%);
					// width: 10px;
					// height: 5px;
					// background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMwODIyNEEwNTkwRDExRTZBNkMwOTE1NDA0RjA5MDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMwODIyNEExNTkwRDExRTZBNkMwOTE1NDA0RjA5MDA3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzA4MjI0OUU1OTBEMTFFNkE2QzA5MTU0MDRGMDkwMDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzA4MjI0OUY1OTBEMTFFNkE2QzA5MTU0MDRGMDkwMDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7kjYk3AAAAVUlEQVR42qzMMQ7AIAwEwSvy8P25EwokZNkYCFcgCu/IzLB7Q9+jS2gz1MG/KN0ZwVOU0fDgLorvI3AVJWozsELJuhmYocyaCvQo1f2jeiT/cK8AAwBzvH2t7aaajQAAAABJRU5ErkJggg==)
					// 	no-repeat;
					// background-size: contain;
				}
				.post {
					// transform: scale(1.15);
					// border: 2px solid #fff;
					img {
						width: 71.15px;
						height: 109.25px;
					}
				}
				.down-arrow {
					position: absolute;
					bottom: -12px;
					left: 50%;
					width: 0;
					height: 0;
					border: 6px solid transparent;
					border-top: 6px solid #fff;
				}
			}
		}
		.movie-info {
			margin-top: 23px;
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
