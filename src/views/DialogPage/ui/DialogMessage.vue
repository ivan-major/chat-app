<template>
    <div :class="classes">
        <ProfileAvatar v-if="message.sender" :profile="message.sender" />
        <div
            class="flex flex-col gap-2 w-full max-w-[480px] leading-1.5 p-4 bg-gray-700 rounded-e-xl rounded-es-xl"
            :class="classesRejected"
        >
            <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <span class="text-sm font-semibold text-white">{{ message?.sender?.name || message.senderId }}</span>
                <span class="text-sm font-normal text-gray-400">{{ messageDate }}</span>
            </div>
            <p v-if="message.type === 'text'" class="text-sm font-normal py-2.5 text-gray-100">{{ message.content }}</p>
            <div v-if="message.type === 'image'" class="flex flex-col gap-2">
                <p v-if="message.caption" class="text-sm font-normal py-2.5 text-gray-100">{{ message.content }}</p>
                <img
                    :src="message.imageUrl"
                    alt="message image"
                    title="message image"
                    class="w-full max-h-[480px] rounded-lg object-cover"
                    loading="lazy"
                >
            </div>
            <span class="text-sm font-norm text-gray-400">{{ status }}</span>
        </div>
    </div>

</template>

<script setup lang="ts">
import type { Message } from '@/entities/messages/types/messagesTypes'
import { computed } from 'vue'
import ProfileAvatar from '@/entities/profiles/ui/ProfileAvatar.vue'
import { getLastMessageDate } from '@/shared/utils/date'
import type { Dialog } from '@/entities/dialogs/types/dialogsTypes'

const props = defineProps<{
    message: Message
    currentDialog: Dialog | null
}>()

const messageDate = computed(() => {
    return getLastMessageDate(props.message.createdAt)
})
const classes = computed(() => ([
    'flex',
    'gap-2.5',
    ...(props.message.senderId === props.currentDialog?.participantIds[0]
        ? ['justify-start']
        : ['justify-end']
    ),
]))
const classesRejected = computed(() => (!props.message.delivered ? 'bg-red-900' : ''))
const status = computed(() => props.message.delivered ? 'Delivered' : 'Rejected')
</script>

<style scoped></style>