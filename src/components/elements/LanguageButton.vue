<template>
    <button class="btn_language" @click="langChange">{{langDesc}}</button>
</template>
<script>
export default {
    props: {
        lang: String,
        langDesc: String
    },
    methods: {
        langChange: function(event) {
            this.$emit('input', this.lang);
        }
    }
}
</script>
<style scoped>

</style>