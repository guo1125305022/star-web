<template>
    <el-container>
        <el-aside width="240px">

        </el-aside>
        <el-main>
            <el-container>
                <el-header>
                    <el-tooltip content="导入JSON">
                        <el-button type="success" size="medium" circle icon="el-icon-upload2"></el-button>
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
        <el-aside width="240px"></el-aside>
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
                list2: [],
                list: [
                    {
                        id: 1,
                        name: 'a'
                    },
                    {
                        id: 2,
                        name: 'b'
                    },
                    {
                        id: 3,
                        name: 'c'
                    },
                    {
                        id: 4,
                        name: 'd'
                    },
                    {
                        id: 5,
                        name: 'e'
                    },
                    {
                        id: 6,
                        name: 'f'
                    },

                ],
            }
        },
        methods: {
            handleClose(done) {
                done();
            },

        }
    }
</script>

<style scoped>
    .main_container {
        height: calc(100% - 50px);
    }

</style>
