<template>
    <div v-if="!isLoading" class="bg-sky-800 w-2/3 m-4 p-4 rounded-xl flex items-center justify-center text-6xl text-slate-200">
        Оберіть потрібний діалог
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRootStore } from '@/entities/root/model/store'

const rootStore = useRootStore()
const { isLoading } = storeToRefs(rootStore)
</script>