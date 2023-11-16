<template>
    <div class="grid__column-2-4" :key="key">
        <a class="product-item" href="">
            <div class="product-item__img" :style="'background-image: url(' + product.image + ');'"></div>
            <h4 class="product-item__name">{{ product.name }}</h4>
            <div class="product-item__price">
                <span class="product-item__price-old">{{ formatAmount(product.priceOld, product.currency) }}</span>
                <span class="product-item__price-current">{{ formatAmount(product.priceCurrent, product.currency) }}</span>
            </div>
            <div class="product-item__action">
                <div :class="'product-item__like ' + (product.like ? 'product-item__like--like' : '')">
                    <i class="product-item__like-icon-empty fa-regular fa-heart"></i>
                    <i class="product-item__like-icon-fill fa-solid fa-heart"></i>
                </div>
                <div class="product-item__rating">
                    <i v-for="num in product.rating" :key="num" class="product-item__star-gold fa-solid fa-star"></i>
                    <i v-for="num in (5 - product.rating)" :key="num" class="fa-regular fa-star"></i>
                </div>
                <span class="product-item__sold">{{ product.sold }} đã bán</span>
            </div>
            <div class="product-item__origin">
                <span class="product-item__brand">{{ product.brand }}</span>
                <span class="product-item__origin-name">{{ product.originName }}</span>
            </div>
            <div v-show="product.favorite" class="product-item__favorite">
                <i class="fa-solid fa-check"></i>
                Yêu thích
            </div>
            <div v-if="product.percentSalefOff > 0" class="product-item__sale-off">
                <span class="product-item__sale-off-percent">{{ `${product.percentSalefOff}%` }}</span>
                <br>
                <span class="product-item__sale-off-label">GIẢM</span>
            </div>
        </a>
    </div>
</template>
<script setup lang="ts">
    import { formatAmount } from '@/utils/CommonUtils';
 
    defineProps(['key', 'product']);
</script>
<style scoped>
    @import url(@/assets/css/product/product.css);
</style>