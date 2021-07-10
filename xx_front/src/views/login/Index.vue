<template>
    <div>
        判断跳转页面
    </div>
</template>

<script>

    export default {
        name: "index",
        beforeCreate() {
            //接收URL里的参数
            const d = this.$utils.getUrlKey("pid")
            if ('BD' === d){
                //BD项目页面
                //给标记参数复制true，再路由里通过跳转验证
                this.$route.meta.status = true;
                //跳转
                this.$router.push({path: '/BDpage'})
            }else if('TEST' === d) {
                //测试项目页面
                //给标记参数复制true，再路由里通过跳转验证
                this.$route.meta.status = true;
                //跳转
                this.$router.push({path: '/TESTpage'})
            }else {
                //未带参或参数不对，跳转错误页面
                this.$route.meta.status = true;
                this.$router.push({path: '/Err'})
            }

        }
    }
</script>

<style scoped>

</style>