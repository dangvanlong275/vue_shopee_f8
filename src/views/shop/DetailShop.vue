<template>
    <base-header></base-header>
    <div class="shop__description">
        <div class="grid">
            <div class="grid__row">
                <div class="grid__column-4 shop__contact">
                    <el-row class="shop__info">
                        <div class="shop__image">
                            <el-image class="shop__avatar"
                                style="width:72px; height:72px;"
                                src="https://down-ws-vn.img.susercontent.com/vn-11134216-7r98o-loi377ebz16f45_tn.webp" 
                                fit="contain"
                            />
                            <el-text tag="p" class="shop__contact-favorite">Yêu Thích</el-text>
                        </div>
                        <el-space style="display: block;" direction="vertical">
                            <el-text class="shop__name">Dang Long Store</el-text>
                            <el-text size="small" class="shop__time-online">Online 3 giờ trước</el-text>
                        </el-space>
                    </el-row>
                    <el-row>
                        <el-button class="shop__btn">
                            <el-text>
                                <i class="shop__btn-icon fa-solid fa-plus"></i>
                                THEO DÕI
                            </el-text>
                        </el-button>
                        <el-button class="shop__btn">
                            <el-text>
                                <i class="shop__btn-icon fa-regular fa-message"></i>
                                CHAT
                            </el-text>
                        </el-button>
                    </el-row>
                </div>
                <div class="grid__column-4">
                    <el-space style="display: block;" direction="vertical" class="shop__description-info">
                        <el-text>
                            <i class="shop__btn-icon fa-solid fa-store"></i>
                            Sản Phẩm: <span class="text-primary">11</span>
                        </el-text>
                        <el-text>
                            <i class="shop__btn-icon fa-solid fa-user-plus"></i>
                            Đang Theo: <span class="text-primary">1</span>
                        </el-text>
                        <el-text>
                            <i class="shop__btn-icon fa-regular fa-comment-dots"></i>
                            Tỷ Lệ Phản Hồi Chat: <span class="text-primary"> 1% (Trong Vài Phút) </span>
                        </el-text>
                    </el-space>
                </div>
                <div class="grid__column-4">
                    <el-space style="display: block;" direction="vertical" class="shop__description-info">
                        <el-text>
                            <i class="shop__btn-icon fa-solid fa-user-group"></i>
                            Người Theo Dõi: <span class="text-primary">462</span>
                        </el-text>
                        <el-text>
                            <i class="shop__btn-icon fa-regular fa-star"></i>
                            Đánh Giá: 
                            <el-link href="" :underline="false">
                                <span class="text-primary">5.0 (10 Đánh Giá)</span>
                            </el-link>
                        </el-text>
                        <el-text>
                            <i class="shop__btn-icon fa-solid fa-user-check"></i>
                            Tham Gia: <span class="text-primary">21 Tháng Trước</span>
                        </el-text>
                    </el-space>
                </div>
            </div>
        </div>
    </div>
    <tab-item></tab-item>
    <div class="shop__detail">
        <coupon style="margin-bottom: 40px;"></coupon>
        <div class="grid">
            <div class="grid__row">
                <div class="grid__column-2">
                    <nav class="category">
                        <h3 class="category_title">
                            <i class="category__heading-icon fa-solid fa-list"></i>
                            Danh mục
                        </h3>
                        <ul class="category-list">
                            <li class="category-item category-item--active">
                                <a href="" class="category-item__link">
                                    Kem rửa mặt
                                </a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item__link">
                                    Sửa rửa mặt
                                </a>
                            </li>
                            <li class="category-item">
                                <a href="" class="category-item__link">
                                    Top bán chạy nhất
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="grid__column-10">
                    <div class="home-filter">
                        <span class="home-filter__lable">Sắp xếp theo</span>
                        <button class="home-filter__btn btn">Phổ biến</button>
                        <button class="home-filter__btn btn btn--active">Mới nhất</button>
                        <button class="home-filter__btn btn">Bán chạy</button>
                        <div class="select-input">
                            <span class="select-input__label">Giá</span>
                            <i class="select-input-icon fa-solid fa-chevron-down"></i>
                            <ul class="select-input__list">
                                <li class="select-input__item">
                                    <a href="#" class="select-input__link">
                                        Giá: Thấp đến cao
                                    </a>
                                </li>
                                <li class="select-input__item">
                                    <a href="#" class="select-input__link">
                                        Giá: Cao đến thấp
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="home-filter__page">
                            <span class="home-filter__num">
                                <span class="home-filter__page--current">1</span>/14
                            </span>
                            <div class="home-filter__control">
                                <a href="" class="home-filter__page--btn home-filter__page--disable">
                                    <i class="home-filter__page-icon fa-solid fa-angle-left"></i>
                                </a>
                                <a href="" class="home-filter__page--btn">
                                    <i class="home-filter__page-icon fa-solid fa-angle-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="home-body">
                        <div class="grid__row">
                            <product v-for="(product, index) in products" :key="index" :product="product"/>
                        </div>
                    </div>
                    <pagination></pagination>
                </div>
            </div>
        </div>
    </div>
    <base-footer></base-footer>
</template>
<script setup lang="ts">
    import BaseHeader from '@/views/layout/Header.vue';
    import BaseFooter from '@/views/layout/Footer.vue';
    import Product from '@/views/product/Product.vue';
    import Pagination from '@/views/layout/Pagination.vue';
    import TabItem from '@/components/TabItem.vue';
    import Coupon from '@/views/shop/Coupon.vue';
    import { ref } from 'vue';

    const products = ref([
        {
            id: 1,
            name: 'Gói kem chống nắng dưỡng trắng nâng tone da trắng hồng Whoo Radiant White Tone Up Sunscreen',
            image: "https://down-vn.img.susercontent.com/file/fd713159c141347db3cafa19ffc71ecf_tn",
            priceOld: 1200000,
            priceCurrent: 1000000,
            currency: 'vnd',
            like: true,
            rating: 4,
            sold: 56,
            brand: 'Whoo',
            originName: 'Japan',
            percentSalefOff: 10,
            favorite: true,
        },
        {
            id: 2,
            name: 'Gói kem chống nắng dưỡng trắng nâng tone da trắng hồng Whoo Radiant White Tone Up Sunscreen',
            image: "https://down-vn.img.susercontent.com/file/fd713159c141347db3cafa19ffc71ecf_tn",
            priceOld: 1200000,
            priceCurrent: 1000000,
            currency: 'vnd',
            like: true,
            rating: 3,
            sold: 56,
            brand: 'Whoo',
            originName: 'American',
            percentSalefOff: 10,
            favorite: false,
        },
        {
            id: 3,
            name: 'Gói kem chống nắng dưỡng trắng nâng tone da trắng hồng Whoo Radiant White Tone Up Sunscreen',
            image: "https://down-vn.img.susercontent.com/file/fd713159c141347db3cafa19ffc71ecf_tn",
            priceOld: 1200000,
            priceCurrent: 1000000,
            currency: 'vnd',
            like: false,
            rating: 4,
            sold: 56,
            brand: 'Whoo',
            originName: 'Japan',
            percentSalefOff: 0,
            favorite: true,
        },
        {
            id: 1,
            name: 'Gói kem chống nắng dưỡng trắng nâng tone da trắng hồng Whoo Radiant White Tone Up Sunscreen',
            image: "https://down-vn.img.susercontent.com/file/fd713159c141347db3cafa19ffc71ecf_tn",
            priceOld: 1200000,
            priceCurrent: 1000000,
            currency: 'vnd',
            like: true,
            rating: 4,
            sold: 56,
            brand: 'Whoo',
            originName: 'Japan',
            percentSalefOff: 10,
            favorite: true,
        },
        {
            id: 2,
            name: 'Gói kem chống nắng dưỡng trắng nâng tone da trắng hồng Whoo Radiant White Tone Up Sunscreen',
            image: "https://down-vn.img.susercontent.com/file/fd713159c141347db3cafa19ffc71ecf_tn",
            priceOld: 1200000,
            priceCurrent: 1000000,
            currency: 'vnd',
            like: true,
            rating: 3,
            sold: 56,
            brand: 'Whoo',
            originName: 'American',
            percentSalefOff: 10,
            favorite: false,
        },
        {
            id: 3,
            name: 'Gói kem chống nắng dưỡng trắng nâng tone da trắng hồng Whoo Radiant White Tone Up Sunscreen',
            image: "https://down-vn.img.susercontent.com/file/fd713159c141347db3cafa19ffc71ecf_tn",
            priceOld: 1200000,
            priceCurrent: 1000000,
            currency: 'vnd',
            like: false,
            rating: 4,
            sold: 56,
            brand: 'Whoo',
            originName: 'Japan',
            percentSalefOff: 0,
            favorite: true,
        }
    ]);
</script>
<style scoped>
    @import url(@/assets/css/shop/detail-shop.css);
</style>