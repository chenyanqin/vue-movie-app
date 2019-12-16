<template>
	<div class="movie-container">
		<top-nav :activeTab="1"></top-nav>
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

<style stylus="less" scoped></style>
