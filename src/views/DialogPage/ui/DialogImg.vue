<template>
    <div class="flex flex-col gap-2">
        <p v-if="caption" class="text-sm font-normal py-2.5 text-gray-100">{{ caption }}</p>
        <img
            :src="imageUrl"
            alt="message image"
            title="message image"
            class="w-full max-h-[480px] rounded-lg object-cover"
            loading="lazy"
            @click="openImg"
        >
    </div>
</template>

<script setup lang="ts">
import { useModalsStore } from "@/entities/modals/model/store"
import { useMediaModalStore } from "@/entities/modals/ui/MediaModal/model/store"

const props = defineProps<{
    caption: string
    imageUrl: string
}>()

const modalsStore = useModalsStore()
const mediaModalStore = useMediaModalStore()

const openImg = () => {
    modalsStore.TOGGLE_MEDIA_MODAL()
    mediaModalStore.SET_MEDIA_MODAL_DATA({
        type: 'image',
        url: props.imageUrl
    })
}
</script>
