<template>
    <p>
        <img :src="imgSrc" :alt="$t('alt.head_protrait')">
        <button @click="uploadHeadProtrait">{{$t('button.upload_head_protrait')}}</button>
    </p>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
@Component
export default class extends Vue {
    /**
     * 头像链接
     */
    imgSrc: string = ''

    /**
     * 上传头像到服务器
     */
    uploadHeadProtrait() {
        this.imgSrc = 'https://www.cnblogs.com/images/logo_small.gif';
    }
}
</script>