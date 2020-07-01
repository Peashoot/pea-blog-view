<template>
    <p>
        <img :src="imgSrc" :alt="$t('alt.head_protrait')">
        <button @click="uploadHeadProtrait">{{$t('button.upload_head_protrait')}}</button>
    </p>
</template>
<script>
export default {
    data() {
        return {
            imgSrc: ''
        }
    },
    methods: {
        uploadHeadProtrait: function() {
            this.imgSrc = 'https://www.cnblogs.com/images/logo_small.gif';
        }
    }
}
</script>