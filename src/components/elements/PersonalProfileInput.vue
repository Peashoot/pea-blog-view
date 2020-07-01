<template>
    <p>
        <label for="txt_personal_profile">{{$t('label.personal_profile')}}</label>
        <textarea name="personal_profile" id="txt_personal_profile" cols="30" rows="10" 
        :placeholder="$t('placeholder.personal_profile')"  @input="handleInput" :maxlength="limitLength"></textarea>
    </p>
</template>
<script>
export default {
    props: {
        limitLength: Number
    },
    methods: {
        handleInput(event) {
            let value = event.target.value;
            this.$emit('input', value);
        }
    }
}
</script>