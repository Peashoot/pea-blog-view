<template>
    <span v-if='required=="true"' class='required'>*</span>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class RequiredFlag extends Vue {
    /**
     * 是否必填
     */
    @Prop()
    required!: string
}
</script>
<style scoped>
.required {
    color:crimson
}
</style>