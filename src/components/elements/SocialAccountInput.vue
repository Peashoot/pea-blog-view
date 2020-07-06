<template>
    <p>
        <label for="txt_social_account">{{$t('label.social_account')}}</label>
        <input type="text" name="social_account" id="txt_social_account" v-bind:placeholder='$t("placeholder.social_account")'
	    :value="currentValue" @input="handleInput" maxlength="30">
    </p>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class SocialAccountInput extends Vue {
    /**
     * 上层传入的值
     */
    @Prop()
    value!: string
    /**
     * 当前值
     */
    currentValue: string = this.value
    /**
     * 将当前值通知给上层
     */
    handleInput(event) {
        let value = event.target.value;
        this.$emit('input', value);
    }
}
</script>