<template>
    <header class="header">
        <div class="grid">
            <div class="header__navbar">
                <ul class="header__navbar-list">
                    <li class="header__navbar-item header__navbar-item--separate">
                        Kênh Người Bán
                    </li>
                    <li class="header__navbar-item header__navbar-item--separate">
                        Trở thành Người bán Shopee
                    </li>
                    <li class="header__navbar-item header__navbar-item--has-qr header__navbar-item--separate">
                        Tải ứng dụng
                        <div class="header__navbar-download">
                            <img :src="qrCode" alt="" class="header__navbar-download--qr">
                            <div class="header__navbar-download--apps">
                                <a href="" class="header__navbar-download-link">
                                    <img :src="playStore" alt="Play Store" class="header__qr-download-img"></a>
                                <a href="" class="header__navbar-download-link">
                                    <img :src="appStore" alt="App Store" class="header__qr-download-img"></a>
                            </div>
                        </div>
                    </li>
                    <li class="header__navbar-item">
                        <span class="header__navbar-title--no-pointer">Kết nối</span>
                        <a href="" class="header__navbar-link"><i class="fa-brands fa-facebook"></i></a>
                        <a href="" class="header__navbar-link"><i class="fa-brands fa-instagram"></i></a>
                    </li>
                </ul>
                <ul class="header__navbar-list">
                    <li class="header__navbar-item">
                        <i class="fa-regular fa-bell"></i>
                        Thông báo
                        <header-notify></header-notify>
                    </li>
                    <li class="header__navbar-item">
                        <i class="fa-sharp fa-solid fa-circle-question"></i>
                        Hỗ trợ
                    </li>
                    <li class="header__navbar-item">
                        <i class="fa-solid fa-globe"></i>
                        Tiếng Việt
                        <i class="fa-solid fa-chevron-down"></i>
                    </li>
                    <!-- <li class="header__navbar-item header__navbar-item--strong header__navbar-item--separate">
                        Đăng ký
                    </li>
                    <li class="header__navbar-item header__navbar-item--strong">
                        Đăng nhập
                    </li> -->
                    <navbar-customer></navbar-customer>
                </ul>
            </div>
            <div class="header-with-search">
                <div class="header__logo">
                    <a href="" class="header__logo-link">
                        <logo fill="#fff"></logo>
                    </a>
                </div>
                <header-search></header-search>
                <header-cart></header-cart>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
    import qrCode from '@/assets/img/qr-download.png';
    import playStore from '@/assets/img/play-store.png';
    import appStore from '@/assets/img/app-store.png';
    import Logo from '@/assets/img/Logo.vue';
    import HeaderNotify from '@/views/layout/HeaderNotify.vue';
    import HeaderSearch from '@/views/layout/HeaderSearch.vue';
    import HeaderCart from '@/views/layout/HeaderCart.vue';
    import NavbarCustomer from '@/views/layout/customer/NavbarCustomer.vue';
</script>
<style scoped>
    @import url(@/assets/css/header.css);
</style>