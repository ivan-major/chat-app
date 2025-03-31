import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Dialog } from '../types/dialogsTypes.ts'

export const useDialogsStore = defineStore('dialogs-store', () => {
    const dialogsList = ref<Dialog[]>([])

    const SET_DIALOGS_LIST = (payload: Dialog[]) => dialogsList.value = payload

    return {
        dialogsList,
        SET_DIALOGS_LIST,
    }
})
