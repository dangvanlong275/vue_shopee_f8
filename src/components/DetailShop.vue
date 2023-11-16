<template>
    <div class="grid">
        <div class="grid__row detail_shop">
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
</template>
<script setup lang="ts">
    import Product from '@/components/Product.vue';
    import Pagination from '@/components/layout/Pagination.vue';
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
        }
    ]);
</script>
<style scoped>
    @import url(@/assets/css/shop/detail-shop.css);
</style>