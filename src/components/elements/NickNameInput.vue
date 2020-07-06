<template>
    <p>
        <require :required="required" />
        <label for="txt_nickname">{{$t('label.nickname')}}</label>
        <input type="text" name="nickname" id="txt_nickname" v-bind:placeholder='$t("placeholder.nickname")'
	    :value="currentValue" @input="handleInput" maxlength="20">
        <warning v-if="isEmpty && required == 'true'" :warning="$t('prompt.empty_nickname')"/>
    </p>
</template>
<script lang='ts'>
import { RequiredFlag, WarningLabel} from "@/components/elements";
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
@Component({
    components: {
        "require": RequiredFlag,
        "warning": WarningLabel
    }
})

export default class NickNameInput extends Vue {
    /**
     * 上层组件传的值
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
     * 当前组件的值
     */
    currentValue: string = this.value
    /**
     * 昵称是否为空
     */
    isEmpty: boolean = false

    /**
     * 当前组件值发生改变后传给上一级
     */
    handleInput(event) {
        let value = event.target.value;
        this.isEmpty = value == '';
        this.$emit('input', value);
    }
    /**
     * 当上层组件显示提示时
     */
    @Watch('showWarning')
    onShowWarningChanged(newVal: boolean, oldVal: boolean) {
        this.isEmpty = newVal;
    }
    
}
</script>