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
<script lang='ts'>
import { UsernameOrEmailInput, PasswordInput, RememberCheck } from '../elements/index';
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