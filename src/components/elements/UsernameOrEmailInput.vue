<template>
    <p>
        <require :required="required" />
        <label for="txt_name_or_email">{{$t('label.name_or_email')}}</label>
        <input type="text" name="nameOrEmail" id="txt_name_or_email" v-bind:placeholder='$t("placeholder.name_or_email")'
	    :value="currentValue" @input="handleInput" maxlength="30">
        <warning v-if="isEmpty && required == 'true'" :warning="$t('prompt.empty_name_or_email')"/>
    </p>
</template>
<script lang='ts'>
import {RequiredFlag, WarningLabel} from "@/components/elements";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
@Component({
    components: {
        "require": RequiredFlag,
        "warning": WarningLabel
    }
})
export default class UsernameOrEmailInput extends Vue {
    /**
     * 上层传入值
     */
    @Prop()
    value!: string
    /**
     * 是否必填
     */
    @Prop()
    required!: string
    /**
     * 是否显示提示
     */
    @Prop()
    showWarning!: boolean
    /**
     * 当前值
     */
    currentValue: string = this.value
    /**
     * 当前值是否为空
     */
    isEmpty: boolean = false
    /**
     * 将当前值通知到上层
     */
    handleInput(event) {
        let value = event.target.value;
        this.isEmpty = value == '';
        this.$emit('input', value);
    }
    /**
     * 当showWaring改变时显示或隐藏提示
     */
    @Watch("showWarning")
    onShowWarningChanged(newVal, oldVal) {
        this.isEmpty = newVal;
    }
}
</script>