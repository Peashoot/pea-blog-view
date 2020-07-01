<template>
    <p>
        <require :required="required" />
        <label for="txt_username">{{$t('label.username')}}</label>
        <input type="text" name="username" id="txt_username" v-bind:placeholder='$t("placeholder.username")'
	    :value="currentValue" @input="handleInput" maxlength="30">
        <warning v-if="isEmpty && required == 'true'" :warning="$t('prompt.empty_username')"/>
    </p>
</template>
<script>
import {RequiredFlag, WarningLabel} from "@/components/elements";
export default {
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