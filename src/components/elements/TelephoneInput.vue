<template>
    <p>
        <label for="txt_telephone">{{$t('label.telephone')}}</label>
        <input type="tel" name="telephont" id="txt_telephone" v-bind:placeholder='$t("placeholder.telephone")'
	    :value="currentValue" @input="handleInput" maxlength="20">
    </p>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class TelephoneInput extends Vue {
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
     * 将当前值传给上层
     */
    handleInput(event) {
        let value = event.target.value;
        this.$emit('input', value);
    }
}
</script>