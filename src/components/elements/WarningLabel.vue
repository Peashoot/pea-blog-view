<template>
    <span class="input-warning">{{warning}}</span>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class WarningLabel extends Vue {
    /**
     * 上层传入的提示信息
     */
    @Prop()
    warning!: string
}
</script>
<style scoped>
.input-warning {
    color:crimson
}
</style>