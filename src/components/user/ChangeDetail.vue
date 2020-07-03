<template>
<div>
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
import { LocationInput, GenderInput, HeadPortraitInput,SocialAccountInput
, TelephoneInput, NicknameInput,PersonalProfileInput } from "@/components/elements";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
    components: {
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
     * 昵称
     */
    nickname: string = ''
    /**
     * 性别
     */
    gender:  string = "0"
    /**
     * 地区
     */
    location:  string = ''
    /**
     * 头像链接
     */
    headProtrait:  string = ''
    /**
     * 社交账号
     */
    socialAccount:  string = ''
    /**
     * 联系电话
     */
    telephone:  string = ''
    /**
     * 个人简介
     */
    profile:  string = ''
    /**
     * 个人简介长度限制
     */
    limitLength: number = 300
    /**
     * 昵称是否为空
     */
    emptyNickname: boolean = false
    /**
     * 用户名
     */
    @Prop({default: ''})
    username: string

    constructor() {
        super()
        this.username = ''
    }
}
</script>