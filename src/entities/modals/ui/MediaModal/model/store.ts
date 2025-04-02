import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMediaModalStore = defineStore('media-modal-store', () => {
    interface MediaModalData {
        type: 'image' | 'video'
        url: string
    }

    const mediaModalData = ref<MediaModalData>({
        type: 'image',
        url: '',
    })

    const SET_MEDIA_MODAL_DATA = (payload: MediaModalData) => mediaModalData.value = payload

    return {
        mediaModalData,
        SET_MEDIA_MODAL_DATA,
    }
})
