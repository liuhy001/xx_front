<template>
    <div>
        <div class="block">
            <a>选择日期：</a>
            <el-date-picker
                    v-model="value"
                    type="date"
                    placeholder="选择日期">
            </el-date-picker>
            <el-button type="primary" @click="cheng">确定</el-button>
        </div>
        <div style="margin: 30px 0px 0px 0px">
            <a>三七：{{value3}}</a>
        </div>
        <div style="margin: 30px 0px 0px 0px">
            <a>五七：{{value5}}</a>
        </div>
        <div style="margin: 30px 0px 0px 0px">
            <a>七七：{{value7}}</a>
        </div>
        <div style="margin: 30px 0px 0px 0px">
            <a>百天：{{valueb}}</a>
        </div>
    </div>
</template>

<script>
    import { getLunar } from 'chinese-lunar-calendar'
    export default {
        name: "Index",
        data() {
            return {
                value: '',
                value3: '',
                value5: '',
                value7: '',
                valueb:'',
            }
        },
        methods: {
            cheng() {
                if (this.value == '') {
                    this.$message.error('请选择日期');
                }else {
                    const a = this.value.getTime();

                    const v3 = this.$moment(a + 3600 * 1000 * 24 * 20).format('YYYY-MM-DD')
                    const v3v = getLunar(new Date(v3).getFullYear(), new Date(v3).getMonth() + 1, new Date(v3).getDate())
                    this.value3 = v3 + ' ' + v3v.lunarYear + v3v.dateStr + ' ' + v3v.zodiac

                    const v5 = this.$moment(a + 3600 * 1000 * 24 * 34).format('YYYY-MM-DD')
                    const v5v = getLunar(new Date(v5).getFullYear(), new Date(v5).getMonth() + 1, new Date(v5).getDate())
                    this.value5 = v5 + ' ' + v5v.lunarYear + v5v.dateStr + ' ' + v5v.zodiac

                    const v7 = this.$moment(a + 3600 * 1000 * 24 * 48).format('YYYY-MM-DD')
                    const v7v = getLunar(new Date(v7).getFullYear(), new Date(v7).getMonth() + 1, new Date(v7).getDate())
                    this.value7 = v7 + ' ' + v7v.lunarYear + v7v.dateStr + ' ' + v7v.zodiac

                    const vb = this.$moment(a + 3600 * 1000 * 24 * 99).format('YYYY-MM-DD')
                    const vbv = getLunar(new Date(vb).getFullYear(), new Date(vb).getMonth() + 1, new Date(vb).getDate())
                    this.valueb = vb + ' ' + vbv.lunarYear + vbv.dateStr + ' ' + vbv.zodiac
                }
            },

        }
    }
</script>

<style scoped>

</style>