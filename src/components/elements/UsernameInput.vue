<template>
    <p>
        <label for="txt_username">{{$t('label.username')}}</label>
        <input type="text" name="username" id="txt_username" v-bind:placeholder='$t("placeholder.username")'
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