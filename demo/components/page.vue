<template>
    <div class="page">
        <skeleton-loading>
            <row :gutter="{top: '10px', bottom: '10px'}">
                <column :span="24">
                    <square-skeleton height="26px"></square-skeleton>
                </column>
            </row>
            <row :gutter="{top: '0', bottom: '15px'}">
                <column :span="24">
                    <square-skeleton height="26px"></square-skeleton>
                </column>
            </row>
            <row>
                <column :span="4">
                    <circle-skeleton></circle-skeleton>
                </column>
                <column :span="20" :gutter="20">
                    <row :gutter="{top: '10px', bottom: '10px'}">
                        <square-skeleton width="70px" height="15px"></square-skeleton>
                    </row>
                    <row :gutter="{bottom: '10px'}">
                        <square-skeleton width="100px" height="15px"></square-skeleton>
                    </row>
                </column>
            </row>
            <row :gutter="{top: '20px', bottom: '10px'}">
                <square-skeleton></square-skeleton>
            </row>
            <row :gutter="{bottom: '10px'}">
                <square-skeleton></square-skeleton>
            </row>
            <row :gutter="{bottom: '10px'}">
                <square-skeleton></square-skeleton>
            </row>
            <row :gutter="{bottom: '10px'}">
                <square-skeleton></square-skeleton>
            </row>
            <row :gutter="{bottom: '10px'}">
                <square-skeleton height="200px"></square-skeleton>
            </row>
        </skeleton-loading>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="less">
    .page {
        padding: 15px;
    }
</style>