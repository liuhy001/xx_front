<template>
    <div>
        <p>根据customer表mobile字段添加省市字段，并返回添加失败的数据</p>
        <el-button  size="small" type="success" @click="download()" v-loading.fullscreen.lock="fullscreenLoading">添加省市区信息</el-button>
        <el-divider></el-divider>
    </div>
</template>

<script>
    export default {
        name: "Customer",
        data() {
            return {
                fullscreenLoading: false
            }
        },
        methods: {
            download: function () {
                this.fullscreenLoading = true;
                const _this = this;
                this.$axios.get(this.HTTP+'/BDChangeData/updateCustomerProvince').then((r) => {
                    _this.fullscreenLoading = false;
                    if (r.data.code === 200) {
                        this.$message({
                            message: r.data.message,
                            type: 'success'
                        });

                    } else {
                        this.$message({
                            message: '系统错误，请联系管理员',
                            type: 'error'
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>