<template>
    <footer class="footer">
        <div class="grid">
            <div class="grid__row">
                <div class="grid__column-2-4">
                    <h4 class="footer__heading">CHĂM SÓC KHÁCH HÀNG</h4>
                    <ul class="footer__list">
                        <li v-for="(supportCustomer, index) in supportCustomers" :key="index" class="footer-item">
                            <a href="" class="footer-item__link">{{ supportCustomer }}</a>
                        </li>
                    </ul>
                </div>
                <div class="grid__column-2-4">
                    <h4 class="footer__heading">VỀ SHOPEE</h4>
                    <ul class="footer__list">
                        <li v-for="(aboutShopee, index) in aboutShopees" :key="index" class="footer-item">
                            <a href="" class="footer-item__link">{{ aboutShopee }}</a>
                        </li>
                    </ul>
                </div>
                <div class="grid__column-2-4">
                    <h4 class="footer__heading">THANH TOÁN</h4>
                    <ul class="footer-payment-method__list">
                        <li v-for="(paymentMethod, index) in paymentMethods" class="footer-payment-method-item" :key="index">
                            <a target="_blank" src="" class="footer-payment-method__link">
                                <img :src="paymentMethod" alt="logo">
                            </a>
                        </li>
                    </ul>
                    <h4 class="footer__heading">ĐƠN VỊ VẬN CHUYỂN</h4>
                    <ul class="footer-delivery__list">
                        <li v-for="(delivery, index) in deliveries" :key="index" class="footer-delivery-item">
                            <a target="_blank" class="footer-delivery-item__link">
                                <img :src="delivery" alt="logo">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="grid__column-2-4">
                    <h4 class="footer__heading">THEO DÕI CHÚNG TÔI TRÊN</h4>
                    <ul class="footer__list">
                        <li v-for="(followLink, index) in followLinks" :key="index" class="footer-item">
                            <i :class="'footer-item__icon fa-brands ' + followLink.icon"></i>
                            <a :href="followLink.url" class="footer-item__link">{{ followLink.name }}</a>
                        </li>
                    </ul>
                </div>
                <div class="grid__column-2-4">
                    <h4 class="footer__heading">TẢI ỨNG DỤNG SHOPEE NGAY THÔI</h4>
                    <div class="footer__download">
                        <img :src="qrCode" alt="" class="footer__download-qr">
                        <div class="footer__download-apps">
                            <img :src="playStore" alt="" class="footer__download-app-icon">
                            <img :src="appStore" alt="" class="footer__download-app-icon">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
    import qrCode from '@/assets/img/qr-download.png';
    import playStore from '@/assets/img/play-store.png';
    import appStore from '@/assets/img/app-store.png';
    import { reactive } from 'vue';

    const supportCustomers = reactive([
        'Trung Tâm Trợ Giúp',
        'Shopee Blog',
        'Shopee Mall',
        'Hướng Dẫn Mua Hàng',
        'Hướng Dẫn Bán Hàng'
    ]);

    const aboutShopees = reactive([
        'Giới thiệu về Shopee Việt Nam',
        'Tuyển Dụng',
        'Điều Khoản Shopee',
        'Chính Sách Bảo Mật',
        'Flash Sales'
    ]);

    const paymentMethods = reactive({
        visa: "https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8",
        masterCard: "https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16",
        jcb: "https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08",
        americanExpress: "https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c",
        cod: "https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281",
        amortization: "https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09",
        spay: "https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06",
        spayLater: "https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492"
    });

    const deliveries = reactive({
        spx: "https://down-vn.img.susercontent.com/file/vn-50009109-159200e3e365de418aae52b840f24185",
        giaoHangNhanh: "https://down-vn.img.susercontent.com/file/d10b0ec09f0322f9201a4f3daf378ed2",
        ghn: "https://down-vn.img.susercontent.com/file/77bf96a871418fbc21cc63dd39fb5f15",
        viettelPosts: "https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f",
        vietnamPost: "https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c",
        JandT: "https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63",
        grab: "https://down-vn.img.susercontent.com/file/3900aefbf52b1c180ba66e5ec91190e5",
        ninjaVan: "https://down-vn.img.susercontent.com/file/6e3be504f08f88a15a28a9a447d94d3d",
        bestExpress: "https://down-vn.img.susercontent.com/file/b8348201b4611fc3315b82765d35fc63",
        be: "https://down-vn.img.susercontent.com/file/0b3014da32de48c03340a4e4154328f6",
        alamove: "https://down-vn.img.susercontent.com/file/vn-50009109-ec3ae587db6309b791b78eb8af6793fd"
    });

    const followLinks = reactive([
        { icon: 'fa-facebook', name: 'Facebook', url: '' },
        { icon: 'fa-square-instagram', name: 'Instagram', url: '' },
        { icon: 'fa-linkedin', name: 'LinkedIn', url: '' }
    ]);

</script>
<style scoped>
    @import url(@/assets/css/footer.css);
</style>