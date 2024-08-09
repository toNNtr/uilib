<template>
    <div class="header-menu">
        <a
            class="header-menu__menu-item"
            v-for="item in props.items"
            :key="item.id"
            :href="item.link"
        >
            {{ item.title }}
        </a>
    </div>
</template>

<script setup>

const props = defineProps(["items"]);

</script>

<style scoped>

.header-menu {
    display: flex;
    flex-direction: row;
    gap: 12px;
}

.header-menu__menu-item {

}

</style>