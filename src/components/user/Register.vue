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
<script>
import {EmailInput, UsernameInput, PasswordInput, PasswordCheckInput,
LocationInput, GenderInput, HeadPortraitInput,SocialAccountInput, TelephoneInput,
NicknameInput,PersonalProfileInput
} from "@/components/elements";
export default {
    name: "Register",
    data() {
        return {
            email: '',
            username: '',
            password: '',
            pwd_check: false,
            nickname: '',
            gender: "0",
            location: '',
            headProtrait: '',
            socialAccount: '',
            telephone: '',
            profile: '',
            limitLength: 300,
            emptyUsername: false,
            emptyNickname: false,
            emptyPassword: false,
            emptyEmail: false
        }
    },
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
}
</script>
<style scoped>

</style>