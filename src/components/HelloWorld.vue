<template>
    <el-container>
        <el-aside width="260px">
            <el-collapse v-model="activeNames" @change="handleChange" accordion>
                <el-collapse-item name="base_form_component">
                    <template slot="title" style="background-color: aquamarine"><p style="padding-left: 10px">基本表单组件</p></template>
                    <draggable tag="ul" style="list-style: none" :list="baseFormComponents.Components"
                               v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
                               @end="handleMoveEnd"
                               @start="HandleMoveStart(baseFormComponents.type)"
                               :move="handleMove">
                        <li v-for="(item,index) in baseFormComponents.Components" :key="index" class="ul_list_item">
                            <i v-if="item.icon!==null" :class="item.icon" class="icon"></i>
                            {{item.name}}
                        </li>
                    </draggable>
                </el-collapse-item>
                <el-collapse-item name="extend_form_component">
                    <template slot="title"><p style="padding-left: 10px">扩展表单组件</p></template>
                </el-collapse-item>
                <el-collapse-item name="base_layout_component">
                    <template slot="title"><p style="padding-left: 10px">基本布局</p></template>
                </el-collapse-item>
                <el-collapse-item name="extend_layout_componet">
                    <template slot="title"><p style="padding-left: 10px">扩展布局组件</p></template>
                </el-collapse-item>
            </el-collapse>
        </el-aside>
        <el-main>
            <el-container>
                <el-header>g
                 <tools-btn-group></tools-btn-group>
                </el-header>
                <el-main>
                    <draggable class="widget-form-list"
                               v-model="data.list"
                               v-bind="{group:'people', ghostClass: 'ghost'}"
                               @end="handleMoveEnd"
                               @add="handleWidgetAdd"
                    >
                    </draggable>
                </el-main>
            </el-container>
        </el-main>
        <el-aside width="240px">
            <el-tabs v-model="activeName">
                <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
        </el-aside>
    </el-container>

</template>

<script>
    import draggable from 'vuedraggable'
    import toolsBtnGroup from "./toolsBtnGroup";
    import {formComponents, FormComponentsGroupType} from '../configs/FormComponents.js';

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        components: {
            draggable,
            toolsBtnGroup
        },
        data() {
            return {
                data: {
                    list: []
                },
                activeNames: "base_form_component",
                activeName: 'first',
                baseFormComponents: formComponents,
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
                console.log('end', evt)
            },
            HandleMoveStart(moveType) {
                if (moveType == null || moveType.length < 1) {
                    return
                }
                this.moveType = moveType;
                console.log('start', moveType)
            },
            handleMove() {
                return true;
            },
            handleWidgetAdd(evt) {
                const moveType = this.moveType;
                if (moveType == null || moveType.length < 1) {
                    return
                }
                switch (moveType) {
                    case FormComponentsGroupType:
                        this.handlerForm(evt);
                        break

                }
            },
            handlerForm(evt) {
                const newIndex = evt.newIndex
                const oldIndex = evt.oldIndex;
                console.log("就索引" + oldIndex, "新索引" + newIndex);
            }

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
