<template>
<p>
    <require :required="required" />
    <label for="txt_email">{{$t('label.email')}}</label>
    <input type="email" name="email" id="txt_email" v-bind:placeholder="$t('placeholder.email')" 
	:value="currentValue" @input="handleInput" maxlength="30">
    <warning v-if="isEmpty && required == 'true'" :warning="$t('prompt.empty_email')" />
</p>
</template>
<script lang='ts'>
import { RequiredFlag, WarningLabel } from "@/components/elements";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
    components: {
        "require": RequiredFlag,
        "warning": WarningLabel
    }
})

export default class extends Vue {
    /**
     * 外部传入的邮箱
     */
    @Prop()
    value!: string
    /**
     * 当前值
     */
    currentValue: string = this.value
    /**
     * 邮箱是否为空
     */
    isEmpty: boolean = false
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
     * 当前组件值修改后传给上层组件
     */
    handleInput(event: any) {
        let value = event.target.value;
        this.isEmpty = value == '';
        this.$emit('input', value);
    }
    /**
     * 当是否显示提示变化时，判断是否为空
     */
    @Watch('showWarning')
    onShowWarningChanged(newVal: boolean, oldVal: boolean) {
        this.isEmpty = newVal;
    }
    
}
</script>