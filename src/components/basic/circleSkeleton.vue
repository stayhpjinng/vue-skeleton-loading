<template>
	<div 
		class="circle"
		:style="{
			'backgroundColor': backColor,
			'width': radius,
			'height': radius
		}"
	>
	</div>
</template>

<script>
	export default {
        props: {
            backColor: {
                type: String,
                default: '#e7e7e7'
            },
            radius: {
                type: String,
                default: '40px'
            }
        }
	}
</script>

<style>
	.circle {
        border-radius: 50%;
	}
</style>