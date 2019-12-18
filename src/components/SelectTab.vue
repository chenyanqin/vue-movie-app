<template>
	<div class="select-tab" @click="handlePanel($event)">
		<div style="pointer-events: auto;" v-if="showType === 0">
			<ul class="time-tab">
				<li
					:class="[timeActiveIndex === index ? 'active' : '', 'time-item']"
					v-for="(item, index) in timeLine"
					:key="index"
					@click="handleToTime(index)"
				>
					{{ item }}
				</li>
			</ul>
		</div>
		<div class="search-wrap" v-if="showType === 1">
			<div class="city-entry">
				<span class="city-name">鞍山</span><i class="down-arrow base-arrow"></i>
			</div>
			<div class="search-entry search-input bg-white" @click="handleToSearch">
				<img
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAABRZJREFUWAntl0toXFUYxzuTqYwzapoq2NZSqCVYjDKIIQ550khdlNA0iqkbsVDcuNSdrWAqiqHgwpWCCyGFtNpCaRGfJEyePgZqkMT4yEZLY9WoSTsKzkzG3/9yLkyTuffcO4EuZA588535Hv/vf8899zw2baq12gjURqA2An4jEPFzBvWVSqXI9PT0fcVicSc521dXVxN1dXWLkUhkEf1dOp1eCYpli9sQ4YmJiX2QPYwcRLZXKgbpPPZR5Hw0Gj3V3t5+rVJcUFtVhCHazCgOQrJ7bSEIitA/yF34o+V+fL/y/5VEIvF2c3OzHiR0C0UYApHx8fEBqhxXX9UgMYc6y+hdbGhomG9qarouO/7Y5OTkDvSjSC+mA+jN8tEuIb1dXV0/O/9C/AQmnM1mE7lcbgjsx4UP0QVIvtjW1vY+/ZKtJuT3MMdfJa4f4qp7NRaL9ZE/bcst99/wysod5X0VWEN2mGIPMh/fq0RW8TxgfTkGxBY6OzufIv4J7Dnk7kKh8OHU1NTe8jhbP9AIj42NnYDESwKj4GsUPuYHnMlkzuDvR0QsQ85QR0fHGbTzJphWKfBGkK34f+BNPYL/T/rWZh1hfWCgHBcSBYdtZE3cKLGz9EVQc3cYkl8h98oPuRlsT9ItII3ISSRQsxI2qwH1IwtMg6NBUHmot5AHksnkVvJ6lAvBh8H6krd1vzD44EYY2ZfVx37Eteu/X/MlbNbZbgHoA2ttbdVyFbhp6YL4B/X19SlIv0vinciFmZmZpEDYVN5AXVYXGUCszZcwo3JYCBSb02pgRfMISKVSOabBs7izYO5ZXl5+XqEaALAH1cfe4z6I/ns1T8IARJCDJvEswNaly6uI7OQXkGfoFsF9Tvgm/pzBjq+srDxmbJ7Kk7DOBoA62y3T4aInQggH02MOcpOkbOMDfEip2Bapk1UfvU/ar3kSNgcZJ1c7mB9IGB+kvjbxu908HsLBx3ePa/PSnoRJ2KEkwK65260XSBg7eNrZisjvZXmLpu/ULLOv63oSZqm51USHWhnWVVhjYAqcZrm7A51xXTzE36bvrB6uvZL2JKzzrEnQqStWKblaG8udS9CBAH+bOhDXac63eRIm2SEMWFSnLl+UDTqpsctA/GKD8iSsmwKknTMr06PbBlStf3Z29hbqdJj8z204noTNtWbUAByyAVXrX1pa0q3lduVD/BMbjidhk3je6AM6z9rAqvFD9gWT9w274fc2DF/CbBineOrfAN1sDt82vFB+jqGaavuVxBR8PUiyL2FzYTxhgPrZnfqCgAaJ4eCuk9w7Jnaes4rO0NbmS1jZujCiLjHKET6+IUinrKiWAGHl8/nT6N2QzjO6T6O1mViblbC53faCdBVJUmTEvEoruFcAD92Kz5kK4L3Jm3TOEl7x5XYrYQXrdqsLI91lCuha8zFFj/Fa3d1QYYEbWN8you6V6Ki51QTKd494gYJ1YeRVXiC40SRcpvAg/XM6dQUCMUE8sG4gn/F3C/IX02J/kJEORVi1KNSAOkmxI2jdFLR+MvClLHoefQWty6feRCP/0/y/Ho/H0y0tLTfsZBpZVp9PiQtMOjRhwJ1m7mADEOrBEDfmigrC/zINmrhh/Lg2ICzpqgm7hXWt0U0B4tqxdmLXof82SP6BvoJ8AdmPIOt5pq5AOsX0+IncdW3DhNchVmkoJ83D9vFNuLtslYg3IQ3Su5hqh3hTzrdxE0rWStRGoDYC/7sR+A83UCtxLkrxGgAAAABJRU5ErkJggg=="
				/><span>搜影院</span>
			</div>
		</div>
		<ul class="tab-list">
			<li
				:class="[
					categoryActiveIndex === index ? 'categoryActive' : '',
					'tab-item'
				]"
				v-for="(item, index) in categoryList"
				:key="index"
				@click.stop="handleToSelect(index)"
			>
				{{ item
				}}<i
					:class="[
						categoryActiveIndex === index ? 'top-arrow' : 'down-arrow',
						'base-arrow'
					]"
				></i>
			</li>
		</ul>
		<div class="show-wrap" :style="{ display: panelShow ? 'block' : 'none' }">
			<div class="blacker"></div>
			<div id="myPanel" class="panel-wrap">
				<div class="city-select" v-if="categoryActiveIndex === 0">
					<ul class="tab">
						<li
							v-for="(item, index) in placeList"
							:key="index"
							:class="[placeIndex === index ? 'chosen' : '', 'item']"
							@click.stop="changePlace(index)"
						>
							{{ item }}
						</li>
					</ul>
					<div class="city-wrap">
						<div class="left-nav"></div>
						<div class="right-content"></div>
					</div>
				</div>
				<div class="brand-select" v-if="categoryActiveIndex === 1">
					this is brand
				</div>
				<div class="characte-select" v-if="categoryActiveIndex === 2">
					<div class="characte-content"></div>
					<div class="characte-btn">
						<span class="btn cancel-btn">重置</span
						><span class="btn confirm-btn">确定</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SelectTab',
	props: {
		showType: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			popupShow: false,
			panelShow: false,
			categoryActiveIndex: null,
			placeIndex: 0,
			timeLine: [
				'今天12月18号',
				'明天12月19号',
				'后天12月20号',
				'周六12月21号',
				'周天12月22号'
			],
			categoryList: ['全城', '品牌', '特色'],
			placeList: ['商区', '地铁站'],
			timeActiveIndex: 0
		};
	},
	methods: {
		handleToSelect(index) {
			this.categoryActiveIndex = index;
			this.panelShow = true;
			this.$emit('select-tab');
		},
		changePlace(index) {
			this.placeIndex = index;
		},
		handlePanel(el) {
			let myPanel = document.getElementById('myPanel');
			this.panelShow = myPanel.contains(el.target);
			this.$emit('cancel-panel');
		},
		handleToTime(index) {
			this.timeActiveIndex = index;
		},
		handleToSearch() {
			this.$router.push('/search');
		}
	}
};
</script>

<style lang="less" scoped>
@import '../style/mixin.less';

.select-tab {
	// height: 100%;
	// width: 100%;
	.time-tab {
		padding: 0;
		margin: 0;
		white-space: nowrap;
		overflow-x: scroll;
		height: 45px;
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
	.search-wrap {
		height: 44px;
		background: #f5f5f5;
		.flexible(row, center, flex-start);
		.city-entry {
			padding-left: 15px;
			font-size: 15px;
			color: #666;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			align-items: center;
		}
		.search-input {
			display: -ms-flexbox;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 28px;
			font-size: 13px;
			color: #b2b2b2;
			margin-left: 18px;
			border: 0.5px solid #e6e6e6;
			border-radius: 5px;
			margin-right: 15px;
			flex-grow: 1;
			img {
				width: 20px;
				height: 20px;
				margin-left: 3px;
				margin-right: 4px;
			}
		}
		.bg-white {
			background: white;
		}
	}
	.tab-list {
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: #fff;
		border-top: 0.02667rem solid #ebedf0;
		border-bottom: 1px solid #ebedf0;
		.flexible(row, center, space-between);
		.tab-item {
			position: relative;
			flex: 1;
			font-size: 14px;
			color: #666;
			text-align: center;
			&::before {
				content: '';
				display: block;
				position: absolute;
				height: 20px;
				top: 10px;
				left: 0;
				border-left: 1px solid #e8e8e8;
			}
			&.categoryActive {
				color: #ff9934;
			}
		}
	}
	.show-wrap {
		.panel-wrap {
			position: relative;
			z-index: 100;
			.tab {
				display: flex;
				width: 100%;
				height: 44px;
				line-height: 44px;
				font-size: 15px;
				background: #fff;
				.item {
					width: 50%;
					color: #2c3e50;
					text-align: center;
					border-bottom: 2px solid transparent;
					&.chosen {
						color: #ff9934;
						border-bottom: 2px solid #ff9934;
					}
				}
			}
			.city-select {
				width: 100%;
				height: 427.59px;
				.city-wrap {
					display: flex;
					.left-nav {
						width: 131.25px;
						height: 383.59px;
						background: #fff;
					}
					.right-content {
						flex: 1;
						background: #f5f5f5;
					}
				}
			}
			.brand-select {
				width: 100%;
				height: 328.8px;
				background: #fff;
			}
			.characte-select {
				width: 100%;
				height: 341px;
				background: #fff;
				.characte-content {
					height: 328.8px;
					min-height: 150px;
					max-height: 270px;
					overflow: scroll;
				}
				.characte-btn {
					height: 60px;
					width: 100%;
					border-top: 1px solid #e5e5e5;
					margin-top: 10px;
					background: #fafafa;
					display: flex;
					justify-content: space-between;
					.btn {
						display: inline-block;
						height: 34px;
						width: 21.3%;
						margin: 13px 11px;
						border: 1px solid #e5e5e5;
						border-radius: 6px;
						text-align: center;
						line-height: 34px;
						font-size: 14px;
					}
					.confirm-btn {
						background: #ff9934;
						border: 1px solid #ff9934;
						color: #fff;
					}
				}
			}
		}
	}
	.blacker {
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
		z-index: 1;
	}
	.base-arrow {
		display: inline-block;
		margin-right: 5px;
		width: 0;
		height: 0;
		margin-left: 4px;
	}
	.down-arrow {
		margin-top: 5px;
		border: 4px solid #b0b0b0;
		border-left-color: transparent;
		border-right-color: transparent;
		border-bottom-color: transparent;
	}
	.top-arrow {
		margin-top: -5px;
		border: 4px solid #ff9934;
		border-left-color: transparent;
		border-right-color: transparent;
		border-top-color: transparent;
		vertical-align: 3px;
	}
}
::-webkit-scrollbar {
	display: none;
}
</style>
