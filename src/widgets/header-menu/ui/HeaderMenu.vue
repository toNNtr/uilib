<template>
    <div class="header-menu">
        This is Header Menu:
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

<script setup lang="ts">
import type { MenuItem } from '../types';

interface HeaderMenuProps {
    items: Array<MenuItem>
}

const props = defineProps<HeaderMenuProps>();

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