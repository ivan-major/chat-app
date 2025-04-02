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
            <template v-if="message.type === 'image'">
                <DialogImg
                    :caption="message.caption || ''"
                    :imageUrl="message.imageUrl || ''"
                />
            </template>
            <template v-if="message.type === 'video'">
                <DialogVideo
                    :thumbnailUrl="message.thumbnailUrl || ''"
                    :videoUrl="message.videoUrl || ''"
                    :duration="message.duration || 0"
                />
            </template>
            <span class="text-sm font-norm text-gray-400">{{ status }}</span>
        </div>
    </div>

</template>

<script setup lang="ts">
import { computed } from 'vue'

import ProfileAvatar from '@/entities/profiles/ui/ProfileAvatar.vue'
import DialogVideo from '@/views/DialogPage/ui/DialogVideo.vue'
import DialogImg from '@/views/DialogPage/ui/DialogImg.vue'

import { getLastMessageDate } from '@/shared/utils/date'
import type { Message } from '@/entities/messages/types/messagesTypes'

const props = defineProps<{
    message: Message
    participants: string[]
}>()

const messageDate = computed(() => {
    return getLastMessageDate(props.message.createdAt)
})
const classes = computed(() => ([
    'flex',
    'gap-2.5',
    ...(props.message.senderId === props.participants[0]
        ? ['justify-start']
        : ['justify-end']
    ),
]))
const classesRejected = computed(() => (!props.message.delivered ? 'bg-red-900' : ''))
const status = computed(() => props.message.delivered ? 'Delivered' : 'Rejected')
</script>
