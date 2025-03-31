<template>
    <div class="flex">
        <Sidebar />
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from '@/widgets/Sidebar/Sidebar.vue'
</script>
