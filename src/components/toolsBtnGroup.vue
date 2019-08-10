<template>
    <div>
        <el-tooltip content="导入JSON">
            <el-button type="success" size="medium" circle icon="el-icon-upload"></el-button>
        </el-tooltip>
        <el-tooltip content="清空">
            <el-button type="danger" @click="handlerClearFormComponents" size="medium" circle icon="el-icon-delete"></el-button>
        </el-tooltip>
        <el-tooltip content="预览">
            <el-button type="info" size="medium" circle icon="el-icon-view"></el-button>
        </el-tooltip>
        <el-tooltip content="生成JSON">
            <el-button type="warning" @click="handlerViewJson" size="medium" circle icon="el-icon-position"></el-button>
        </el-tooltip>
        <el-tooltip content="生成代码">
            <el-button type="primary" size="medium" circle icon="el-icon-position"></el-button>
        </el-tooltip>
    </div>
</template>

<script>
    export default {
        name: "toolsBtnGroup",
        props: ['data', 'select'],
        methods: {
            /**
             * 清空表单
             * */
            handlerClearFormComponents() {
                this.data.list = [];
                console.log(this.data)
            },
            /**
             * 预览json
             */
            handlerViewJson() {

            },
        }
    }
</script>

<style scoped>

</style>
