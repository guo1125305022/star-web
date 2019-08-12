<template>
    <el-container>
        <el-aside width="260px">
            <el-collapse v-model="activeNames" @change="handleChange" accordion>
                <el-collapse-item name="base_form_component">
                    <template slot="title" style="background-color: aquamarine"><p style="padding-left: 10px">基本表单组件</p></template>
                    <draggable tag="ul" style="list-style: none" :list="baseFormComponents.Components"
                               v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
                               @end="handleMoveEnd"
                               @start="HandleMoveStart(baseFormComponents.groupType)"
                               :move="handleMove">
                        <li v-for="(item,index) in baseFormComponents.Components" :key="index" class="ul_list_item">
                            <i v-if="item.icon!==null" :class="item.icon" class="icon"></i>
                            {{item.name}}
                        </li>
                    </draggable>
                </el-collapse-item>
                <el-collapse-item name="extend_form_component">
                    <template slot="title"><p style="padding-left: 10px">扩展表单组件</p></template>
                    <draggable tag="ul" style="list-style: none" :list="formExtendComponents.Components"
                               v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
                               @end="handleMoveEnd"
                               @start="HandleMoveStart(formExtendComponents.groupType)"
                               :move="handleMove">
                        <li v-for="(item,index) in formExtendComponents.Components" :key="index" class="ul_list_item">
                            <i v-if="item.icon!==null" :class="item.icon" class="icon"></i>
                            {{item.name}}
                        </li>
                    </draggable>
                </el-collapse-item>
                <el-collapse-item name="base_layout_component">
                    <template slot="title"><p style="padding-left: 10px">基本布局</p></template>
                    <draggable tag="ul" style="list-style: none" :list="layoutComponents.Components"
                               v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
                               @end="handleMoveEnd"
                               @start="HandleMoveStart(layoutComponents.groupType)"
                               :move="handleMove">
                        <li v-for="(item,index) in layoutComponents.Components" :key="index" class="ul_list_item">
                            <i v-if="item.icon!==null" :class="item.icon" class="icon"></i>
                            {{item.name}}
                        </li>
                    </draggable>
                </el-collapse-item>
                <el-collapse-item name="extend_layout_componet">
                    <template slot="title"><p style="padding-left: 10px">扩展布局组件</p></template>
                    <draggable tag="ul" style="list-style: none" :list="layoutExtendComponents.Components"
                               v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
                               @end="handleMoveEnd"
                               @start="HandleMoveStart(layoutExtendComponents.groupType)"
                               :move="handleMove">
                        <li v-for="(item,index) in layoutExtendComponents.Components" :key="index" class="ul_list_item">
                            <i v-if="item.icon!==null" :class="item.icon" class="icon"></i>
                            {{item.name}}
                        </li>
                    </draggable>
                </el-collapse-item>
            </el-collapse>
        </el-aside>
        <el-main>
            <el-container>
                <el-header>
                    <tools-btn-group :data="data"></tools-btn-group>
                </el-header>
                <el-main style="    border: 1px darkblue dashed;">
                    <draggable class="widget-form-list"
                               v-model="data.formComponents"
                               v-bind="{group:'people', ghostClass: 'ghost'}"
                               @end="handleMoveEnd"
                               @add="handleWidgetAdd">
                     <editor-form-components :components="data.formComponents" :formConfig="data.formConfig"></editor-form-components>
                    </draggable>
                </el-main>
            </el-container>
        </el-main>
        <el-aside width="300px">
            <el-tabs v-model="activeName">
                <el-tab-pane label="表单配置" name="first">
                    <form-config :formConfig="data.formConfig"></form-config>
                </el-tab-pane>
                <el-tab-pane label="字段配置" name="second">字段配置</el-tab-pane>
            </el-tabs>
        </el-aside>
    </el-container>

</template>

<script>
    import draggable from 'vuedraggable'
    import toolsBtnGroup from "./toolsBtnGroup";
    import FormComponents from '../configs/FormComponents.js';
    import FormExtendComponents from '../configs/FormExtendComponents.js'
    import LayoutComponents from '../configs/LayoutComponents.js'
    import LayoutExtendComponents from '../configs/LayoutExtendComponents.js'
    import EditorFormComponents from './EditorFormComponents.vue';
    import FormConfig from "@/components/FormConfig";

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        components: {
            draggable,
            toolsBtnGroup,
            EditorFormComponents,FormConfig
        },
        data() {
            return {
                data: {
                    formComponents: [],
                    formConfig:{
                        labelWidth: 100,
                        labelPosition: 'top',
                        size: 'small'
                    }
                },
                activeNames: "base_form_component",
                activeName: 'first',
                baseFormComponents: FormComponents,
                formExtendComponents: FormExtendComponents,
                layoutComponents:LayoutComponents,
                layoutExtendComponents:LayoutExtendComponents,
                moveType: null,
            }
        },
        methods: {
            handleClose(done) {
                done();
            },
            handleChange() {
            },
            handleMoveEnd(evt) {
                // console.log('end', evt)
            },
            HandleMoveStart(moveType) {
                if (moveType == null || moveType.length < 1) {
                    return
                }
                this.moveType = moveType;
                // console.log('start', moveType)
            },
            handleMove() {
                return true;
            },
            handleWidgetAdd(evt) {
                const moveType = this.moveType;
                if (moveType == null || moveType.length < 1) {
                    return
                }
                const newIndex = evt.newIndex;
                const oldIndex = evt.oldIndex;
                let srcComponents = null;
                switch (moveType) {
                    case FormComponents.groupType:
                        srcComponents = this.baseFormComponents.Components;
                        break;
                    case FormExtendComponents.groupType:
                        srcComponents = this.formExtendComponents.Components;
                        break;
                    default:
                        return;
                }
                console.log( this.data.formComponents);

            },


        }
    }
</script>

<style lang="scss">
    .main_container {
        height: calc(100% - 50px);
    }

    ul {
        list-style: none;
        padding: 0 0 0 10px;
    }

    .ul_list_item {
        width: 48%;
        float: left;
        text-align: left;
        line-height: 30px;
        margin: 1%;
        font-size: 14px;
        position: relative;
        display: block;
        background-color: rgba(0, 0, 0, 0.08);
        cursor: move;

        .icon {
            margin-right: 6px;
            margin-left: 8px;
            display: inline-block;
            font-size: 18px;
            vertical-align: middle
        }
    }

    .widget-form-list {
        height: 100%;
        padding-bottom: 150px;
    }
</style>
