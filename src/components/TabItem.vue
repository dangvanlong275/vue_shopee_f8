<template>
    <div class="grid">
        <div class="grid__row">
            <nav class="grid__column-2 tab tab--active">
                <el-text class="tab__title">TẤT CẢ SẢN PHẨM</el-text>
            </nav>
            <nav v-for="(tab, key) in tabs" :key="key" class="grid__column-2 tab">
                <el-text class="tab__title">{{ tab }}</el-text>
            </nav>
            <nav class="grid__column-2 tab">
                <el-text class="tab__title">
                    Thêm
                    <i class="tab__more-icon tab__more-icon--down fa-solid fa-caret-down"></i>
                    <i class="tab__more-icon tab__more-icon--up fa-solid fa-caret-up"></i>
                </el-text>
                <div class="tab__more-modal">
                    <ul class="tab__more-list">
                        <li class="tab__more-item">Móc chìa khóa</li>
                        <li class="tab__more-item">Túi treo thung</li>
                        <li class="tab__more-item">Khóa chống trộm</li>
                        <li class="tab__more-item">Decal xe máy</li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { reactive } from 'vue';

    const tabs = reactive([
        'Móc chìa khóa',
        'Túi treo thung để đồ  Túi treo thung để đồ Túi treo thung để đồ Túi treo thung để đồ',
        'Khóa chống trộm',
        'Decal xe máy'
    ]);

</script>
<style scoped>
.tab {
    padding: 16px 10px;
    color: var(--text-color);
    text-align: center;
    font-size: 1.4rem;
    cursor: pointer;
}

.tab:hover .tab__title {
    color: var(--primary-color);
}
.tab:last-child {
    position: relative;
}
.tab:last-child::before  {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    height: 50%;
    width: 1px;
    background-color: #ccc;
    transform: translateY(-50%);
}

.tab:last-child:hover .tab__more-icon--down {
    display: inline-block;
}

.tab:last-child:hover .tab__more-icon--up {
    display: none;
}


.tab:last-child:hover .tab__more-modal {
    display: block;
}

.tab__title {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}

.tab__more-modal {
    width: 268px;
    top: 100%;
    right: 0;
    position: absolute;
    display: none;
}


.tab__more-modal::after  {
    content: "";
    position: absolute;
    top: -10px;
    right: 66px;
    border-style: solid;
    border-color: transparent transparent var(--white-color) transparent;
    border-width: 12px;
    z-index: 0;
}

.tab__more-modal::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 16px;
    width: 100%;
}

.tab__more-list {
    position: absolute;
    width: 100%;
    max-height: 300px;
    padding: 0 22px;
    overflow-y: scroll;
    background-color: var(--white-color);
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.09);
    border-radius: var(--border-radius);
    z-index: 1;
}

.tab__more-list::-webkit-scrollbar {
    width: 2px;
    height: 2px;
    border-radius: 2px;
}
.tab__more-list::-webkit-scrollbar-thumb {
    background: var(--primary-color);
}

.tab__more-icon--down {
    display: none;
}

.tab__more-icon {
    padding-left: 6px;
}

.tab__more-item {
    display: block;
    width: 100%;
    list-style: none;
    text-align: left;
    padding: 10px 0;
}

.tab__more-item:hover {
    color: var(--primary-color);
}

.tab--active {
    border-bottom: 2px solid var(--primary-color);
    color: var(--primary-color);
}
</style>