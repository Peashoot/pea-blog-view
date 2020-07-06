<template>
    <div>
        <h1>{{title}}</h1>
        <p>
            <label for="lbl_author">{{ $t('label.author') }}</label>
            <label id="lbl_author">{{ author }}</label>
            <label for="lbl_publish_time">{{ $t('label.time_publish_timing') }}</label>
            <label id="lbl_publish_time">{{ publishTime.Format('yyyy-MM-dd HH:mm:ss') }}</label>
        </p>
    </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
@Component
export default class ArticleView extends Vue {
    /**
     * 标题
     */
    title: string = ''
    /**
     * 作者
     */
    author: string = ''
    /**
     * 正文
     */
    article: string = ''
    /**
     * 发布时间
     */
    publishTime: Date = new Date()
}
</script>