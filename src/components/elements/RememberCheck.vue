<template>
    <span>
        <input type="checkbox" name="rememberme" id="chk_rememberme"
	    :checked="currentValue" @input="handleInput">
        <label for="chk_remeberme">{{$t('label.rememberme')}}</label>
    </span>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class RememberMeCheck extends Vue {
    /**
     * 上层传入的值
     */
    @Prop()
    value!: boolean
    /**
     * 当前值
     */
    currentValue: boolean = this.value
    /**
     * 将当前值传给上层
     */
    handleInput(event) {
        let value = event.target.checked;
        this.$emit('input', value);
    }
}
</script>