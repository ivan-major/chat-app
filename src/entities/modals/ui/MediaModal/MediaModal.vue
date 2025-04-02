<template>
    <Teleport to="body">
        <div
            v-if="isMediaModalOpen"
            class="fixed inset-0 bg-gray-700/90 flex items-center justify-center p-4"
        >
            <div class="relative w-full max-w-6xl">
                <button @click="onClose"
                    class="absolute -top-4 -right-4 bg-amber-500 text-white rounded-lg p-2 hover:bg-red-700">
                    ✖
                </button>
                <video
                    v-if="mediaModalData.type === 'video'"
                    :src="mediaModalData.url"
                    controls
                    autoplay
                    class="w-full rounded-lg shadow-lg">
                </video>
                <img
                    v-else-if="mediaModalData.type === 'image'"
                    :src="mediaModalData.url"
                    alt="Media"
                    title="Media"
                    class="w-full rounded-lg shadow-lg"
                    loading="lazy"
                >
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { Teleport } from "vue"
import { storeToRefs } from "pinia"

import { useModalsStore } from "@/entities/modals/model/store"
import { useMediaModalStore } from "@/entities/modals/ui/MediaModal/model/store"

const modalsStore = useModalsStore()
const mediaModalStore = useMediaModalStore()
const { isMediaModalOpen } = storeToRefs(modalsStore)
const { mediaModalData } = storeToRefs(mediaModalStore)

const onClose = () => {
    modalsStore.TOGGLE_MEDIA_MODAL()
}
</script>
