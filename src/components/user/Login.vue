<template>
    <div>
        <nameoremail v-model="nameOrEmail"  required="true" :showWarning="emptyAccount" />
        <password v-model="password"  required="true" :showWarning="emptyPassword" />
        <p>
        <rememberme v-model="rememberme" />
        <input type="submit" v-bind:value="$t('button.login')" v-on:click="userLogin">
        </p>
    </div>
</template>
<script>
import { UsernameOrEmailInput, PasswordInput, RememberCheck } from "@/components/elements";
export default {
  name: 'Login',
  data () {
    return {
      nameOrEmail: '',
      password: '',
      rememberme: true,
      emptyAccount: false,
      emptyPassword: false
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
    "nameoremail": UsernameOrEmailInput,
    "password": PasswordInput,
    "rememberme": RememberCheck
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.required {
    visibility:hidden;
}
</style>
<style scoped>

</style>