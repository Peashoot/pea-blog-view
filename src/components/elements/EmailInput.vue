<template>
<p>
    <label for="txt_email">{{$t('label.email')}}</label>
    <input type="email" name="email" id="txt_email" v-bind:placeholder="$t('placeholder.email')" 
	:value="currentValue" @input="handleInput">
</p>
</template>
<script>
export default {
    name: "EmailInput",
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