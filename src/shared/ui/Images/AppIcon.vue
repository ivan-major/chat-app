<template>
    <component
        v-bind="$attrs"
        :is="defineAsyncComponent(() => import(`@/shared/assets/icons/${ iconName }.svg`))"
        class="w-full h-full"
    />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

defineProps({
    iconName: {
        type: String,
        required: true
    }
})
</script>