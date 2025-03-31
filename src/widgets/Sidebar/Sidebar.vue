<template>
    <div class="w-1/3 h-dvh bg-sky-900 p-4 overflow-y-auto relative">
        <AppVirtualScroll v-if="!isError" :pending="isLoadingNew" @load-more="onLoadNewData">
            <AppPreloader v-if="isLoading" size="size-16"/>
            <div v-else class="flex flex-col gap-2">
                <SidebarDialog
                    v-for="dialog in dialogsList"
                    :key="dialog.id"
                    :dialog="dialog"
                />
                <div v-if="isLoadingNew"  class="w-full h-16 flex items-center justify-center relative">
                    <AppPreloader size="size-4"/>
                </div>
                <div v-if="isErrorNew" class="w-full h-fit flex items-center justify-center relative">
                    <AppDialogsError @reload="onLoadNewData"/>
                </div>
            </div>
        </AppVirtualScroll>
        <AppDialogsError v-else @reload="onLoadData" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import SidebarDialog from '@/widgets/Sidebar/ui/SidebarDialog.vue'
import AppPreloader from '@/shared/ui/Loader/AppPreloader.vue'
import AppVirtualScroll from '@/shared/ui/Container/AppVirtualScroll.vue'
import AppDialogsError from '@/shared/ui/Error/AppDialogsError.vue'

import { apiDialogs } from './api'
import { apiProfiles } from '@/entities/profiles/api'

import { useProfilesStore } from '@/entities/profiles/model/store'
import { useDialogsStore } from '@/entities/dialogs/model/store'
// import { useRootStore } from '@/entities/root/model/store'

import type { Dialog, DialogsResponse } from '@/entities/dialogs/types/dialogsTypes'
import type { Profile } from '@/entities/profiles/types/profileTypes'

const dialogsStore = useDialogsStore()
const profilesStore = useProfilesStore()
// const rootStore = useRootStore()
// const { isLoading } = storeToRefs(rootStore)
const { profilesIds, profiles } = storeToRefs(profilesStore)

const dialogData = ref<DialogsResponse>()
const dialogsList = ref<Dialog[]>([])
const isLoading = ref(false)
const isLoadingNew = ref(false)
const isError = ref(false)
const isErrorNew = ref(false)
const offset = ref(0)

const getDialogsList = async (offset: number = 0) => {
    const response = await apiDialogs.getDialogs(offset)
    dialogData.value = response

    const apiProfilesAll: Promise<Profile>[] = []

    response.items.forEach((dialog) => {
        dialog.participantIds.forEach((id) => {
            if (!profilesStore.profiles.some((profile) => profile.id === id)) {
                profilesStore.SET_PROFILES_IDS(id)
            }
        })
    })

    profilesIds.value.forEach((id) => {
        apiProfilesAll.push(apiProfiles.getProfilesById(id))
    })

    const profilesResponse = await Promise.all(apiProfilesAll)
    profilesStore.SET_PROFILES(profilesResponse)

    const formatDataParticipants = response.items.map((dialog) => {
        const participants = dialog.participantIds
            .map((id) => profiles.value.find((profile: Profile) => profile.id === id))
            .filter((participant): participant is Profile => participant !== undefined)

        return {
            ...dialog,
            participants,
        }
    })

    dialogsList.value = [...dialogsList.value, ...formatDataParticipants]
    dialogsStore.SET_DIALOGS_LIST(dialogsList.value)
    console.log('dialogsList', dialogsList.value)
}

const onLoadData = async () => {
    try {
        isError.value = false
        isLoading.value = true
        await getDialogsList()
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
            await getDialogsList(offset.value)
        }
        offset.value += 1
    } catch {
        isErrorNew.value = true
    } finally {
        isLoadingNew.value = false
    }
}

onMounted(async() => {
    await onLoadData()
})
</script>