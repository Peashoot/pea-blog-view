<template>
    <span v-if='required=="true"' class='required'>*</span>
</template>
<script>
export default {
    props: {
        required: String
    }
}
</script>
<style scoped>
.required {
    color:crimson
}
</style>