<template>
    <form method="post">
        <email v-model="email"></email>
        <username v-model="username"></username>
        <password v-model="password"></password>
        <passwordCheck v-model="pwd_check" :compare="password"></passwordCheck>
        <nickname></nickname>
        <gender></gender>
        <location></location>
        <head-protrait></head-protrait>
        <social-account></social-account>
        <telephone></telephone>
        <profile></profile>
    </form>
</template>
<script>
import {EmailInput, UsernameInput, PasswordInput, PasswordCheckInput,
LocationInput, GenderInput, HeadPortraitInput,SocialAccountInput, TelephoneInput,
NicknameInput,PersonalProfileInput
} from "@/components/elements";
export default {
    name: "Register",
    data: function () {
        return {
            email: '',
            username: '' ,
            password: '',
            pwd_check: false
        }
    },
    components: {
        "email": EmailInput,
        "username": UsernameInput,
        "password": PasswordInput,
        "passwordCheck": PasswordCheckInput,
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