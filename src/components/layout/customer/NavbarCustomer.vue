<template>
  <li class="header__navbar-item header__navbar-user">
    <img
      :src="customer.avatar"
      alt=""
      class="header__navbar-user-img" />
    <span class="header__navbar-user-name">{{ customer.name }}</span>
    <ul class="header__navbar-user-menu">
      <li class="header__navbar-user-item">
        <a href="" class="header__navbar-user-link">Tài khoản của tôi</a>
      </li>
      <li class="header__navbar-user-item">
        <a href="" class="header__navbar-user-link">Địa chỉ của tôi</a>
      </li>
      <li class="header__navbar-user-item">
        <a href="" class="header__navbar-user-link">Đơn mua</a>
      </li>
      <li class="header__navbar-user-item header__navbar-user-item--separate">
        <a href="" class="header__navbar-user-link">Đăng xuất</a>
      </li>
    </ul>
  </li>
</template>
<script setup lang="ts">
    import { ref } from "vue";

    const customer = ref();
    customer.value = {
        id: 1,
        name: 'Long DV',
        avatar: 'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png',
    };
</script>
<style scoped>
.header__navbar-user {
  display: flex;
  align-items: center;
}

.header__navbar-user-img {
  width: 23px;
  height: 23px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-right: 8px;
}

.header__navbar-user-menu {
  position: absolute;
  list-style: none;
  top: calc(100% + 16px);
  width: 160px;
  right: 0;
  padding-left: 0;
  background-color: var(--white-color);
  box-shadow: 0 0 8px -1px var(--black-color);
  animation: headerNotifyGrowth ease-in 0.2s;
  transform-origin: calc(100% - 20px) top;
  border-radius: var(--border-radius);
  display: none;
  z-index: 1;
}

.header__navbar-user:hover .header__navbar-user-menu {
  display: block;
}
.header__navbar-user-menu::before {
  content: "";
  position: absolute;
  border-style: solid;
  border-color: transparent transparent var(--white-color) transparent;
  border-width: 20px 25px;
  top: -32px;
  right: 0;
}

.header__navbar-user-menu::after {
  content: "";
  position: absolute;
  top: -18px;
  right: 0;
  width: 50%;
  height: 18px;
}

.header__navbar-user-item {
  padding: 8px 16px;
}

.header__navbar-user-item:hover {
  background-color: rgba(0, 0, 0, 0.03);
}

.header__navbar-user-link {
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--text-color);
  display: block;
}

.header__navbar-user-item--separate {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}
</style>
