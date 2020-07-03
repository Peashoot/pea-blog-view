<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <language lang="zh" langDesc="中文" />
    <language lang="en" langDesc="English" />
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
