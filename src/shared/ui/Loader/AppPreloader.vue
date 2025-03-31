<template>
    <div class="absolute top-0 left-0 z-[150] flex items-center justify-center w-full h-full backdrop-blur-sm transition-all duration-300">
        <div :class="size">
            <AppIcon icon-name="icon-preloader"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppIcon from '@/shared/ui/Images/AppIcon.vue'

const props = defineProps<{
    size: string
}>()
</script>

<style scoped lang="scss">
// .preloader {
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: 150;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     height: 100%;
//     backdrop-filter: blur(5px);
//     transition: .3s;

//     &__inner {
//         width: 120px;
//         height: 120px;
//         animation: 1s rotation infinite;

//         :deep(svg) {
//             width: 100%;
//             height: 100%;
//         }
//     }
// }

// @keyframes rotation {
//     from {
//         transform: rotate(0deg);
//     }

//     to {
//         transform: rotate(360deg);
//     }
// }
</style>