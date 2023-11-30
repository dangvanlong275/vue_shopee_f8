<template>
    <h4 class="modal__line-or">Hoặc</h4>
    <el-row class="modal__sign-in--social">
        <el-button class="modal__sign-in-via-facebook">
            <el-link :underline="false" href="" >
                <el-icon size="22px" class="fa-brands fa-facebook" style="color: #3676c9;"></el-icon>
                <el-text class="text-default">Facebook</el-text>
            </el-link>
        </el-button>
        <el-button class="modal__sign-in-via-google">
            <el-link :underline="false" href="">
                <el-icon size="22px" class="fa-brands fa-google" style="color: #e83b3b;"></el-icon>
                <el-text class="text-default">Google</el-text>
            </el-link>
        </el-button>
    </el-row>
</template>
<style scoped>
/* Social */
.modal__line-or {
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 400;
    color: #ccc;
    text-align: center;
    position: relative;
}

.modal__line-or::before {
    content: "";
    height: 1px;
    width: 40%;
    background-color: #ccc;
    position: absolute;
    top: 50%;
    left: 0;
}

.modal__line-or::after {
    content: "";
    height: 1px;
    width: 40%;
    background-color: #ccc;
    position: absolute;
    top: 50%;
    right: 0;
}

.modal__sign-in--social {
    display: flex;
    justify-content: space-between;
}

.modal__sign-in-via-facebook {
    width: 48%;
    height: 38px;
}

.modal__sign-in-via-google {
    width: 48%;
    height: 38px;
}
</style>