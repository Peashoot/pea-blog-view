<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <button @click="showAsChinese">中文</button>
    <button @click="showAsEnglish">English</button>
    <p>{{$t('template.welcome')}}</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    showAsChinese() {
      this.$i18n.locale = 'zh';
    },
    showAsEnglish() {
      this.$i18n.locale = 'en';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
