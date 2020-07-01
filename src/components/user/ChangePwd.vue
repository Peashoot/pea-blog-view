<template>
<div>
    <password></password>
    <confirm></confirm>
</div>
</template>
<script>
import { PasswordInput, PasswordCheckInput } from "@/components/elements";
export default {
    components: {
        "password": PasswordInput,
        "confirm": PasswordCheckInput
    }
}
</script>