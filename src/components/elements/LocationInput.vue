<template>
    <p>
        <label for="txt_location">{{$t('label.location')}}</label>
        <input type="text" name="location" id="txt_location" v-bind:placeholder='$t("placeholder.location")'
	    :value="currentValue" @input="handleInput" maxlength="50">
    </p>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class LocationInput extends Vue {
    /**
     * 上层组件传的值
     */
    @Prop()
    value!: string
    /**
     * 当前组件的值
     */
    currentValue: string = this.value
    /**
     * 当前值发生改变后传给上层组件
     */
    handleInput(event) {
        let value = event.target.value;
        this.$emit('input', value);
    }
}
</script>