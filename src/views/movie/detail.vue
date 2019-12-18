<template>
	<div class="detail-container">
		<div :class="[headSectionShow ? 'detail-item' : 'hiden']">
			<div class="detail-filter"></div>
			<div
				class="poster-bg"
				style='background: url("http://p1.meituan.net/148.208/detail/967b253953bc7e660cfadbf9d78f67b62852693.jpg");'
			></div>
			<div class="detail-content">
				<div class="left-block">
					<img
						src="http://p1.meituan.net/148.208/detail/967b253953bc7e660cfadbf9d78f67b62852693.jpg"
					/>
				</div>
				<div class="right-block">
					<div class="content">
						<div class="name">误杀</div>
						<div class="common-text ename">
							Sheep Without a Shepherd
						</div>
						<div class="score">9.5<span class="snum"> (149904人评)</span></div>
						<div class="common-text catogary">剧情,犯罪</div>
						<div class="common-text place">中国大陆/112分钟</div>
						<div class="common-text date">
							2019-12-13大陆上映
						</div>
					</div>
					<div class="right-arrow">
						<img
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAAAXNSR0IArs4c6QAAAS5JREFUOBGVkktuwkAMhpOoJ+hhSouE2HbDgiVCNCAOVtQHnINHhbgMJ6g6/f9gR848kmDJeOzxZ3scskzEOfcKXUMLjXXZByYQhJlqMvz3PM//1E9Z7fJoEp5wXvWZoILRZQtg7xVYdhXQzuR2XoEB/NYCOSkVdKI/g441BnuBbmI7aMAE7ilgxyaboYOD4RMO9EWiTwhgJksBLtEvUNolRmGvwJG+yDNsXSB4s2aplR3M4Y80BnuGfiQ7m0Q2qP6JJvaLc/VpTKx5lPe9IfpibviMb+4lOXYXyGLRsRPgSTsSpASdW8Av+YQ3Er+NzgIuELdvZMcAZIUaBsgpCA55IZIEeV+NLSC32hskXCTAH9xFRyWkUsgSrhqAJfjpL8fch0dMMIGWMkmYEIn8Az5Wgp5LHlhmAAAAAElFTkSuQmCC"
						/>
					</div>
				</div>
			</div>
		</div>
		<select-tab
			:showType="0"
			@select-tab="SelectTab"
			@cancel-panel="cancelPanel"
		></select-tab>
		<ul class="movie-list">
			<li class="movie-item">
				<div class="top-block">
					<div class="place line-ellipsis">新东方国际影城 （新东方首府店）</div>
					<div class="price-block">
						<span class="origin-price">25</span>
						<span class="discount-price">直降2.50</span>
						<span>起</span>
					</div>
				</div>
				<div class="body-block">
					<div class="location line-ellipsis">
						海城市新东方首府商业中心3楼（新东方售楼处对面）
					</div>
					<div class="distance">2130.2km</div>
				</div>
				<div class="footer-block">
					<div class="hall-type">杜比全景声厅</div>
					<div class="hall-type">巨幕厅</div>
				</div>
			</li>
			<li class="movie-item">
				<div class="top-block">
					<div class="place line-ellipsis">新东方国际影城 （新东方首府店）</div>
					<div class="price-block">
						<span class="origin-price">25</span>
						<span class="discount-price">直降2.50</span>
						<span>起</span>
					</div>
				</div>
				<div class="body-block">
					<div class="location line-ellipsis">
						海城市新东方首府商业中心3楼（新东方售楼处对面）
					</div>
					<div class="distance">2130.2km</div>
				</div>
				<div class="footer-block">
					<div class="hall-type">杜比全景声厅</div>
					<div class="hall-type">巨幕厅</div>
				</div>
			</li>
			<li class="movie-item">
				<div class="top-block">
					<div class="place line-ellipsis">新东方国际影城 （新东方首府店）</div>
					<div class="price-block">
						<span class="origin-price">25</span>
						<span class="discount-price">直降2.50</span>
						<span>起</span>
					</div>
				</div>
				<div class="body-block">
					<div class="location line-ellipsis">
						海城市新东方首府商业中心3楼（新东方售楼处对面）
					</div>
					<div class="distance">2130.2km</div>
				</div>
				<div class="footer-block">
					<div class="hall-type">杜比全景声厅</div>
					<div class="hall-type">巨幕厅</div>
				</div>
			</li>
			<li class="movie-item">
				<div class="top-block">
					<div class="place line-ellipsis">新东方国际影城 （新东方首府店）</div>
					<div class="price-block">
						<span class="origin-price">25</span>
						<span class="discount-price">直降2.50</span>
						<span>起</span>
					</div>
				</div>
				<div class="body-block">
					<div class="location line-ellipsis">
						海城市新东方首府商业中心3楼（新东方售楼处对面）
					</div>
					<div class="distance">2130.2km</div>
				</div>
				<div class="footer-block">
					<div class="hall-type">杜比全景声厅</div>
					<div class="hall-type">巨幕厅</div>
				</div>
			</li>
			<li class="movie-item">
				<div class="top-block">
					<div class="place line-ellipsis">新东方国际影城 （新东方首府店）</div>
					<div class="price-block">
						<span class="origin-price">25</span>
						<span class="discount-price">直降2.50</span>
						<span>起</span>
					</div>
				</div>
				<div class="body-block">
					<div class="location line-ellipsis">
						海城市新东方首府商业中心3楼（新东方售楼处对面）
					</div>
					<div class="distance">2130.2km</div>
				</div>
				<div class="footer-block">
					<div class="hall-type">杜比全景声厅</div>
					<div class="hall-type">巨幕厅</div>
				</div>
			</li>
			<li class="movie-item">
				<div class="top-block">
					<div class="place line-ellipsis">新东方国际影城 （新东方首府店）</div>
					<div class="price-block">
						<span class="origin-price">25</span>
						<span class="discount-price">直降2.50</span>
						<span>起</span>
					</div>
				</div>
				<div class="body-block">
					<div class="location line-ellipsis">
						海城市新东方首府商业中心3楼（新东方售楼处对面）
					</div>
					<div class="distance">2130.2km</div>
				</div>
				<div class="footer-block">
					<div class="hall-type">杜比全景声厅</div>
					<div class="hall-type">巨幕厅</div>
				</div>
			</li>
			<li class="movie-item">
				<div class="top-block">
					<div class="place line-ellipsis">新东方国际影城 （新东方首府店）</div>
					<div class="price-block">
						<span class="origin-price">25</span>
						<span class="discount-price">直降2.50</span>
						<span>起</span>
					</div>
				</div>
				<div class="body-block">
					<div class="location line-ellipsis">
						海城市新东方首府商业中心3楼（新东方售楼处对面）
					</div>
					<div class="distance">2130.2km</div>
				</div>
				<div class="footer-block">
					<div class="hall-type">杜比全景声厅</div>
					<div class="hall-type">巨幕厅</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import SelectTab from '@/components/SelectTab';

export default {
	name: 'Coming',
	data() {
		return {
			headSectionShow: true
		};
	},
	components: {
		SelectTab
	},
	methods: {
		SelectTab() {
			this.headSectionShow = false;
		},
		cancelPanel() {
			this.headSectionShow = true;
		}
	}
};
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.detail-container {
	width: 100%;
	height: 100%;
	overflow: auto;
	.detail-item {
		height: 188px;
		position: relative;
		cursor: pointer;
		.detail-filter {
			position: absolute;
			z-index: -1;
			width: 100%;
			height: 100%;
			background-color: #333;
		}
		.poster-bg {
			width: 100%;
			height: 100%;
			z-index: -1;
			overflow: hidden;
			position: absolute;
			filter: blur(16px);
			background-size: cover;
			background-repeat: no-repeat;
			opacity: 0.55;
		}
		.detail-content {
			height: 188px;
			padding: 19px 15px 19px 15px;
			box-sizing: border-box;
			.flexible(row, center, space-between);
			.left-block {
				width: 110px;
				height: 150px;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.right-block {
				flex: 1;
				height: 100%;
				font-size: 14px;
				color: #666;
				.flexible(row, center, space-between);
				.content {
					flex: 1;
					height: 100%;
					margin-left: 12.5px;
					box-sizing: border-box;
					.name {
						font-size: 20px;
						margin-top: 2px;
						font-weight: 700;
						color: #fff;
						overflow: hidden;
					}
					.score {
						font-size: 18px;
						font-weight: 700;
						color: #fc0;
						margin-top: 11px;
						.snum {
							margin-top: 10px;
							font-size: 12px;
							color: #fff;
							opacity: 0.8;
						}
					}
					.detail-section {
						width: 100%;
						height: 58px;
						margin-top: 5px;
						font-size: 14px;
						.flexible(row, center, space-between);
						.left {
							.flexible(column, flex-start, space-between);
							div {
								margin-top: 3px;
							}
						}
					}
					.ellipsis {
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.common-text {
						margin-top: 8px;
						font-size: 12px;
						color: #fff;
						opacity: 0.8;
					}
				}
				.right-arrow {
					width: 10px;
					height: 17.66px;
					img {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
	.hiden {
		display: none;
	}
	.movie-list {
		.movie-item {
			width: 100%;
			position: relative;
			height: 99px;
			padding: 13px 15px;
			box-sizing: border-box;
			.flexible(column, flex-start, space-between);
			&::after {
				content: ' ';
				position: absolute;
				width: 100%;
				bottom: 0;
				height: 1px;
				background: #ebedf0;
			}
			.top-block {
				.flexible(row, center, flex-start);
				.place {
					width: 225.33px;
					color: #000;
					font-size: 16px;
				}
				.price-block {
					font-size: 11px;
					color: #fc4b5d;
					.flexible(row, flex-end, flex-start);
					.origin-price {
						color: #ff9934;
						font-size: 14px;
						text-decoration: line-through;
					}
					.discount-price {
						margin-left: 8px;
						margin-right: 3px;
						font-weight: bold;
						font-size: 16px;
					}
				}
			}
			.body-block {
				width: 100%;
				margin: 6px 0 0 0;
				font-size: 13px;
				color: #666;
				.flexible(row, center, space-between);
				box-sizing: border-box;
				.location {
					flex: 1;
				}
				.distance {
					display: inline-block;
					width: 57.11px;
					margin-left: 5px;
					text-align: right;
				}
			}
			.footer-block {
				height: 17px;
				line-height: 17px;
				margin-top: 4px;
				margin-bottom: 4px;
				overflow: hidden;
				font-size: 0;
				-ms-flex-negative: 0;
				flex-shrink: 0;
				.hall-type {
					position: relative;
					display: inline-block;
					padding: 0 3px;
					height: 15px;
					line-height: 15px;
					border-radius: 2px;
					font-size: 12px;
					margin-right: 4px;
					color: #589daf;
					border: 1px solid #589daf;
				}
			}
			.line-ellipsis {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
}
</style>
