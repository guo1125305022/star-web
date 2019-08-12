<template>
    <el-form-item :label="component.name" class="widget-view">
        <template v-if="component.type==='input'">
            <el-input
                    v-model="component.options.defaultValue"
                    :style="{width: component.options.width}"
                    :placeholder="component.options.placeholder" ></el-input>
        </template>
        <template v-else-if="component.type==='textarea'">
            <el-input
                    v-model="component.options.defaultValue"
                    type="textarea"
                    :style="{width: component.options.width}"
                    :placeholder="component.options.placeholder"
            ></el-input>
        </template>
        <template v-else-if="component.type==='number'">
            <el-input-number
                    v-model="component.options.defaultValue"
                    :disabled="component.options.disabled"
                    :controls-position="component.options.controlsPosition"
                    :style="{width: component.options.width}"
            ></el-input-number>
        </template>
        <template v-if="component.type === 'radio'">
            <el-radio-group v-model="component.options.defaultValue"
                            :style="{width: component.options.width}">
                <el-radio
                        :style="{display: component.options.inline ? 'inline-block' : 'block'}"
                        :label="item.value" v-for="(item, index) in component.options.options" :key="item.value + index" >
                    {{component.options.showLabel ? item.label : item.value}}
                </el-radio>
            </el-radio-group>
        </template>

        <template v-if="component.type === 'checkbox'">
            <el-checkbox-group
                    v-model="component.options.defaultValue"
                    :style="{width: component.options.width}">
                <el-checkbox
                        :style="{display: component.options.inline ? 'inline-block' : 'block'}"
                        :label="item.value" v-for="(item, index) in component.options.options" :key="item.value + index">
                    {{component.options.showLabel ? item.label : item.value}}
                </el-checkbox>
            </el-checkbox-group>
        </template>

        <template v-if="component.type === 'time'">
            <el-time-picker
                    v-model="component.options.defaultValue"
                    :is-range="component.options.isRange"
                    :placeholder="component.options.placeholder"
                    :start-placeholder="component.options.startPlaceholder"
                    :end-placeholder="component.options.endPlaceholder"
                    :readonly="component.options.readonly"
                    :disabled="component.options.disabled"
                    :editable="component.options.editable"
                    :clearable="component.options.clearable"
                    :arrowControl="component.options.arrowControl"
                    :style="{width: component.options.width}"
            >
            </el-time-picker>
        </template>

        <template v-if="component.type === 'date'">
            <el-date-picker
                    v-model="component.options.defaultValue"
                    :type="component.options.type"
                    :is-range="component.options.isRange"
                    :placeholder="component.options.placeholder"
                    :start-placeholder="component.options.startPlaceholder"
                    :end-placeholder="component.options.endPlaceholder"
                    :readonly="component.options.readonly"
                    :disabled="component.options.disabled"
                    :editable="component.options.editable"
                    :clearable="component.options.clearable"
                    :style="{width: component.options.width}"
            >
            </el-date-picker>
        </template>

        <template v-if="component.type === 'rate'">
            <el-rate v-model="component.options.defaultValue"
                     :max="component.options.max"
                     :disabled="component.options.disabled"
                     :allow-half="component.options.allowHalf"
            ></el-rate>
        </template>

        <template v-if="component.type === 'color'">
            <el-color-picker
                    v-model="component.options.defaultValue"
                    :disabled="component.options.disabled"
                    :show-alpha="component.options.showAlpha"
            ></el-color-picker>
        </template>

        <template v-if="component.type === 'select'">
            <el-select
                    v-model="component.options.defaultValue"
                    :disabled="component.options.disabled"
                    :multiple="component.options.multiple"
                    :clearable="component.options.clearable"
                    :placeholder="component.options.placeholder"
                    :style="{width: component.options.width}"
            >
                <el-option v-for="item in component.options.options" :key="item.value" :value="item.value" :label="component.options.showLabel?item.label:item.value"></el-option>
            </el-select>
        </template>

        <template v-if="component.type==='switch'">
            <el-switch
                    v-model="component.options.defaultValue"
                    :disabled="component.options.disabled"
            >
            </el-switch>
        </template>

    </el-form-item>
</template>

<script>
    export default {
        name: "EditorComponent",
        props: ['component', 'select']
    }
</script>

<style scoped>
@import "../styles/fromComponentStyle.less";
</style>
