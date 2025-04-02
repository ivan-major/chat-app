import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalsStore = defineStore('modals-store', () => {
    const isMediaModalOpen = ref(false)

    const TOGGLE_MEDIA_MODAL = () => isMediaModalOpen.value = !isMediaModalOpen.value

    return {
        isMediaModalOpen,
        TOGGLE_MEDIA_MODAL,
    }
})
