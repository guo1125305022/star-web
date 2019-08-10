<template>
    <el-container>
        <el-aside width="260px">
            <el-collapse v-model="activeNames" @change="handleChange" accordion>
                <el-collapse-item name="base_form_component">
                    <template slot="title" style="background-color: aquamarine"><p style="padding-left: 10px">基本表单组件</p></template>
                    <draggable tag="ul" style="list-style: none" :list="baseFormComponents"
                               v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
                               @end="handleMoveEnd"
                               @start="handleMoveStart"
                               :move="handleMove">
                        <li v-for="(item,index) in baseFormComponents" :key="index" class="ul_list_item">
                            <i v-if="item.icon!==null" :class="item.icon" class="icon"></i>
                            {{item.name}}
                        </li>
                    </draggable>
                </el-collapse-item>
                <el-collapse-item name="extend_form_component">
                    <template slot="title"><p style="padding-left: 10px">扩展表单组件</p></template>
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
                <el-collapse-item name="base_layout_component">
                    <template slot="title"><p style="padding-left: 10px">基本布局</p></template>
                    <div>简化流程：设计简洁直观的操作流程；</div>
                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </el-collapse-item>
                <el-collapse-item name="extend_layout_componet">
                    <template slot="title"><p style="padding-left: 10px">扩展布局组件</p></template>
                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </el-collapse-item>
            </el-collapse>
        </el-aside>
        <el-main>
            <el-container>
                <el-header>
                    <el-tooltip content="导入JSON">
                        <el-button type="success" size="medium" circle icon="el-icon-upload"></el-button>
                    </el-tooltip>
                    <el-tooltip content="清空">
                        <el-button type="danger" size="medium" circle icon="el-icon-delete"></el-button>
                    </el-tooltip>
                    <el-tooltip content="预览">
                        <el-button type="info" size="medium" circle icon="el-icon-view"></el-button>
                    </el-tooltip>
                    <el-tooltip content="生成JSON">
                        <el-button type="warning" size="medium" circle icon="el-icon-position"></el-button>
                    </el-tooltip>
                    <el-tooltip content="生成代码">
                        <el-button type="primary" size="medium" circle icon="el-icon-position"></el-button>
                    </el-tooltip>
                </el-header>
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

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        components: {
            draggable
        },
        data() {
            return {
                activeNames: "base_form_component",
                activeName: 'first',
                baseFormComponents: [
                    {
                        icon: 'el-icon-bank-card',
                        name: '单行文本'
                    },
                    {
                        icon: 'el-icon-bank-card',
                        name: '多行文本'
                    },
                    {
                        icon: null,
                        name: '单选框组'
                    }, {
                        icon: null,
                        name: '多选框组'
                    }, {
                        icon: null,
                        name: '时间选择器'
                    }, {
                        icon: null,
                        name: '日期选择器'
                    }, {
                        icon: 'el-icon-star-on',
                        name: '评分'
                    }, {
                        icon: null,
                        name: '颜色选择器'
                    }, {
                        icon: null,
                        name: '下拉选择框'
                    }, {
                        icon: null,
                        name: '开关'
                    }, {
                        icon: null,
                        name: '滑块'
                    },
                ],
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
            handleMoveStart({oldIndex}) {
                console.log('start', oldIndex, this.basicComponents)
            },
            handleMove() {
                return true;
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

        .icon {
            margin-right: 6px;
            margin-left: 8px;
            display: inline-block;
            font-size: 18px;
            vertical-align: middle
        }
    }


</style>
