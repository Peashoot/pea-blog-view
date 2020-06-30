<template>
    <p>
        <label for="txt_confirm_pwd">{{$t('label.confirm_pwd')}}</label>
        <input type="password" name="confirm_pwd" id="txt_confirm_pwd" :placeholder='$t("placeholder.confirm_pwd")'
        @input="handleInput">
        <span v-if="invalid">{{$t('prompt.confirm_pwd')}}</span>
    </p>
</template>

<script>
import encrypt from "../../tools/encrypt";
export default {
    data() {
        return  {
            value: '',
            invalid: false
        }
    },
    props: ["compare"],
    methods: {
        handleInput(event) {
            this.value = encrypt.md5Hash(event.target.value);
            this.invalid = !(this.value === this.compare);
            this.$emit('input', this.invalid);
        }
    },
    watch: {
        compare: function(newVal, oldVal) {
            this.invalid = !(newVal === this.value);
            this.$emit('input', this.invalid);
        }
    }
}
</script>
<style scoped>

</style>