<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <language lang="zh" langDesc="中文" @input="changeLang" />
    <language lang="en" langDesc="English" @input="changeLang" />
    <router-view/>
  </div>
</template>

<script lang='js'>
import { LanguageButton } from "./components/elements/index";
export default {
  name: 'App',
  data(){
    return {
      lang: 'zh'
    }
  },
  methods: {
    // 修改界面语言
    changeLang(event) {
      this.$i18n.locale = event;
    }
  },
  components: {
    "language": LanguageButton
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
