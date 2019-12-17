<template>
	<div class="search-container">
		<div class="search-header">
			<div class="input-wrapper">
				<img
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAABRZJREFUWAntl0toXFUYxzuTqYwzapoq2NZSqCVYjDKIIQ550khdlNA0iqkbsVDcuNSdrWAqiqHgwpWCCyGFtNpCaRGfJEyePgZqkMT4yEZLY9WoSTsKzkzG3/9yLkyTuffcO4EuZA588535Hv/vf8899zw2baq12gjURqA2An4jEPFzBvWVSqXI9PT0fcVicSc521dXVxN1dXWLkUhkEf1dOp1eCYpli9sQ4YmJiX2QPYwcRLZXKgbpPPZR5Hw0Gj3V3t5+rVJcUFtVhCHazCgOQrJ7bSEIitA/yF34o+V+fL/y/5VEIvF2c3OzHiR0C0UYApHx8fEBqhxXX9UgMYc6y+hdbGhomG9qarouO/7Y5OTkDvSjSC+mA+jN8tEuIb1dXV0/O/9C/AQmnM1mE7lcbgjsx4UP0QVIvtjW1vY+/ZKtJuT3MMdfJa4f4qp7NRaL9ZE/bcst99/wysod5X0VWEN2mGIPMh/fq0RW8TxgfTkGxBY6OzufIv4J7Dnk7kKh8OHU1NTe8jhbP9AIj42NnYDESwKj4GsUPuYHnMlkzuDvR0QsQ85QR0fHGbTzJphWKfBGkK34f+BNPYL/T/rWZh1hfWCgHBcSBYdtZE3cKLGz9EVQc3cYkl8h98oPuRlsT9ItII3ISSRQsxI2qwH1IwtMg6NBUHmot5AHksnkVvJ6lAvBh8H6krd1vzD44EYY2ZfVx37Eteu/X/MlbNbZbgHoA2ttbdVyFbhp6YL4B/X19SlIv0vinciFmZmZpEDYVN5AXVYXGUCszZcwo3JYCBSb02pgRfMISKVSOabBs7izYO5ZXl5+XqEaALAH1cfe4z6I/ns1T8IARJCDJvEswNaly6uI7OQXkGfoFsF9Tvgm/pzBjq+srDxmbJ7Kk7DOBoA62y3T4aInQggH02MOcpOkbOMDfEip2Bapk1UfvU/ar3kSNgcZJ1c7mB9IGB+kvjbxu908HsLBx3ePa/PSnoRJ2KEkwK65260XSBg7eNrZisjvZXmLpu/ULLOv63oSZqm51USHWhnWVVhjYAqcZrm7A51xXTzE36bvrB6uvZL2JKzzrEnQqStWKblaG8udS9CBAH+bOhDXac63eRIm2SEMWFSnLl+UDTqpsctA/GKD8iSsmwKknTMr06PbBlStf3Z29hbqdJj8z204noTNtWbUAByyAVXrX1pa0q3lduVD/BMbjidhk3je6AM6z9rAqvFD9gWT9w274fc2DF/CbBineOrfAN1sDt82vFB+jqGaavuVxBR8PUiyL2FzYTxhgPrZnfqCgAaJ4eCuk9w7Jnaes4rO0NbmS1jZujCiLjHKET6+IUinrKiWAGHl8/nT6N2QzjO6T6O1mViblbC53faCdBVJUmTEvEoruFcAD92Kz5kK4L3Jm3TOEl7x5XYrYQXrdqsLI91lCuha8zFFj/Fa3d1QYYEbWN8you6V6Ki51QTKd494gYJ1YeRVXiC40SRcpvAg/XM6dQUCMUE8sG4gn/F3C/IX02J/kJEORVi1KNSAOkmxI2jdFLR+MvClLHoefQWty6feRCP/0/y/Ho/H0y0tLTfsZBpZVp9PiQtMOjRhwJ1m7mADEOrBEDfmigrC/zINmrhh/Lg2ICzpqgm7hXWt0U0B4tqxdmLXof82SP6BvoJ8AdmPIOt5pq5AOsX0+IncdW3DhNchVmkoJ83D9vFNuLtslYg3IQ3Su5hqh3hTzrdxE0rWStRGoDYC/7sR+A83UCtxLkrxGgAAAABJRU5ErkJggg=="
					alt=""
					class="search-icon"
				/><input type="text" placeholder="搜电影" class="search-input" /><img
					src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/close.png"
					alt=""
					class="del-input"
				/>
			</div>
			<div class="cancel">取消</div>
		</div>
		<div class="search-result">
			<h3>电影</h3>
			<div class="movie-list">
				<div class="movie-item">
					<div class="left-block">
						<img
							src="http://p1.meituan.net/128.180/movie/967b253953bc7e660cfadbf9d78f67b62852693.jpg"
							alt=""
						/>
					</div>
					<div class="right-block">
						<div class="content">
							<div class="name-score">
								<div class="name">
									<span style="font-weight: bold;">误杀</span>
									<span class="version v3d imax"></span>
								</div>
								<div class="score"><span class="num">9.5</span>分</div>
							</div>
							<div class="detail-section">
								<div class="left">
									<div class="common-text ename">
										Sheep Without a Shepherd
									</div>
									<div class="common-text catogary">剧情,犯罪</div>
									<div class="common-text date">
										2019-12-13
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

<style lang="less" scoped>
@import '../../style/mixin.less';

.search-container {
	width: 100%;
	height: 100%;
	.search-header {
		display: flex;
		align-items: center;
		height: 46px;
		padding: 8px 0 8px 10px;
		background: #fff;
		z-index: 1;
		box-sizing: border-box;
		font-size: 13px;
		.input-wrapper {
			display: flex;
			align-items: center;
			height: 28px;
			padding: 0 10px;
			border-radius: 20px;
			background-color: #f4f4f4;
			flex-grow: 1;
			border: none;
			.search-icon {
				width: 20px;
				height: 20px;
				margin-right: 6px;
				vertical-align: middle;
			}
			.search-input {
				flex: 1;
				height: 100%;
				background: #f4f4f4;
			}
			.del-input {
				width: 14px;
				height: 14px;
				padding-left: 10px;
			}
		}
		.cancel {
			height: 30px;
			line-height: 30px;
			padding: 0 10px;
			font-size: 16px;
			color: #ff9934;
		}
	}
	.search-result {
		h3 {
			font-size: 15px;
			color: #999;
			padding: 9px 15px;
		}
		.movie-list {
			.movie-item {
				width: 100%;
				min-height: 110px;
				padding: 12px;
				position: relative;
				box-sizing: border-box;
				.flexible(row, flex-start, flex-start);
				.left-block {
					width: 64px;
					height: 90px;
					img {
						width: 100%;
						height: 100%;
					}
				}
				.right-block {
					flex: 1;
					font-size: 14px;
					color: #666;
					.flexible(row, center, space-between);
					.content {
						flex: 1;
						height: 100%;
						margin-left: 10px;
						padding: 6px 0;
						box-sizing: border-box;
						.flexible(column, flex-start, space-between);
						.name-score {
							width: 100%;
							.flexible(row, center, space-between);
							.name {
								color: #222;
								font-size: 17px;
								font-weight: 700;
							}
							.score {
								color: #fa0;
								font-size: 10px;
								.num {
									font-size: 16px;
								}
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
					.version {
						background-size: contain;
						background-repeat: no-repeat;
						height: 14px;
						margin-left: 5px;
						display: inline-block;
					}
					.version.v3d.imax {
						width: 43px;
						background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAcCAYAAAD7lUj9AAAAAXNSR…pZ7dAhhqXuv1bz4Acb/GsYUfmFfmI0dGDh/rBU6SdGfwHhesSi+VnXOAAAAABJRU5ErkJggg==);
					}
				}
			}
		}
	}
}
</style>
