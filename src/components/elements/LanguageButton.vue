<template>
    <button class="btn_language" @click="langChange">{{langDesc}}</button>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class extends Vue {
    /**
     * 语言代码
     */
    @Prop()
    lang!: string
    /**
     * 语言描述
     */
    @Prop()
    langDesc!: string
    /**
     * 修改语言版本
     */
    langChange(event) {
        this.$i18n.locale = this.lang;
    }
}
</script>
<style scoped>

</style>