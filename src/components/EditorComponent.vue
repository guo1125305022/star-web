<template>
    <el-form-item>
        <template  >
            <el-input
                    v-model="component.options.defaultValue"
                    :style="{width: component.options.width}"
                    :placeholder="component.options.placeholder"
            ></el-input>
        </template>

    </el-form-item>
</template>

<script>
    export default {
        name: "EditorComponent",
        props:['component','select']
    }
</script>

<style scoped>

</style>
