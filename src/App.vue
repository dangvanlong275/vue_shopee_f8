<template>
  <router-view/>
</template>
<script setup lang="ts">

  const data = [
    {
      id: 1,
      name: 'Bộ kem đặc trị vùng mắt',
      thumbnail: 'https://cdn.abphotos.link/photos/resized/320x/2023/07/14/1689327393_RCHDBG6JYjPOMz5W_1689337124-phpqefqxp.png',
      price: 2000000,
      quantity:2
    },
    {
      id: 2,
      name: 'Bộ kem dưỡng ẩm',
      thumbnail: 'https://cdn.abphotos.link/photos/resized/320x/2023/07/14/1689327393_RCHDBG6JYjPOMz5W_1689337124-phpqefqxp.png',
      price: 9000000,
      quantity:3
    },
    {
      id: 3,
      name: 'Bộ kem trộn',
      thumbnail: 'https://cdn.abphotos.link/photos/resized/320x/2023/07/14/1689327393_RCHDBG6JYjPOMz5W_1689337124-phpqefqxp.png',
      price: 7000000,
      quantity:4,
      category: 'Bạc'
    }
  ];

  sessionStorage.setItem('cart_products', JSON.stringify(data));

  const historySearch  = ["Kem dưỡng da", "Kem trị mụn", "Kem trộn"];
  sessionStorage.setItem('history_search', JSON.stringify(historySearch));
</script>
<style>
  @import url(@/assets/css/base.css);
  @import url(@/assets/fonts/fontawesome-free-6.4.2/css/all.min.css);
  @import url(element-plus/dist/index.css);
</style>