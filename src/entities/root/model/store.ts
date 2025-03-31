import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRootStore = defineStore('root-store', () => {
    const isLoading = ref(false)

    const TOGGLE_LOADING = () => isLoading.value = !isLoading.value

    return {
        isLoading,

        TOGGLE_LOADING,
    }
})
