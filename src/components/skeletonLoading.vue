<template>
    <div class="vue-skeleton-loading">
        <div class="skeleton-bac-animation"></div>
        <div class="skeleton-container">

        </div>
    </div>
</template>

<script>
    import circleSkeleton from './basic/circleSkeleton';
    import squareSkeleton from './basic/squareSkeleton';
    export default {
        data() {
            return {};
        },
        components: {
            circleSkeleton,
            squareSkeleton
        }
    }
</script>

<style lang="less">
    .skeleton-bac-animation {
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>