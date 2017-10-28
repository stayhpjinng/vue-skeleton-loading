<template>
    <div class="list1">
        <skeleton-loading>
            <row
                    v-for="i in 6"
                    :key="i"
                    :gutter="{top: '10px', bottom: '10px'}"
            >
                <column :span="3" :gutter="10">
                    <circle-skeleton></circle-skeleton>
                </column>
                <column :span="20" :gutter="10">
                    <row :gutter="{top: '-2px', bottom: '15px'}">
                        <square-skeleton width="250px" height="15px"></square-skeleton>
                    </row>
                    <row :gutter="{bottom: '15px'}">
                        <square-skeleton width="100px" height="15px"></square-skeleton>
                    </row>
                </column>
            </row>
        </skeleton-loading>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="less">
    .list1 {
    }
</style>