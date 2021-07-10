<template>
    <el-container style="height: auto; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="[]">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>Excel操作</template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1" @click="changMain">外拨导入</el-menu-item>
                        <el-menu-item index="1-2" @click="changMain1">导出坐席信息</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-message"></i>FTP操作</template>
                    <el-menu-item-group>
                        <el-menu-item index="2-1" @click="changMain2()">FTP</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
<!--                <el-dropdown>-->
<!--                    <i class="el-icon-setting" style="margin-right: 15px"></i>-->
<!--                    <el-dropdown-menu slot="dropdown">-->
<!--                        <el-dropdown-item>查看</el-dropdown-item>-->
<!--                        <el-dropdown-item>新增</el-dropdown-item>-->
<!--                        <el-dropdown-item>删除</el-dropdown-item>-->
<!--                    </el-dropdown-menu>-->
<!--                </el-dropdown>-->
                <span>TEST</span>
            </el-header>

            <el-main>
                <component :is="main"></component>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import FileUpload from '../../Main/TEST/TEST-FileUpload'
    import ExportExce from '../../Main/TEST/TEST-ExportExce'
    import FTP from '../../Main/TEST/TEST-Ftp'
    export default {
        name: "TESTpage",
        components: {
            FileUpload,
            ExportExce,
            FTP,
        },
        data(){
            return {
                main: ''
            }
        },
        methods:{
            changMain:function(){
                this.main = 'FileUpload'
            },
            changMain1:function(){
                this.main = 'ExportExce'
            },
            changMain2:function(){
                this.main = 'FTP'
            }
        }
    }
</script>

<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>