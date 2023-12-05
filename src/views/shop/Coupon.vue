<template>
    <div class="grid shop__coupon">
        <el-text size="large" class="shop__coupon-title">MÃ GIẢM GIÁ CỦA SHOP</el-text>
        <div class="grid__row list__coupon">
            <div class="grid__column-4 coupon__detail" v-for="(coupon, index) in coupons" :key="index">
                <el-space direction="vertical" class="coupon__info">
                    <el-text tag="p" class="text-primary">
                        Giảm <el-text tag="sup" class="text-primary">đ</el-text>{{ coupon.discount }}k
                    </el-text>
                    <el-text tag="p" class="text-primary">
                        Đơn Tối Thiểu <el-text tag="sup" class="text-primary">đ</el-text>{{ coupon.amountMinimum }}k
                    </el-text>
                    <el-text size="small">HSD: {{ coupon.expired }}</el-text>
                </el-space>
                <el-space style="" tag="div" class="save__coupon">
                    <button :class="'btn--save__coupon ' + (coupon.saved ? 'saved' : '')">Lưu</button>
                </el-space>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref } from "vue";

    const coupons = ref();
    coupons.value = [
        {
            discount: 3.5,
            amountMinimum: 80,
            expired: '31.10.2024',
            saved: true 
        },
        {
            discount: 3.5,
            amountMinimum: 80,
            expired: '31.10.2024',
            saved: false 
        },
        {
            discount: 3.5,
            amountMinimum: 80,
            expired: '31.10.2024',
            saved: false 
        },
        {
            discount: 3.5,
            amountMinimum: 80,
            expired: '31.10.2024',
            saved: false 
        },
        {
            discount: 3.5,
            amountMinimum: 80,
            expired: '31.10.2024',
            saved: false 
        },
        {
            discount: 3.5,
            amountMinimum: 80,
            expired: '31.10.2024',
            saved: false 
        },
        {
            discount: 3.5,
            amountMinimum: 80,
            expired: '31.10.2024',
            saved: false 
        }
    ];
</script>
<style scoped>
.shop__coupon {
    background-color: var(--white-color);
    padding: 20px 30px;
}

.list__coupon {
    max-height: 296px;
    overflow: auto;
}

.list__coupon::-webkit-scrollbar {
    width: 2px;
    height: 2px;
    border-radius: 2px;
}

.list__coupon::-webkit-scrollbar-thumb {
    background: var(--primary-color);
}

.shop__coupon-title {
    color: var(--text-color);
    font-size: 1.6rem;
}

.coupon__detail {
    margin: 20px 21px;
    background-color: rgb(255, 245, 245);
    border: 1px solid rgb(253, 229, 225);
    height: 108px;
    max-width: 340px;
    display: flex;
    align-items: center;
    position: relative;
}

.coupon__detail::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 100%;
    left: -6px;
    background: radial-gradient(circle at 0 .5rem, var(--white-color) .4rem, rgba(0,0,0,.03) .4rem,#fbc9c0 0, #fbc9c0 .5rem, transparent 0);
    background-repeat: repeat-y;
    background-size: 2rem 1.4rem;
    z-index: 1;
    overflow: hidden;
}

.coupon__detail::after {
    content: "";
    width: 6px;
    height: 100%;
    position: absolute;
    top: -1px;
    left: -6px;
    background-color: rgb(255, 245, 245);
    border: 1px solid rgb(253, 229, 225);
    border-right: none;
}

.coupon__info {
    flex: 1;
    display: inline-block;
    padding-left: 6px;
}

.save__coupon {
    border-left: 1px dotted #bababa;
    height: 100%;
    float: right;
    padding-left: 14px;
}

.btn--save__coupon {
    height: 28px;
    min-width: 60px;
    background-color: var(--primary-color);
    color: var(--white-color);
    border: none;
    border-radius: 2px;
    font-size: 1.4rem;
    cursor: pointer;
}

.saved {
    cursor: not-allowed;
    background-color: #ccc;
}

</style>