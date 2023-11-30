<template>
  <div class="header_notify">
    <h3 class="header__notify-header">Thông báo mới nhận</h3>
    <ul class="header__notify-list">
      <li
        v-for="notify in notifications"
        :key="notify.id"
        class="header__notify-item">
        <a href="" class="header__notify-link">
          <img :src="notify.thumbnail" alt="" class="header__notify-img" />
          <div class="header__notify-content">
            <h3 class="header__notify-title">{{ notify.title }}</h3>
            <span class="header__notify-description">{{ notify.description }}</span>
          </div>
        </a>
      </li>
    </ul>
    <h3 class="header__notify-footer">
      <a href="" class="header__notify-footer-btn">Xem tất cả</a>
    </h3>
  </div>
</template>
<script setup lang="ts">
    import { ref } from "vue";

    const notifications = ref();
    notifications.value = [
      {
        id: 1,
        thumbnail:
          "https://cdn.abphotos.link/photos/resized/320x/2023/07/14/1689327393_RCHDBG6JYjPOMz5W_1689337124-phpqefqxp.png",
        title: `Kem chống nắng Ohui dành cho da bị sạm đen Day Shield Perfect Sun
                  Black SPF50+`,
        description: `Kem chống nắng Ohui dành cho da bị sạm đen Day Shield Perfect Sun Black SPF50+`,
      },
      {
        id: 2,
        thumbnail:
          "https://cdn.abphotos.link/photos/resized/320x/2022/11/09/1667966442_I7NtmJxar1oP0HZE_1667970485-phpdxsdpe.png",
        title: `Set kem chống nắng Ohui Day Shield Ultra Sunblock`,
        description: `Set kem chống nắng Ohui Day Shield Ultra Sunblock UV Force SPF
                  50+/PA++++`,
      },
      {
        id: 3,
        thumbnail:
          "https://cdn.abphotos.link/photos/resized/300x200/1653708536-php4dvzf5.png",
        title: `Kem chống nắng Whoo Seol radiant white tone`,
        description: `Kem chống nắng Whoo Seol radiant white tone up sunscreen
                  SPF50+/PA++++ 50ml`,
      },
    ];

</script>
<style scoped>
.header_notify {
  position: absolute;
  top: calc(100% + 16px);
  width: 404px;
  right: 0;
  background-color: var(--white-color);
  box-shadow: 0 0 8px -1px var(--black-color);
  animation: headerNotifyGrowth ease-in 0.2s;
  transform-origin: calc(100% - 20px) top;
  will-change: opacity, transform;
  color: var(--text-color);
  border-radius: var(--border-radius);
  display: none;
  z-index: 1;
}

.header_notify::before {
  content: "";
  border-style: solid;
  border-color: transparent transparent var(--white-color) transparent;
  border-width: 20px 25px;
  position: absolute;
  top: -32px;
  right: 0;
}

.header_notify::after {
  content: "";
  width: 20%;
  height: 20px;
  position: absolute;
  top: -18px;
  right: 0;
}

.header__notify-header {
  font-size: 1.4rem;
  font-weight: 400;
  margin: 0 0 0 12px;
  color: #999;
  line-height: 40px;
  cursor: default;
}

.header__notify-list {
  list-style: none;
  padding-left: 0;
}

.header__notify-item {
  background-color: rgba(243, 78, 53, 0.2);
  padding: 10px 0;
}

.header__notify-item:hover {
  opacity: 0.8;
}

.header__notify-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 14px;
}

.header__notify-img {
  width: 48px;
  object-fit: contain;
}

.header__notify-content {
  margin-left: 12px;
}

.header__notify-title {
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: var(--text-color);
  font-weight: 500;
  margin: 0 0 8px 0;
}

.header__notify-description {
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: var(--text-color);
  font-weight: 400;
}

.header__notify-footer {
  margin: 0;
  height: 34px;
}

.header__notify-footer-btn {
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--text-color);
  text-align: center;
  text-decoration: none;
  display: block;
  line-height: 34px;
}
</style>
