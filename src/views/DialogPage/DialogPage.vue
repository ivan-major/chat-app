<template>
        <div class="w-2/3 relative">
            <AppVirtualScroll v-if="!isError" :pending="isLoadingNew" direction="top" @load-more="onLoadNewData" class="pb-16" ref="list" id="dialog">
                <AppPreloader v-if="isLoading" size="size-16" />

                <div v-else class="flex flex-col gap-4">
                    <DialogMessage v-for="(message, index) in dialogMessages" :key="index" :message="message"
                        :participants="currentDialog?.participantIds || []" />
                    <div v-if="isLoadingNew" class="w-full h-16 flex items-center justify-center relative">
                        <AppPreloader size="size-4" />
                    </div>
                    <div v-if="isErrorNew" class="w-full h-fit flex items-center justify-center relative">
                        <AppDialogsError @reload="onLoadNewData" />
                    </div>
                </div>
            </AppVirtualScroll>

            <AppDialogsError v-else @reload="onLoadData" />
            <div class="w-full h-fit flex items-center justify-center absolute bottom-0 left-0 right-0 z-10">
                <MessageInput @send="onSendMessage"/>
            </div>
        </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

import AppVirtualScroll from '@/shared/ui/Container/AppVirtualScroll.vue'
import AppPreloader from '@/shared/ui/Loader/AppPreloader.vue'
import AppDialogsError from '@/shared/ui/Error/AppDialogsError.vue'
import DialogMessage from './ui/DialogMessage.vue'
import MessageInput from '@/views/DialogPage/ui/MessageInput.vue'

import { useProfilesStore } from '@/entities/profiles/model/store'
import { useDialogsStore } from '@/entities/dialogs/model/store'

import { apiDialogMessages } from '@/views/DialogPage/api'
import { apiProfiles } from '@/entities/profiles/api'

import { useWebSocket } from '@/shared/composables/UseWebSocket'

import type { Message, MessagesResponse } from '@/entities/messages/types/messagesTypes'
import type { Profile } from '@/entities/profiles/types/profileTypes'

const profilesStore = useProfilesStore()
const dialogsStore = useDialogsStore()
const { dialogsList } = storeToRefs(dialogsStore)
const { profiles } = storeToRefs(profilesStore)

const route = useRoute()
const { sendMessage } = useWebSocket('ws://localhost:3000');

const dialogData = ref<MessagesResponse>()
const dialogMessages = ref<Message[]>([])
const isLoading = ref(false)
const isLoadingNew = ref(false)
const isError = ref(false)
const isErrorNew = ref(false)
const offset = ref(0)
const list = ref<{ scrollToBottom: () => void } | null>(null)

const dialogId = computed(() => route.params.id as string)
const currentDialog = computed(() => {
    return dialogsList.value.find((dialog) => dialog.id === dialogId.value)
})

const getDialogMessages = async (dialogId: string, offset: number) => {
    const response = await apiDialogMessages.getDialogsMessages(dialogId, offset)
    dialogData.value = response

    const apiProfilesAll: Promise<Profile>[] = []

    response.items.forEach((message) => {
        if (!profilesStore.profiles.some((profile) => profile.id === message.senderId)) {
            profilesStore.SET_PROFILES_IDS(message.senderId)
            apiProfilesAll.push(apiProfiles.getProfilesById(message.senderId))
        }
    })

    if (apiProfilesAll.length > 0) {
        const profilesResponse = await Promise.all(apiProfilesAll)
        profilesStore.SET_PROFILES(profilesResponse)
    }

    const formatDataParticipants = response.items.map((message) => {
        const profile = profiles.value.find((profile) => profile.id === message.senderId)
        return {
            ...message,
            sender: profile,
        }
    })

    dialogMessages.value = [...formatDataParticipants, ...dialogMessages.value]

    console.log('dialogMessages', dialogMessages.value)
}

const onLoadData = async () => {
    try {
        isError.value = false
        isLoading.value = true
        await getDialogMessages(dialogId.value, 0)
    } catch {
        isError.value = true
    } finally {
        isLoading.value = false
    }
}

const onLoadNewData = async () => {
    try {
        isErrorNew.value = false
        isLoadingNew.value = true
        if (offset.value > 0) {
            await getDialogMessages(dialogId.value, offset.value)
        }
        offset.value += 1
    } catch {
        isErrorNew.value = true
    } finally {
        isLoadingNew.value = false
    }
}

const resetData = () => {
    dialogMessages.value = []
    offset.value = 0
}

const scrollToBottom = () => {
    if(!list.value) return
    list.value.scrollToBottom()
}

const onSendMessage = (message: string) => {
    const payloadMessage = {
        id: Math.random().toString(36).substring(2, 15),
        dialogId: dialogId.value,
        senderId: currentDialog.value?.participantIds[0] || '',
        createdAt: Date.now(),
        type: "text" as "text",
        content: message,
    }
    const newMessage = {
        type: 'NEW_MESSAGE',
        payload: payloadMessage
    }

    const messageData = {
        ...payloadMessage,
        sender: profiles.value.find((profile) => profile.id === payloadMessage.senderId),
    }

    sendMessage(newMessage)
    dialogMessages.value = [...dialogMessages.value, messageData]
    scrollToBottom()
}

onMounted(async () => {
    await onLoadData()
    scrollToBottom()
})

watch(() => dialogId.value, async () => {
    resetData()
    await onLoadData()
    scrollToBottom()
})
</script>
