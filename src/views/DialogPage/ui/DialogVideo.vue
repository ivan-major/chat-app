<template>
    <div class="flex items-end gap-2 p-2 w-full h-[240px]">
        <div class="relative group cursor-pointer w-full h-full" @click="playVideo">
            <img
                :src="thumbnailUrl"
                class="w-full h-full rounded-lg object-cover shadow-md transition duration-300 group-hover:opacity-80"
                alt="Video thumbnail"
                title="Video thumbnail"
                loading="lazy"
            >
            <div
                class="absolute top-[50%] left-[50%] translate-[-50%] w-12 h-12 bg-opacity-40 opacity-50 group-hover:opacity-100 transition duration-300"
            >
                <AppIcon icon-name="icon-play"/>
            </div>
            <div v-if="duration" class="absolute bottom-2 right-2 bg-gray-700 bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                {{ formatDuration }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import AppIcon from "@/shared/ui/Images/AppIcon.vue"
import { useModalsStore } from "@/entities/modals/model/store"
import { useMediaModalStore } from "@/entities/modals/ui/MediaModal/model/store"

const props = defineProps<{
    thumbnailUrl: string,
    videoUrl: string,
    duration: number,
}>()

const modalsStore = useModalsStore()
const mediaModalStore = useMediaModalStore()

const playVideo = () => {
    modalsStore.TOGGLE_MEDIA_MODAL()
    mediaModalStore.SET_MEDIA_MODAL_DATA({
        type: 'video',
        url: props.videoUrl
    })
}

const formatDuration = computed(() => {
    const mins = Math.floor(props.duration / 60)
    const secs = props.duration % 60
    return `${ mins }:${ secs < 10 ? '0' : '' }${ secs }`

})
</script>