<template>
    <div
         class="square"
         :style="{
            'backgroundColor': backColor,
            'width': width,
			'height': height
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
            width: {
                type: String,
                default: "100%"
            },
            height: {
                type: String,
                default: "16px"
            }
        }
    }
</script>

<style lang="less">

</style>