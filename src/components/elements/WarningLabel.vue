<template>
    <span class="input-warning">{{warning}}</span>
</template>
<script>
export default {
    props: {
        warning: String
    }
}
</script>
<style scoped>
.input-warning {
    color:crimson
}
</style>