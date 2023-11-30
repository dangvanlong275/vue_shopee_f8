<template>
    <auth-form :handle-submit="signUpSubmit" title="Đăng ký"></auth-form>
    <more-social></more-social>
    <div class="sign-up-policy">
        <el-text size="small">
            Bằng việc đăng kí, bạn đã đồng ý với Shopee về 
            <el-link :underline="false" class="sign-up-policy--link">
                <el-text size="small" class="text-primary">Điều khoản sử dụng
                    <el-text size="small">&nbsp;&&nbsp;</el-text>
                </el-text>
            </el-link>
            <el-link :underline="false" class="sign-up-policy--link">
               <el-text size="small" class="text-primary">Chính sách bảo mật</el-text>
            </el-link>
        </el-text>
    </div>
    <div class="sign-up--new-customer">
        <el-text style="color: rgba(0, 0, 0, 0.26); height: 16px;">
            Bạn đã có tài khoản?&nbsp;
        </el-text>
        <el-link :underline="false" href="">
            <span class="text-primary">Đăng nhập</span>
        </el-link>
    </div>
</template>
<script setup lang="ts">
    import AuthForm from '@/views/auth/AuthForm.vue';
    import MoreSocial from '@/views/auth/MoreSocial.vue';

    const signUpSubmit = () => {
        alert('Đăng ký thành công!')
    }
</script>
<style scoped>
.sign-up-policy {
    margin-top: 30px;
    text-align: center;
}

.sign-up--new-customer {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 16px;
}
</style>