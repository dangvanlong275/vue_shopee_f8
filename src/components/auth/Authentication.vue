<template>
    <div class="header__auth">
        <div class="header__auth-logo">
            <logo></logo>
        </div>
        <h4>{{ title }}</h4>
        <a href="" class="header__auth-support">Bạn cần giúp đỡ?</a>
    </div>
    <div class="auth__content">
        <sign-in></sign-in>
    </div>
</template>
<script setup lang="ts">
    import Logo from "@/assets/img/Logo.vue";
    import SignIn from "@/components/auth/SignIn.vue";
    import { ref } from "vue";

    const title = ref('Đăng ký');
</script>
<style scoped>

</style>