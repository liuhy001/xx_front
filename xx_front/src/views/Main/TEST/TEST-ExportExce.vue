<template>
    <div>
        <el-button  size="small" type="success" @click="download()">导出坐席信息</el-button>
    </div>
</template>

<script>
    export default {
        name: "TEST-ExportExce",
        methods: {
            download: function () {
                // this.$axios.get(this.HTTP+'/exportExcel')
                window.location=this.HTTP+'/exportExcel';
            }
        }
    }
</script>

<style scoped>

</style>