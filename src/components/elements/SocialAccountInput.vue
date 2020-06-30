<template>
    <p>
        <label for="txt_social_account">{{$t('label.social_account')}}</label>
        <input type="text" name="social_account" id="txt_social_account" v-bind:placeholder='$t("placeholder.social_account")'
	    :value="currentValue" @input="handleInput">
    </p>
</template>
<script>
export default {
    data: function() {
        return {
            currentValue: this.value
        }
    },
    props: ["value"],
    methods: {
        handleInput(event) {
            let value = event.target.value;
            this.$emit('input', value);
        }
    }
}
</script>