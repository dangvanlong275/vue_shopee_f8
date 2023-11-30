<template>
  <div class="header__cart">
    <i class="header__cart-icon fa-solid fa-cart-shopping"></i>
    <span class="header__cart-quantity">3</span>
    <div class="header__cart-content header__cart--no-cart">
      <template v-if="empty(cartProducts)">
        <img :src="noCart" alt="" class="header__cart--no-cart-img" />
        <span class="header__cart--no-cart-msg">Chưa Có Sản Phẩm</span>
      </template>
      <template v-else>
        <span class="header__cart-title">Sản phẩm đã thêm</span>
        <ul class="header__cart-list">
          <li
            v-for="cartProduct in cartProducts"
            :key="cartProduct.id"
            class="header__cart-item">
            <img :src="cartProduct.thumbnail" alt="" class="header__cart-img" />
            <div class="header__cart-item-info">
              <div class="header__cart-item-head">
                <h5 class="header__cart-item-name">{{ cartProduct.name }}</h5>
                <div class="header__cart-item-price-wrap">
                  <span class="header__cart-item-price">{{
                    formatAmount(cartProduct.price)
                  }}</span>
                  <span class="header__cart-item-multiply">x</span>
                  <span class="header__cart-item-quantity">{{
                    cartProduct.quantity
                  }}</span>
                </div>
              </div>
              <div class="header__cart-item-body">
                <span class="header__cart-item-description"
                  >Phân loại: {{ cartProduct.category }}</span
                >
                <span class="header__cart-item-remove">Xóa</span>
              </div>
            </div>
          </li>
        </ul>
        <div class="header__cart-show-btn">Xem giỏ hàng</div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
    import noCart from "@/assets/img/no-cart.png";
    import { empty, formatAmount } from "@/utils/CommonUtils";
    import { ref } from "vue";

    const cartProducts: Object[] = ref(JSON.parse(sessionStorage.getItem('cart_products') ?? ''));

</script>
<style scoped>
/* Header cart */
.header__cart {
  width: 150px;
  position: relative;
  text-align: center;
  line-height: 100%;
  cursor: pointer;
}

.header__cart-icon {
  color: var(--white-color);
  font-size: 2.6rem;
}

.header__cart-quantity {
  color: #ee4d2d;
  border: 2px solid #ee4d2d;
  font-size: 1.4rem;
  padding: 4px 7px;
  background-color: var(--white-color);
  border-radius: 10px;
  top: -10px;
  right: 44px;
  position: absolute;
}

.header__cart-content {
  position: absolute;
  background-color: var(--white-color);
  box-shadow: 0 1px 5px #9999;
  top: calc(100% + 10px);
  width: 400px;
  right: 44px;
  animation: headerNotifyGrowth ease-in 0.2s;
  transform-origin: calc(100% - 20px) top;
  display: none;
  z-index: 1;
}

.header__cart:hover .header__cart-content {
  display: block;
}

.header__cart-content::before {
  content: "";
  border-style: solid;
  border-color: transparent transparent var(--white-color) transparent;
  border-width: 20px 25px;
  position: absolute;
  top: -30px;
  right: 0;
}

.header__cart-content::after {
  content: "";
  height: 16px;
  width: 12%;
  position: absolute;
  top: -15px;
  right: 0;
}

.header__cart--no-cart {
  padding: 28px 0;
}

.header__cart--no-cart-img {
  width: 50%;
}

.header__cart--no-cart-msg {
  margin-top: 14px;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--text-color);
}

.header__cart-title {
  font-size: 1.4rem;
  font-weight: 300;
  color: #999;
  padding: 8px 12px;
  text-align: left;
  display: block;
}

.header__cart-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.header__cart-item {
  width: 100%;
  display: flex;
  align-items: center;
}

.header__cart-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.header__cart-img {
  width: 42px;
  height: 42px;
  margin: 12px;
}

.header__cart-item-info {
  width: 100%;
  margin-right: 12px;
}

.header__cart-item-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__cart-item-name {
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--text-color);
  margin: 0;
}

.header__cart-item-price {
  font-size: 1.4rem;
  color: var(--primary-color);
}

.header__cart-item-multiply {
  font-size: 1.2rem;
  color: #757575;
  margin: 0 8px;
}

.header__cart-item-quantity {
  font-size: 1.3rem;
  color: #757575;
}

.header__cart-item-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
}

.header__cart-item-description {
  font-size: 1.2rem;
  color: #999;
}

.header__cart-item-remove {
  font-size: 1.4rem;
  color: var(--text-color);
}

.header__cart-item-remove:hover {
  color: var(--primary-color);
  cursor: pointer;
}

.header__cart-show-btn {
  font-size: 1.4rem;
  color: var(--white-color);
  background-color: var(--primary-color);
  width: 124px;
  height: 34px;
  border-radius: var(--border-radius);
  line-height: 34px;
  text-align: center;
  margin: 8px 14px 14px 0;
  float: right;
  cursor: pointer;
}
</style>
