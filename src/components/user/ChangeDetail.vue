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
<script>
import {LocationInput, GenderInput, HeadPortraitInput,SocialAccountInput
, TelephoneInput, NicknameInput,PersonalProfileInput
} from "@/components/elements";
export default {
    name: "ChangeDetail",
    data() {
        return {
            nickname: '',
            gender: "0",
            location: '',
            headProtrait: '',
            socialAccount: '',
            telephone: '',
            profile: '',
            limitLength: 300,
            emptyNickname: false
        }
    },
    props: {
        username: String
    },
    components: {
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