<template>
    <div class="grid">
        <div class="header__auth">
            <div class="header__auth-logo">
                <a href="" class="header__logo-link">
                    <logo fill="#ee4d2d"></logo>
                </a>
                <h4 class="header__logo-title">{{ title }}</h4>
            </div>
            <a href="" class="link-text text-primary">Bạn cần giúp đỡ?</a>
        </div>
    </div>
</template>
<script setup lang="ts">
    import Logo from "@/assets/img/Logo.vue";
    import { ref } from "vue";

    const title = ref('Đăng nhập');
</script>
<style scoped>
.header__auth-logo {
    display: flex;
    align-items: center;
}

.header__logo-title {
    margin: 0 14px;
    font-size: 2.6rem;
    font-weight: 400;
    color: var(--text-color);
}
.header__auth {
    height: 84px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

</style>