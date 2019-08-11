<template>
    <div>
        <el-form :size="formConfig.size" :label-position="formConfig.labelPosition" :label-width="formConfig.labelWidth + 'px'">

        <template v-for="(component ,index) in components">
            <template v-if="component.groupType===formComponents.groupType">
                <!--            <p>{{component}}</p>-->
                <editor-component :component="component"></editor-component>
            </template>
            <template v-else-if="component.groupType===formExtendComponents.groupType"></template>
            <template v-else-if="component.groupType===layoutComponents.groupType"></template>
            <template v-else-if="component.groupType===layoutExtendComponents.groupType"></template>

        </template>
        </el-form>
    </div>

</template>


<script>
    import FormComponents from '../configs/FormComponents.js';
    import FormExtendComponents from '../configs/FormExtendComponents.js'
    import LayoutComponents from '../configs/LayoutComponents.js'
    import LayoutExtendComponents from '../configs/LayoutExtendComponents.js'
    import EditorComponent from "./EditorComponent";

    export default {
        name: "EditorForm",
        components: {EditorComponent},
        props: ['components',"formConfig", 'select'],
        comments: {
            EditorComponent
        },
        data() {

            return {
                formComponents: FormComponents,
                formExtendComponents: FormExtendComponents,
                layoutComponents: LayoutComponents,
                layoutExtendComponents: LayoutExtendComponents,
            }
        }
    }
</script>

<style scoped>

</style>
