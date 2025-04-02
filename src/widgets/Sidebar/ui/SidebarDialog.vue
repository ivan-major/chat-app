<template>
    <RouterLink
        :to="{ name: 'dialog', params: { id: dialog.id } }"
        class="flex items-center justify-between gap-2 p-4 bg-sky-800 hover:bg-sky-700 transition-colors duration-300 rounded-lg shadow-md"
        :style="{
            backgroundColor: isActive ? 'rgb(3 105 161)' : '',
        }"
    >
        <div class="flex flex-col gap-4 justify-between w-1/2">
            <SidebarDialogParticipant
                v-for="(participant, index) in dialog.participants"
                :key="index"
                :profile="participant"
            />
        </div>
        <div class="w-1/2 rounded-lg p-4 flex flex-col gap-2 justify-between h-full">
            <p class="text-md text-gray-200 self-end">
                {{ messageDate }}
            </p>
            <div class="flex items-center gap-2">
                <img
                    v-if="messageImgUrl"
                    :src="messageImgUrl"
                    alt="message image"
                    title="message image"
                    class="size-10 rounded-lg object-cover"
                >
                <p class="text-gray-300 text-md w-full line-clamp-2">{{ message }}</p>
            </div>
        </div>
    </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import SidebarDialogParticipant from './SidebarDialogParticipant.vue'

import { getLastMessageDate } from '@/shared/utils/date'
import { getLastMessageType } from '@/shared/utils/helpers'
import { useRouter } from 'vue-router'

import type { Dialog } from '@/entities/dialogs/types/dialogsTypes'

const props = defineProps<{
    dialog: Dialog
}>()

const router = useRouter()

const isActive = computed(() => {
    return router.currentRoute.value.params.id === props.dialog.id
})
const messageDate = computed(() => {
    return getLastMessageDate(props.dialog.lastMessage.createdAt)
})
const message = computed(() => getLastMessageType(props.dialog.lastMessage))
const messageImgUrl = computed(() => {
    if(props.dialog.lastMessage.type === 'image') {
        return props.dialog.lastMessage.imageUrl
    }

    if(props.dialog.lastMessage.type === 'video') {
        return props.dialog.lastMessage.thumbnailUrl
    }

    return ''
})
</script>
