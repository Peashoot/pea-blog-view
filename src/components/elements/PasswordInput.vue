<template>
    <p>
        <require :required="required" />
        <label for="txt_password">{{$t('label.password')}}</label>
        <input type="password" name="password" id="txt_password" v-bind:placeholder='$t("placeholder.password")'
        @input="handleInput" maxlength="20">
        <warning v-if="isEmpty && required == 'true'" :warning="$t('prompt.empty_password')" />
    </p>
</template>
<script lang='ts'>
import { RequiredFlag, WarningLabel } from "@/components/elements";
import encrypt from "../../tools/encrypt";
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
@Component({
    components: {
        "require": RequiredFlag,
        "warning": WarningLabel
    }
})

export default class PasswordInput extends Vue {
    /**
     * 密码是否为空
     */
    isEmpty: boolean =  false
    /**
     * 当输入内容改变后，把输入文本的hash值传到上层
     */
    handleInput(event) {
        let value = event.target.value;
        this.isEmpty = value == '';
        value = encrypt.md5Hash(value);
        this.$emit('input', value);
    }
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
     * 当showWarning发生改变时，相应的显示或隐藏提示
     */
    @Watch("showWarning")
    onShowWarningChanged(newVal, oldVal) {
        this.isEmpty = newVal;
    }
}
</script>