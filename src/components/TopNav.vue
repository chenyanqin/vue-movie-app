<template>
	<div class="nav-container">
		<div class="city-container">
			<span class="city">定位中</span>
			<i class="down-arrow"></i>
		</div>
		<div class="top-menu">
			<van-tabs v-model="activeTab" title-active-color="#ff9934">
				<van-tab title="正在热映" to="/movie"></van-tab>
				<van-tab title="即将上映" to="/coming"></van-tab>
			</van-tabs>
		</div>
		<div class="search-block" @click="handleToSearch">
			<img
				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAABRZJREFUWAntl0toXFUYxzuTqYwzapoq2NZSqCVYjDKIIQ550khdlNA0iqkbsVDcuNSdrWAqiqHgwpWCCyGFtNpCaRGfJEyePgZqkMT4yEZLY9WoSTsKzkzG3/9yLkyTuffcO4EuZA588535Hv/vf8899zw2baq12gjURqA2An4jEPFzBvWVSqXI9PT0fcVicSc521dXVxN1dXWLkUhkEf1dOp1eCYpli9sQ4YmJiX2QPYwcRLZXKgbpPPZR5Hw0Gj3V3t5+rVJcUFtVhCHazCgOQrJ7bSEIitA/yF34o+V+fL/y/5VEIvF2c3OzHiR0C0UYApHx8fEBqhxXX9UgMYc6y+hdbGhomG9qarouO/7Y5OTkDvSjSC+mA+jN8tEuIb1dXV0/O/9C/AQmnM1mE7lcbgjsx4UP0QVIvtjW1vY+/ZKtJuT3MMdfJa4f4qp7NRaL9ZE/bcst99/wysod5X0VWEN2mGIPMh/fq0RW8TxgfTkGxBY6OzufIv4J7Dnk7kKh8OHU1NTe8jhbP9AIj42NnYDESwKj4GsUPuYHnMlkzuDvR0QsQ85QR0fHGbTzJphWKfBGkK34f+BNPYL/T/rWZh1hfWCgHBcSBYdtZE3cKLGz9EVQc3cYkl8h98oPuRlsT9ItII3ISSRQsxI2qwH1IwtMg6NBUHmot5AHksnkVvJ6lAvBh8H6krd1vzD44EYY2ZfVx37Eteu/X/MlbNbZbgHoA2ttbdVyFbhp6YL4B/X19SlIv0vinciFmZmZpEDYVN5AXVYXGUCszZcwo3JYCBSb02pgRfMISKVSOabBs7izYO5ZXl5+XqEaALAH1cfe4z6I/ns1T8IARJCDJvEswNaly6uI7OQXkGfoFsF9Tvgm/pzBjq+srDxmbJ7Kk7DOBoA62y3T4aInQggH02MOcpOkbOMDfEip2Bapk1UfvU/ar3kSNgcZJ1c7mB9IGB+kvjbxu908HsLBx3ePa/PSnoRJ2KEkwK65260XSBg7eNrZisjvZXmLpu/ULLOv63oSZqm51USHWhnWVVhjYAqcZrm7A51xXTzE36bvrB6uvZL2JKzzrEnQqStWKblaG8udS9CBAH+bOhDXac63eRIm2SEMWFSnLl+UDTqpsctA/GKD8iSsmwKknTMr06PbBlStf3Z29hbqdJj8z204noTNtWbUAByyAVXrX1pa0q3lduVD/BMbjidhk3je6AM6z9rAqvFD9gWT9w274fc2DF/CbBineOrfAN1sDt82vFB+jqGaavuVxBR8PUiyL2FzYTxhgPrZnfqCgAaJ4eCuk9w7Jnaes4rO0NbmS1jZujCiLjHKET6+IUinrKiWAGHl8/nT6N2QzjO6T6O1mViblbC53faCdBVJUmTEvEoruFcAD92Kz5kK4L3Jm3TOEl7x5XYrYQXrdqsLI91lCuha8zFFj/Fa3d1QYYEbWN8you6V6Ki51QTKd494gYJ1YeRVXiC40SRcpvAg/XM6dQUCMUE8sG4gn/F3C/IX02J/kJEORVi1KNSAOkmxI2jdFLR+MvClLHoefQWty6feRCP/0/y/Ho/H0y0tLTfsZBpZVp9PiQtMOjRhwJ1m7mADEOrBEDfmigrC/zINmrhh/Lg2ICzpqgm7hXWt0U0B4tqxdmLXof82SP6BvoJ8AdmPIOt5pq5AOsX0+IncdW3DhNchVmkoJ83D9vFNuLtslYg3IQ3Su5hqh3hTzrdxE0rWStRGoDYC/7sR+A83UCtxLkrxGgAAAABJRU5ErkJggg=="
				alt=""
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TopNav',
	props: {
		activeTab: {
			type: Number,
			default: 0
		}
	},
	methods: {
		handleToSearch() {
			this.$router.push('/search');
		}
	}
	// data() {
	// 	return {
	// 		activeTab: 0
	// 	};
	// }
};
</script>
<style>
.van-tabs__line {
	background-color: #ff9934 !important;
}
</style>

<style lang="less" scoped>
@import '../style/mixin.less';

.nav-container {
	width: 100%;
	height: 44px;
	flex: 0 0 44px;
	border-bottom: 1px solid #e6e6e6;
	.flexible(row, center, space-between);
	.city-container {
		max-width: 100px;
		margin: auto 0;
		text-align: left;
		padding-left: 10px;
		.city {
			font-size: 15px;
			color: #666;
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
	}
	.top-menu {
		width: 195px;
	}
	.search-block {
		display: flex;
		align-items: center;
		width: 50px;
		height: 100%;
		img {
			width: 25px;
			height: 25px;
		}
	}
}
</style>
