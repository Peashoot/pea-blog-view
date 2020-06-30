<template>
    <p>
        <label for="txt_telephone">{{$t('label.telephone')}}</label>
        <input type="tel" name="telephont" id="txt_telephone" v-bind:placeholder='$t("placeholder.telephone")'
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