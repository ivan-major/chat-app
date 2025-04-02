<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppContainer from '@/shared/ui/Container/AppContainer.vue'
import MediaModal from '@/entities/modals/ui/MediaModal/MediaModal.vue'
</script>

<template>
    <div class="bg-sky-900">
        <AppContainer>
            <RouterView />
        </AppContainer>
    </div>
    <MediaModal />
</template>
