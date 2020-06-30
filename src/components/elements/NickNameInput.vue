<template>
    <p>
        <label for="txt_nickname">{{$t('label.nickname')}}</label>
        <input type="text" name="nickname" id="txt_nickname" v-bind:placeholder='$t("placeholder.nickname")'
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