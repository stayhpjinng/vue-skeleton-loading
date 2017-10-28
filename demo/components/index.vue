<template>
	<div class="demos">
		<p class="title">vue-skeleton-loading demo 列表</p>
		<ul class="demo-list">
			<li v-for="demo in demoList" @click="handleClick(demo.url)">{{ demo.name }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				demoList: [{
				    url: '/page',
					name: '文章'
				}, {
				    url: '/list1',
					name: '列表一'
				}]
			};
		},
		methods: {
			handleClick(url) {
			    this.$router.push(url);
			}
		},
		components: {
		
		}
	}
</script>

<style lang="less">
	.demos {
		width: 100%;
		.title {
			display: block;
			width: 100%;
			text-align: center;
			font-size: 16px;
		}
		.demo-list {
			width: 100%;
			list-style: none;
			padding: 0;
			margin: 0;
			font-size: 16px;
			li {
				width: 100%;
				padding-left: 30px;
				line-height: 50px;
				border-bottom: 1px solid #eee;
				&:nth-child(1) {
					border-top: 1px solid #eee;
				}
			}
		}
	}
</style>