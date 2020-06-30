<template>
    <p>
        <label for="gender">{{$t('label.gender')}}</label>
        <input type="radio" name="gender" value="0" id="rdo_gender_secret">
        <label for="rdo_gender_secret">{{$t('label.gender_secret')}}</label>
        <input type="radio" name="gender" value="1" id="rdo_gender_man">
        <label for="rdo_gender_man">{{$t('label.gender_man')}}</label>
        <input type="radio" name="gender" value="2" id="rdo_gender_woman">
        <label for="rdo_gender_woman">{{$t('label.gender_woman')}}</label>
    </p>
</template>
<script>
export default {
    methods: {
        handleInput(event) {
            let value = event.target.value;
            this.$emit('input', value);
        }
    }
}
</script>