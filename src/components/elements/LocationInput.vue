<template>
    <p>
        <label for="txt_location">{{$t('label.location')}}</label>
        <input type="text" name="location" id="txt_location" v-bind:placeholder='$t("placeholder.location")'
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