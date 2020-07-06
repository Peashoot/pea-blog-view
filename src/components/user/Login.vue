<template>
    <div>
        <nameoremail v-model="nameOrEmail"  required="true" :showWarning="emptyAccount" id='nameOrEmail' />
        <password v-model="password"  required="true" :showWarning="emptyPassword" />
        <p>
        <rememberme v-model="rememberme" />
        <input type="submit" v-bind:value="$t('button.login')" v-on:click="userLogin">
        </p>
        <div>{{nameOrEmail}}</div>
    </div>
</template>
<script lang='ts'>
import { UsernameOrEmailInput, PasswordInput, RememberCheck } from '@/components/elements/index';
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    "nameoremail": UsernameOrEmailInput,
    "password": PasswordInput,
    "rememberme": RememberCheck,
  },
})
export default class Login extends Vue {
  /**
   * 用户名或邮箱
   */
  nameOrEmail: string = ''
  /**
   * 密码
   */
  password: string = ''
  /**
   * 记住我
   */
  rememberme: boolean = true
  /**
   * 账号是否为空
   */
  emptyAccount: boolean = false
  /**
   * 密码是否为空
   */
  emptyPassword: boolean = false
  /**
   * 用户登录（POST请求）
   */
  userLogin() {
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