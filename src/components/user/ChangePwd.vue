<template>
<div>
    <password v-model="password" required="true" :showWarning="emptyPassword" />
    <confirm v-model="pwd_check" :compare="password" required="true" />
</div>
</template>
<script>
import { PasswordInput, PasswordCheckInput } from "@/components/elements";
export default {
    data() {
        return {
            password: '',
            pwd_check: false,
            emptyPassword: false
        }
    },
    props: {
        username: String
    },
    components: {
        "password": PasswordInput,
        "confirm": PasswordCheckInput
    }
}
</script>
<style>
.required {
    visibility: hidden;
}
</style>
<style scoped>

</style>