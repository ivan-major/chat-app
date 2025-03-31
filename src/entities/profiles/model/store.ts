import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Profile } from '../types/profileTypes.ts'

export const useProfilesStore = defineStore('profiles-store', () => {
    const profilesIds = ref<string[]>([])
    const profiles = ref<Profile[]>([])

    const SET_PROFILES_IDS = (payload: string) => profilesIds.value.push(payload)
    const SET_PROFILES = (payload: Profile[]) => profiles.value = [...profiles.value, ...payload]

    return {
        profilesIds,
        profiles,
        SET_PROFILES_IDS,
        SET_PROFILES,
    }
})
