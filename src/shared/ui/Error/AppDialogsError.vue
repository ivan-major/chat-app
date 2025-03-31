<template>
    <div class="flex flex-col items-center justify-center w-full gap-4 p-4">
        <p class="text-xl text-slate-200">Something went wrong!</p>
        <button
            class="p-4 bg-sky-800 hover:bg-sky-700 transition-colors duration-300 rounded-lg shadow-md text-slate-200"
            type="button"
            title="Try to reload"
            @click="emit('reload')"
        >
            Try to reload
        </button>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (e: 'reload'): void
}>()
</script>