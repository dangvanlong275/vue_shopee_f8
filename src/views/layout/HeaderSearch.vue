<template>
  <div class="header__search">
    <div class="header__search-content">
      <input
        type="text"
        placeholder="Tìm trong shop này"
        class="header__search-input" />
      <div class="header__search-history">
        <span class="header__history-title">Lịch sử Tìm kiếm</span>
        <ul class="header_history-list">
          <li
            v-for="(item, index) in historySearch"
            :key="index"
            class="header_history-item">
            <a href="" class="header__history-link">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="header__select">
      <span class="header__select-text"> Trong shop </span>
      <i class="header__select-icon fa-solid fa-chevron-down"></i>
      <ul class="header__select-list">
        <li class="header__select-item header__select-item--active">
          <span>
            Trong shop
            <i class="fa-solid fa-check"></i>
          </span>
        </li>
        <li class="header__select-item">
          <span>
            Ngoài shop
            <i class="fa-solid fa-check"></i>
          </span>
        </li>
      </ul>
    </div>
    <button class="header__select-btn">
      <i class="header__search-btn-icon fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
</template>
<script setup lang="ts">
    import { ref } from "vue";

    const historySearch: string[] = ref(JSON.parse(sessionStorage.getItem("history_search") ?? ""));
</script>
<style scoped>
.header__search {
  flex: 1;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: var(--white-color);
  border-radius: var(--border-radius);
  position: relative;
}

.header__search-content {
  flex: 1;
  height: 100%;
  position: relative;
}

.header__search-input {
  border: none;
  outline: none;
}

.header__search-history {
  background-color: var(--white-color);
  box-shadow: 0 1px 5px #9999;
  position: absolute;
  top: calc(100% + 4px);
  border-radius: var(--border-radius);
  width: calc(100% - 16px);
  animation: fadeIn linear 0.2s;
  display: none;
  z-index: 1;
}

.header__search-input:focus ~ .header__search-history {
  display: block;
}

.header__history-title {
  font-size: 1.4rem;
  font-weight: 400;
  color: #999;
  padding: 8px;
  display: block;
}

.header_history-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.header_history-item {
  height: 38px;
}

.header_history-item:hover {
  background-color: #fafafa;
}

.header__history-link {
  text-decoration: none;
  font-size: 1.4rem;
  color: var(--text-color);
  line-height: 38px;
  display: block;
  width: 100%;
  padding: 0 12px;
}

.header__select {
  font-size: 1.4rem;
  color: var(--text-color);
  font-weight: 400;
  padding: 0 16px;
  border-left: 1px solid #4a4a4a;
  position: relative;
  cursor: pointer;
}

.header__select-text {
  font-size: 1.4rem;
}

.header__select-icon {
  margin-left: 10px;
}

.header__select-list {
  list-style: none;
  position: absolute;
  padding-left: 0;
  background-color: var(--white-color);
  box-shadow: 0 1px 5px #9999;
  border-radius: var(--border-radius);
  top: calc(100% + 2px);
  animation: fadeIn linear 0.2s;
  width: 100%;
  left: 0;
  display: none;
}

.header__select-list::before {
  content: "";
  width: 100%;
  height: 16px;
  position: absolute;
  top: -16px;
}

.header__select:hover .header__select-list {
  display: block;
}

.header__select-item {
  padding: 8px 16px;
  display: flex;
  font-size: 1.4rem;
}

.header__select-item i {
  margin-left: 10px;
  color: var(--primary-color);
  font-size: 1.2rem;
  display: none;
}

.header__select-item--active i {
  display: inline-block;
}

.header__select-item:hover {
  background-color: rgb(0, 0, 0, 0.05);
  cursor: pointer;
}

.header__select-btn {
  width: 60px;
  height: 36px;
  background-color: var(--primary-color);
  border: none;
  outline: none;
  border-radius: var(--border-radius);
  margin-right: 2px;
  cursor: pointer;
}

.header__search-btn-icon {
  color: var(--white-color);
  font-size: 1.6rem;
}
</style>
