<template>
    <div ref="container" :id="id" class="h-dvh p-4 relative overflow-y-auto">
        <div v-if="direction === 'top'" ref="topTrigger" class="h-px bg-transparent" />
        <slot />
        <div v-if="direction === 'bottom'" ref="bottomTrigger" class="h-px bg-transparent" />
    </div>
</template>

<script setup lang="ts">
import {
    ref,
    computed,
    onMounted,
    onUnmounted,
    nextTick
} from 'vue'

const props = defineProps<{
    pending: boolean
    direction: 'top' | 'bottom'
    id: string
}>()
const emit = defineEmits<{
    (e: 'loadMore'): Promise<void>
}>()

const container = ref<HTMLElement>()
const topTrigger = ref<HTMLElement>()
const bottomTrigger = ref<HTMLElement>()
const observer = ref<IntersectionObserver>()
const previousScrollHeight = ref(0)

const element = computed(() => document.getElementById(props.id))

const init = (): void => {
    if (!element.value) return

    observer.value = new IntersectionObserver(async (entries: IntersectionObserverEntry[]) => {
        if (!entries[0].isIntersecting || props.pending) {
            return
        }

        await emit('loadMore')

        await nextTick(() => {
            if (props.direction === 'top' && element.value) {
                element.value.scrollTop = element.value.scrollTop + element.value.scrollHeight - previousScrollHeight.value
                previousScrollHeight.value = element.value?.scrollHeight
            }
        })
    })

    if (props.direction === 'top' && topTrigger.value) {
        observer.value.observe(topTrigger.value)
    } else if (props.direction === 'bottom' && bottomTrigger.value) {
        observer.value.observe(bottomTrigger.value)
    }
}

const scrollToBottom = () => {
    if(!element.value) return
    setTimeout(() => {
        if (props.direction === 'top' && element.value) {
            element.value.scrollTop = element.value.scrollHeight + 1000
        }
    })
}

defineExpose({
    scrollToBottom,
})

onMounted(() => {
    init()
})

onUnmounted(() => {
    observer.value?.disconnect()
})
</script>
