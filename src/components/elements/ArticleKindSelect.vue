<template>
    <span>
        <label for="cmb_article_kind">{{$t('label.article_kind')}}</label>
        <select name="article_kind" id="cmb_article_kind" v-model="selected" ref="cmb_article_kind"></select>
    </span>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Ref } from "vue-property-decorator";
@Component
export default class ArticleKindSelect extends Vue {
    /**
     * 上层传的值
     */
    @Prop()
    value!: string
    /**
     * 需要绑定的下拉框
     */
    @Prop()
    options!: Map<string, string>
    /**
     * 当前选中的内容
     */
    selected: string = this.value
    /**
     * 文章类型下拉框
     */
    @Ref('cmb_article_kind')
    cmbArticleKind!: HTMLSelectElement

    constructor() {
        super()
        let index = 0, temp = 0
        for (const key in this.options) {
            let optionCtrl = new HTMLOptionElement()
            optionCtrl.value = key
            optionCtrl.innerText = this.options[key]
            this.cmbArticleKind.options.add(optionCtrl)
            if (key === this.value) {
                index = temp
            }
            temp++;
        }
        this.cmbArticleKind.selectedIndex = index;
    }
}
</script>