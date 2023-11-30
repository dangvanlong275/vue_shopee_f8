<template>
    <auth-form :handle-submit="signInSubmit" title="Đăng nhập"></auth-form>
    <div class="modal__more-sign-in">
        <el-link href="" :underline="false"><el-text type="primary" size="small">Quên mật khẩu</el-text></el-link>
        <el-link href="" :underline="false"><el-text type="primary" size="small">Đăng nhập với SMS</el-text></el-link>
    </div>
    <more-social></more-social>
    <div class="sign-up--new-customer">
        <el-text style="color: rgba(0, 0, 0, 0.26); height: 16px;">
            Bạn mới biết đến Shopee?
        </el-text>
        <el-link :underline="false" href="">
            <span class="text-primary sign-up-link">Đăng ký</span>
        </el-link>
    </div>
</template>
<script setup lang="ts">
    import AuthForm from '@/views/auth/AuthForm.vue';
    import MoreSocial from '@/views/auth/MoreSocial.vue';

    const signInSubmit = () => {
        alert('Đăng nhập thành công!')
    }
</script>
<style scoped>
.modal__sign-in {
    width: 402px;
    padding: 22px 32px;
    background-color: var(--white-color);
    border-radius: 4px;
    position: absolute;
    right: 22%;
}

.modal__more-sign-in {
    display: flex;
    justify-content: space-between;
}

.modal_sign-in--link:last-child {
    float: right;
}

.sign-up--new-customer {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 16px;
}
</style>