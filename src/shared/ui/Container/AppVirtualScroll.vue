<template>
    <div>
        <slot />
        <div ref="target" class="h-px bg-transparent" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
    pending: boolean
}>()
const emit = defineEmits<{
    (e: 'loadMore'): Promise<void>
}>()

const target = ref<HTMLElement>()
const pending = ref<boolean>(false)
const observer = ref<IntersectionObserver>()

const init = (): void => {
    observer.value = new IntersectionObserver(async (entries: IntersectionObserverEntry[]) => {
        if (!entries[0].isIntersecting || props.pending) {
            return
        }

        await emit('loadMore')
    })
    observer.value.observe(target.value as Element)
}

onMounted(init)
onUnmounted(() => observer.value?.disconnect())
</script>
