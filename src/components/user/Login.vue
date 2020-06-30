<template>
    <form id="login-form" method="post">
        <username v-model="username"></username>
        <password v-model="password"></password>
        <p>
        <rememberme v-model="rememberme"></rememberme>
        <input type="submit" v-bind:value="$t('button.login')" v-on:click="userLogin">
        </p>
      <div>{{password}}</div>
    </form>
</template>
<script>
import UsernameInput from "../elements/UsernameInput";
import PasswordInput from "../elements/PasswordInput";
import RememberCheck from "../elements/RememberCheck";
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      rememberme: false
    }
  },
  methods: {
      userLogin() {
        this.$axios.get("https://www.baidu.com/")
        .then(res => {
            console.log("接收到返回信息：", res);
        });
      }
  },
  components: {
    "username": UsernameInput,
    "password": PasswordInput,
    "rememberme": RememberCheck
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>