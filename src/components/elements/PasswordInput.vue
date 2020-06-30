<template>
    <p>
        <label for="txt_password">{{$t('label.password')}}</label>
        <input type="password" name="password" id="txt_password" v-bind:placeholder='$t("placeholder.password")'
        @input="handleInput">
    </p>
</template>
<script>
import encrypt from "../../tools/encrypt";
export default {
    methods: {
        handleInput(event) {
            let value = event.target.value;
            value = encrypt.md5Hash(value);
            this.$emit('input', value);
        }
    }
}
</script>