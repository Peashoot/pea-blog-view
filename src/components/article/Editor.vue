<template>
    <div>
        <p>
            <span>
                <require required="true"/>
                <label for="txt_title">{{$t('label.title')}}</label>
                <input type="text" name="title" id="txt_title" v-model="title" :placeholder="$t('placeholder.title')">
                <warning v-if="isEmptyTitle" :warning="$t('prompt.empty_title')"/>
            </span>
            <span>
                <require required="true"/>
                <label for="txt_author">{{$t('label.author')}}</label>
                <input type="text" name="author" id="txt_author" v-model="author" :placeholder="$t('placeholder.author')">
                <warning v-if="isEmptyAuthor" :warning="$t('prompt.empty_author')"/>
            </span>
        </p>
        <p> 
            <span>
                <require required="true"/>
                <label for="txt_keyword">{{$t('label.keyword')}}</label>
                <input type="text" name="keyword" id="txt_keyword" v-model="keyword" :placeholder="$t('placeholder.keyword')">
                <warning v-if="isEmptyKeyword" :warning="$t('prompt.empty_keyword')"/>
            </span>
        </p>
        <p>
            <label for="txt_profile">{{$t('label.article_profile')}}</label>
            <textarea name="profile" id="txt_profile" cols="30" rows="10" v-model="profile" :placeholder="$t('placeholder.article_profile')"></textarea>
        </p>
        <mavon-editor v-model="article"/>
        <p>
            <label for="publish_type">{{$t('label.publish_type')}}</label>
            <input type="radio" name="publish_type" id="rdo_publish_immediately" value="0">
            <label for="rdo_publish_immediately">{{$t('label.publish_immediately')}}</label>
            <input type="radio" name="publish_type" id="rdo_publish_storage" value="1">
            <label for="rdo_publish_storage">{{$t('label.publish_storage')}}</label>
            <input type="radio" name="publish_type" id="rdo_publish_timing" value="2">
            <label for="rdo_publish_timing">{{$t('label.publish_timing')}}</label>
            <label v-if="publishType === '2'" for="time_publish_timing">{{$t('label.time_publish_timing')}}</label>
            <input v-if="publishType === '2'" type="time" name="publish_timing" id="time_publish_timing">
        </p>
        <button type="submit">{{$t('button.save_article')}}</button>
    </div>
</template>
<script lang='ts'>
import { RequiredFlag, WarningLabel } from "@/components/elements";
import { Component, Vue } from "vue-property-decorator";
@Component({
    components: {
        "require": RequiredFlag,
        "warning": WarningLabel
    }
})
export default class Editor extends Vue {
    /**
     * 当前编辑内容
     */
    article: string = ''
    /**
     * 作者
     */
    author: string = ''
    /**
     * 标题
     */
    title: string = ''
    /**
     * 关键字
     */
    keyword: string = ''
    /**
     * 发布类型 0 立即发布 1 暂存不发布 2 定时发布
     */
    publishType: string  = '0'
    /**
     * 文章简介
     */
    profile: string = ''
}
</script>