<template>
	<div class="index-bar">
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
		<van-index-bar :sticky="false">
			<van-index-anchor index="A" />
			<van-cell title="文本1" @click="handleToSelect('文本1')" />
			<van-cell title="文本" @click="handleToSelect('文本2')" />
			<van-cell title="文本" @click="handleToSelect('文本3')" />
			<van-index-anchor index="B" />
			<van-cell title="文本1" @click="handleToSelect('文本1')" />
			<van-cell title="文本" @click="handleToSelect('文本2')" />
			<van-cell title="文本" @click="handleToSelect('文本3')" />
		</van-index-bar>
	</div>
</template>
<script>
export default {
	name: 'Location',
	methods: {
		handleToSelect(data) {
			console.log('this is data====>', data);
			this.$router.go(-1);
		}
	}
};
</script>
<style lang="less" scoped>
@import '../../style/mixin.less';

.index-bar {
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
}
</style>
