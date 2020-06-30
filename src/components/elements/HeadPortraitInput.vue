<template>
    <p>
        <img :src="imgSrc" :alt="$t('alt.head_protrait')">
        <input type="button" :value="$t('button.upload_head_protrait')">
    </p>
</template>
<script>
export default {
    data() {
        return {
            imgSrc: ''
        }
    }
}
</script>