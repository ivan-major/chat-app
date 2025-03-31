<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import AppContainer from '@/shared/ui/Container/AppContainer.vue'
</script>

<template>
    <div class="bg-sky-900">
        <AppContainer>
            <RouterView />
        </AppContainer>
    </div>
</template>
