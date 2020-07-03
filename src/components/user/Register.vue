<template>
    <div>
        <email v-model="email" required="true" :showWarning="emptyEmail" />
        <username v-model="username" required="true" :showWarning="emptyUsername" />
        <password v-model="password" required="true" :showWarning="emptyPassword" />
        <confirm v-model="pwd_check" :compare="password" required="true" />
        <nickname v-model="nickname" required="true" :showWarning="emptyNickname" />
        <gender v-model="gender" />
        <location v-model="location" />
        <head-protrait v-model="headProtrait" />
        <social-account v-model="socialAccount" />
        <telephone v-model="telephone" />
        <profile v-model="profile" :limitLength="limitLength" />
    </div>
</template>
<script lang='ts'>
import { EmailInput, UsernameInput, PasswordInput, PasswordCheckInput,
LocationInput, GenderInput, HeadPortraitInput,SocialAccountInput, TelephoneInput,
NicknameInput,PersonalProfileInput } from "@/components/elements";
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {
        "email": EmailInput,
        "username": UsernameInput,
        "password": PasswordInput,
        "confirm": PasswordCheckInput,
        "nickname": NicknameInput,
        "gender": GenderInput,
        "location": LocationInput,
        "headProtrait": HeadPortraitInput,
        "socialAccount":SocialAccountInput,
        "telephone": TelephoneInput,
        "profile": PersonalProfileInput
    }
})

export default class extends Vue {
    /**
     * 邮箱
     */
    email: string = ''
    /**
     * 用户名
     */
    username: string = ''
    /**
     * 密码
     */
    password: string = ''
    /**
     * 二次密码校验
     */
    pwd_check: boolean = false
    /**
     * 昵称
     */
    nickname: string = ''
    /**
     * 性别
     */
    gender: string = "0"
    /**
     * 地区
     */
    location: string = ''
    /**
     * 头像链接
     */
    headProtrait: string = ''
    /**
     * 社交账号
     */
    socialAccount: string = ''
    /**
     * 手机号
     */
    telephone: string = ''
    /**
     * 个人简介
     */
    profile: string = ''
    /**
     * 个人简介限制长度
     */
    limitLength: number = 300
    /**
     * 用户名是否为空
     */
    emptyUsername: boolean = false
    /**
     * 昵称是否为空
     */
    emptyNickname: boolean = false
    /**
     * 密码是否为空
     */
    emptyPassword: boolean = false
    /**
     * 邮箱是否为空
     */
    emptyEmail: boolean = false
    
}
</script>
<style scoped>

</style>