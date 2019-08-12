<template>
    <div>
        <el-form label-position="left">
            <el-form-item label="标签对齐方式" style="position: relative">
                <el-radio-group v-model="formConfig.labelPosition">
                    <el-radio-button label="left">左对齐</el-radio-button>
                    <el-radio-button label="right">右对齐</el-radio-button>
                    <el-radio-button label="top">顶部对齐</el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="表单字段宽度">
                <el-input-number v-model="formConfig.labelWidth" :min="0" :max="200" :step="10"></el-input-number>
            </el-form-item>
            <el-form-item label="组件尺寸">
                <el-radio-group v-model="formConfig.size">
                    <el-radio-button label="medium">medium</el-radio-button>
                    <el-radio-button label="small">small</el-radio-button>
                    <el-radio-button label="mini">mini</el-radio-button>
                </el-radio-group>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "FormConfig",
        props:["formConfig"]
    }
</script>

<style scoped>

</style>