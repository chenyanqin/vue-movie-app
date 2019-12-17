<template>
	<div class="cinema-container">
		<div class="search-wrap">
			<div class="city-entry">
				<span class="city-name">鞍山</span><i class="down-arrow"></i>
			</div>
			<div class="search-entry search-input bg-white" @click="handleToSearch">
				<img
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAABRZJREFUWAntl0toXFUYxzuTqYwzapoq2NZSqCVYjDKIIQ550khdlNA0iqkbsVDcuNSdrWAqiqHgwpWCCyGFtNpCaRGfJEyePgZqkMT4yEZLY9WoSTsKzkzG3/9yLkyTuffcO4EuZA588535Hv/vf8899zw2baq12gjURqA2An4jEPFzBvWVSqXI9PT0fcVicSc521dXVxN1dXWLkUhkEf1dOp1eCYpli9sQ4YmJiX2QPYwcRLZXKgbpPPZR5Hw0Gj3V3t5+rVJcUFtVhCHazCgOQrJ7bSEIitA/yF34o+V+fL/y/5VEIvF2c3OzHiR0C0UYApHx8fEBqhxXX9UgMYc6y+hdbGhomG9qarouO/7Y5OTkDvSjSC+mA+jN8tEuIb1dXV0/O/9C/AQmnM1mE7lcbgjsx4UP0QVIvtjW1vY+/ZKtJuT3MMdfJa4f4qp7NRaL9ZE/bcst99/wysod5X0VWEN2mGIPMh/fq0RW8TxgfTkGxBY6OzufIv4J7Dnk7kKh8OHU1NTe8jhbP9AIj42NnYDESwKj4GsUPuYHnMlkzuDvR0QsQ85QR0fHGbTzJphWKfBGkK34f+BNPYL/T/rWZh1hfWCgHBcSBYdtZE3cKLGz9EVQc3cYkl8h98oPuRlsT9ItII3ISSRQsxI2qwH1IwtMg6NBUHmot5AHksnkVvJ6lAvBh8H6krd1vzD44EYY2ZfVx37Eteu/X/MlbNbZbgHoA2ttbdVyFbhp6YL4B/X19SlIv0vinciFmZmZpEDYVN5AXVYXGUCszZcwo3JYCBSb02pgRfMISKVSOabBs7izYO5ZXl5+XqEaALAH1cfe4z6I/ns1T8IARJCDJvEswNaly6uI7OQXkGfoFsF9Tvgm/pzBjq+srDxmbJ7Kk7DOBoA62y3T4aInQggH02MOcpOkbOMDfEip2Bapk1UfvU/ar3kSNgcZJ1c7mB9IGB+kvjbxu908HsLBx3ePa/PSnoRJ2KEkwK65260XSBg7eNrZisjvZXmLpu/ULLOv63oSZqm51USHWhnWVVhjYAqcZrm7A51xXTzE36bvrB6uvZL2JKzzrEnQqStWKblaG8udS9CBAH+bOhDXac63eRIm2SEMWFSnLl+UDTqpsctA/GKD8iSsmwKknTMr06PbBlStf3Z29hbqdJj8z204noTNtWbUAByyAVXrX1pa0q3lduVD/BMbjidhk3je6AM6z9rAqvFD9gWT9w274fc2DF/CbBineOrfAN1sDt82vFB+jqGaavuVxBR8PUiyL2FzYTxhgPrZnfqCgAaJ4eCuk9w7Jnaes4rO0NbmS1jZujCiLjHKET6+IUinrKiWAGHl8/nT6N2QzjO6T6O1mViblbC53faCdBVJUmTEvEoruFcAD92Kz5kK4L3Jm3TOEl7x5XYrYQXrdqsLI91lCuha8zFFj/Fa3d1QYYEbWN8you6V6Ki51QTKd494gYJ1YeRVXiC40SRcpvAg/XM6dQUCMUE8sG4gn/F3C/IX02J/kJEORVi1KNSAOkmxI2jdFLR+MvClLHoefQWty6feRCP/0/y/Ho/H0y0tLTfsZBpZVp9PiQtMOjRhwJ1m7mADEOrBEDfmigrC/zINmrhh/Lg2ICzpqgm7hXWt0U0B4tqxdmLXof82SP6BvoJ8AdmPIOt5pq5AOsX0+IncdW3DhNchVmkoJ83D9vFNuLtslYg3IQ3Su5hqh3hTzrdxE0rWStRGoDYC/7sR+A83UCtxLkrxGgAAAABJRU5ErkJggg=="
				/><span>搜影院</span>
			</div>
		</div>
		<ul class="tab-list">
			<li class="tab-item">全城<i class="down-arrow"></i></li>
			<li class="tab-item">品牌<i class="down-arrow"></i></li>
			<li class="tab-item">特色<i class="down-arrow"></i></li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Cinema',
	methods: {
		handleToSearch() {
			this.$router.push('/search');
		}
	}
};
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.cinema-container {
	width: 100%;
	height: 100%;
	padding-bottom: 48px;
	box-sizing: border-box;
	.search-wrap {
		border-bottom: 1px solid #e6e6e6;
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
	.down-arrow {
		margin-right: 5px;
		width: 0;
		height: 0;
		border: 4px solid #b0b0b0;
		border-left-color: transparent;
		border-right-color: transparent;
		border-bottom-color: transparent;
		display: inline-block;
		margin-left: 4px;
		margin-top: 5px;
	}
	.tab-list {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #ebedf0;
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
		}
	}
}
</style>
