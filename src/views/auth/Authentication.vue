<template>
    <auth-header></auth-header>
    <div class="modal__auth">
        <div class="modal__auth-form">
            <router-view/>
        </div>
    </div>
    <base-footer></base-footer>
</template>
<script setup lang="ts">
    import AuthHeader from '@/views/auth/AuthHeader.vue';
    import BaseFooter from '@/views/layout/Footer.vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    console.log(route.meta, route.path);
</script>
<style scoped>

.modal__auth {
    background-color: rgb(238, 77, 45);
    background-image: url(@/assets/img/background-auth.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    height: 600px;
    position: relative;
    display: flex;
    align-items: center;
}

.modal__auth-form {
    width: 402px;
    padding: 22px 32px;
    background-color: var(--white-color);
    border-radius: 4px;
    position: absolute;
    right: 22%;
}
</style>