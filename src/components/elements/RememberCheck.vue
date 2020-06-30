<template>
    <span>
        <input type="checkbox" name="rememberme" id="chk_rememberme"
	    :checked="currentValue" @input="handleInput">
        <label for="chk_remeberme">{{$t('label.rememberme')}}</label>
    </span>
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
            let value = event.target.checked;
            this.$emit('input', value);
        }
    }
}
</script>