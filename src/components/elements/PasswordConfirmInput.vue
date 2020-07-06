<template>
    <p>
        <require :required="required" />
        <label for="txt_confirm_pwd">{{$t('label.confirm_pwd')}}</label>
        <input type="password" name="confirm_pwd" id="txt_confirm_pwd" :placeholder='$t("placeholder.confirm_pwd")'
        @input="handleInput" maxlength="20">
        <warning v-if="pwdConfirmed && required == 'true'" :warning="$t('prompt.confirm_pwd')" />
    </p>
</template>

<script lang='ts'>
import { RequiredFlag, WarningLabel } from "@/components/elements";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import encrypt from "../../tools/encrypt";
@Component({
    components: {
        "require": RequiredFlag,
        "warning": WarningLabel
    }
})

export default class PasswordConfirmInput extends Vue {
    /**
     * 密码hash值
     */
    value: string =''
    /**
     * 密码hash是否相等
     */
    pwdConfirmed: boolean = false
    /**
     * 待比较的密码hash值
     */
    @Prop()
    compare!: string
    /**
     * 是否必填
     */
    @Prop()
    required!: string
    /**
     * 当输入改变后通知上层比较结果
     */
    handleInput(event) {
        this.value = encrypt.md5Hash(event.target.value);
        this.pwdConfirmed = !(this.value === this.compare);
        this.$emit('input', this.pwdConfirmed);
    }
    /**
     * 当比较的密码改变时，需要重新判断密码hash是否相等
     */
    @Watch("compare")
    onCompareChanged(newVal, oldVal) {
        this.pwdConfirmed = !(newVal === this.value);
        this.$emit('input', this.pwdConfirmed);
    }
}
</script>
<style scoped>

</style>