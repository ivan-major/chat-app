<template>
    <img
        v-if="!isImageError"
        :src="profile.avatar"
        alt="Avatar"
        title="Avatar"
        class="w-12 h-12 rounded-full object-cover"
        loading="lazy"
        @error="onImageError"
    />
    <div
        v-else
        class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
        :style="{ backgroundColor: bgColor }"
        :title="profile.name"
    >
        {{ initials }}
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { initialsFromName, getRandomHexColor } from '@/shared/utils/helpers'
import type { Profile } from '@/entities/profiles/types/profileTypes'

const props = defineProps<{
    profile: Profile,
}>()

const isImageError = ref(false)
const initials = ref<string>('')
const bgColor = ref<string>('')

const onImageError = () => {
    isImageError.value = true
    initials.value = initialsFromName(props.profile.name)
    bgColor.value = getRandomHexColor()
}
</script>
