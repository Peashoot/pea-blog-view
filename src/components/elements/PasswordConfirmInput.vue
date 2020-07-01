<template>
    <p>
        <require :required="required" />
        <label for="txt_confirm_pwd">{{$t('label.confirm_pwd')}}</label>
        <input type="password" name="confirm_pwd" id="txt_confirm_pwd" :placeholder='$t("placeholder.confirm_pwd")'
        @input="handleInput" maxlength="20">
        <warning v-if="pwdConfirmed && required == 'true'" :warning="$t('prompt.confirm_pwd')" />
    </p>
</template>

<script>
import { RequiredFlag, WarningLabel } from "@/components/elements";
import encrypt from "../../tools/encrypt";
export default {
    data() {
        return  {
            value: '',
            pwdConfirmed: false
        }
    },
    props: {
        compare: String,
        required: String  
    },
    methods: {
        handleInput(event) {
            this.value = encrypt.md5Hash(event.target.value);
            this.pwdConfirmed = !(this.value === this.compare);
            this.$emit('input', this.invalid);
        }
    },
    watch: {
        compare: function(newVal, oldVal) {
            this.pwdConfirmed = !(newVal === this.value);
            this.$emit('input', this.invalid);
        }
    },
    components: {
        "require": RequiredFlag,
        "warning": WarningLabel
    }
}
</script>
<style scoped>

</style>