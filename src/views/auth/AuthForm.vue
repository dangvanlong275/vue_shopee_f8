<template>
    <el-form ref="formDataRef" :model="formData" :rules="rulesForm">
        <el-form-item class="modal__form-item" prop="username">
            <el-input  class="modal__input-username" v-model="formData.username" placeholder="Email/Số điện thoại/Tên đăng nhập"/>
        </el-form-item>
        <el-form-item class="modal__form-item" prop="password">
            <el-input class="form-input modal__input-password" v-model="formData.password" type="pass" placeholder="Mật khẩu"/>
        </el-form-item>
        <el-form-item class="modal__form-item">
            <el-button class="form-input form-input-submit" type="success" @click="handleSubmit">{{ title }}</el-button>
        </el-form-item>
    </el-form>
</template>
<script setup lang="ts">
    import { FormInstance, FormRules } from 'element-plus';
    import { reactive, ref } from 'vue';

    defineProps(['title', 'handleSubmit']);

    const formDataRef = ref<FormInstance>();

    const formData = reactive({
        username: '',
        password: '',
    });

    const rulesForm = reactive<FormRules<typeof formData>>({
        username: [{required: true, message: 'Vui lòng điền vào mục này.', trigger: ['blur', 'change'] }],
        password: [{required: true, message: 'Vui lòng điền vào mục này.', trigger: 'blur' }]
    })
</script>
<style scoped>
.form-input-submit {
    background-color: var(--primary-color);
    border: none;
    width: 100%;
}

.form-input-submit:hover {
    opacity: 0.7;
}

</style>