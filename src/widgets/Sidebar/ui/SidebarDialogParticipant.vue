<template>
    <div class="flex gap-2 items-center">
        <ProfileAvatar :profile="profile" />
        <p class="text-xl text-gray-100">{{ profile.name }}</p>
    </div>
</template>

<script setup lang="ts">
import ProfileAvatar from '@/entities/profiles/ui/ProfileAvatar.vue'
import type { Profile } from '@/entities/profiles/types/profileTypes'

defineProps<{
    profile: Profile,
}>()
</script>
