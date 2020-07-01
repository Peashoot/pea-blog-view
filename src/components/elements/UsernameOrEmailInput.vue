<template>
    <p>
        <require :required="required" />
        <label for="txt_name_or_email">{{$t('label.name_or_email')}}</label>
        <input type="text" name="nameOrEmail" id="txt_name_or_email" v-bind:placeholder='$t("placeholder.name_or_email")'
	    :value="currentValue" @input="handleInput" maxlength="30">
        <warning v-if="isEmpty && required == 'true'" :warning="$t('prompt.empty_name_or_email')"/>
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