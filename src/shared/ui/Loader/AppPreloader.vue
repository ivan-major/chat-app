<template>
    <div class="absolute top-0 left-0 z-[150] flex items-center justify-center w-full h-full backdrop-blur-sm transition-all duration-300">
        <div :class="size">
            <AppIcon icon-name="icon-preloader"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import AppIcon from '@/shared/ui/Images/AppIcon.vue'

defineProps<{
    size: string
}>()
</script>
