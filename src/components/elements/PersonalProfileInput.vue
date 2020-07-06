<template>
    <p>
        <label for="txt_personal_profile">{{$t('label.personal_profile')}}</label>
        <textarea name="personal_profile" id="txt_personal_profile" cols="30" rows="10" 
        :placeholder="$t('placeholder.personal_profile')"  @input="handleInput" :maxlength="limitLength"></textarea>
    </p>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class PersonalProfileInput extends Vue {
    /**
     * 输入框的最大长度限制
     */
    @Prop()
    limitLength!: number
    /**
     * 将输入框内容传到上层
     */
    handleInput(event) {
        let value = event.target.value;
        this.$emit('input', value);
    }
}
</script>