<template>
<div>
    <password v-model="password" required="true" :showWarning="emptyPassword" />
    <confirm v-model="pwd_check" :compare="password" required="true" />
</div>
</template>
<script lang='ts'>
import { PasswordInput, PasswordCheckInput } from "@/components/elements";
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
    components: {
        "password": PasswordInput,
        "confirm": PasswordCheckInput
    }
})

export default class ChangePwd extends Vue {
    /**
     * 密码
     */
    password: string = ''
    /**
     * 二次检查密码
     */
    pwd_check: boolean = false
    /**
     * 密码是否为空
     */
    emptyPassword: boolean = false
    /**
     * 用户名
     */
    @Prop()
    username: string = ''
}
</script>
<style>
.required {
    visibility: hidden;
}
</style>
<style scoped>

</style>