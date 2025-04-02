<template>
    <div class="flex items-center px-3 py-2 w-full rounded-lg bg-gray-700">
        <AppTextarea
            :value="value"
            @on-input="onInput"
        />
        <button
            type="submit"
            class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
            @click.prevent="onSend"
        >
            <div class="w-5 h-5 rotate-90 rtl:-rotate-90">
                <AppIcon icon-name="icon-send" />
            </div>
            <span class="sr-only">Send message</span>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppIcon from '@/shared/ui/Images/AppIcon.vue'
import AppTextarea from '@/shared/ui/Inputs/AppTextarea.vue'

const emit = defineEmits(['send'])
const value = ref('')

const onInput = (newValue: string) => {
    value.value = newValue
}

const onSend = () => {
    if (value.value.trim()) {
        emit('send', value.value)
        value.value = ''
    }
}
</script>
