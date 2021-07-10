<template>
    <el-upload
            accept=".xlsx,.xls"
            ref="upload"
            multiple
            :limit="1"
            action=""
            :on-change="handleChange"
            :on-remove="handleRemove"
            :on-exceed="handleExceed"
            :file-list="fileList"
            :http-request="uploadFile"
            :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 133px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <el-button style="margin-left: 133px;" size="small" type="success" @click="download">下载模板</el-button>
        <div slot="tip" class="el-upload__tip">只能上传xlsx文件，且不超过10m</div>
    </el-upload>
</template>

<script>

    export default {
        name: "UploadMain",
        data() {
            return {
                fileData: '',  // 文件上传数据（多文件合一）
                fileList: [],   // upload多文件数组
            }
        },
        methods:{
            // 上传文件
            uploadFile(file) {
                this.fileData.append('files', file.file);  // append增加数据
                console.log(file.file)
            },

            // 上传到服务器
            submitUpload() {
                if (this.fileList.length === 0) {
                    this.$message({
                        message: '请先选择文件',
                        type: 'warning'
                    })
                } else {
                    const isLt100M = this.fileList.every(file => file.size / 1024 / 1024 < 10);
                    if (!isLt100M) {
                        this.$message.error('请检查，上传文件大小不能超过100MB!');
                    } else {
                        this.fileData = new FormData();  // new formData对象
                        this.$refs.upload.submit();  // 提交调用uploadFile函数
                        this.$axios.post(this.HTTP + "/bdUpload", this.fileData).then((response) => {
                            if (response.data.code === 200) {
                                this.$message({
                                    message: response.data.message,
                                    type: 'success'
                                });
                                this.fileList = [];
                            } else {
                                this.$message({
                                    message: '系统错误，请联系管理员',
                                    type: 'error'
                                })
                            }
                        })
                    }
                }
            },

            //移除
            handleRemove(file, fileList) {
                this.fileList = fileList;
                // return this.$confirm(`确定移除 ${ file.name }？`);
            },

            // 选取文件超过数量提示
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },

            //监控上传文件列表
            handleChange(file, fileList) {
                let existFile = fileList.slice(0, fileList.length - 1).find(f => f.name === file.name);
                if (existFile) {
                    this.$message.error('当前文件已经存在!');
                    fileList.pop();
                }
                this.fileList = fileList;
            },
            //下载模板
            download(){
                let a = document.createElement('a');
                a.href = './static/OBTemplate.xlsx';
                a.download = '外拨模板.xlsx';
                a.click();
            }
        }
    }
</script>

<style scoped>

</style>