<template>
    <textarea
        id="chat"
        rows="1"
        class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Your message..."
        :value="value"
        @input="onInput"
    />
</template>

<script setup lang="ts">
const emit = defineEmits(['on-input', 'on-change'])

defineProps<{
    value: string | number
}>()

const onInput = (event: Event) => {
    const target = event.target as HTMLTextAreaElement;
    emit('on-input', target?.value || '');
};
</script>

