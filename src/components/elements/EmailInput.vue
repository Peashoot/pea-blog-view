<template>
<p>
    <require :required="required" />
    <label for="txt_email">{{$t('label.email')}}</label>
    <input type="email" name="email" id="txt_email" v-bind:placeholder="$t('placeholder.email')" 
	:value="currentValue" @input="handleInput" maxlength="30">
    <warning v-if="isEmpty && required == 'true'" :warning="$t('prompt.empty_email')" />
</p>
</template>
<script>
import { RequiredFlag, WarningLabel } from "@/components/elements";
export default {
    name: "EmailInput",
    data: function() {
        return {
            currentValue: this.value,
            isEmpty: false
        }
    },
    props: {
        value: String,
        required: String,
        showWarning: Boolean
    },
    methods: {
        handleInput(event) {
            let value = event.target.value;
            this.isEmpty = value == '';
            this.$emit('input', value);
        }
    },
    watch: {
        "showWarning": function(newVal, oldVal) {
            this.isEmpty = newVal;
        }
    },
    components: {
        "require": RequiredFlag,
        "warning": WarningLabel
    }
}
</script>