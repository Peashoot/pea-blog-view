<template>
    <p>
        <require :required="required" />
        <label for="txt_password">{{$t('label.password')}}</label>
        <input type="password" name="password" id="txt_password" v-bind:placeholder='$t("placeholder.password")'
        @input="handleInput" maxlength="20">
        <warning v-if="isEmpty && required == 'true'" :warning="$t('prompt.empty_password')" />
    </p>
</template>
<script>
import { RequiredFlag, WarningLabel } from "@/components/elements";
import encrypt from "../../tools/encrypt";
export default {
    data() {
        return {
            isEmpty: false
        }
    },
    methods: {
        handleInput(event) {
            let value = event.target.value;
            this.isEmpty = value == '';
            value = encrypt.md5Hash(value);
            this.$emit('input', value);
        }
    },
    props: {
        required: String,
        showWarning: Boolean,
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