<script setup lang="ts">
import AppWindow from '@/components/windows/AppWindow.vue'

const props = defineProps<{
  windowId: string
  initialX?: number
  initialY?: number
}>()

defineEmits<{ (e: 'close'): void }>()
</script>

<template>
  <AppWindow title="ABOUTME.EXE" :window-id="props.windowId" :initial-x="props.initialX" :initial-y="props.initialY" @close="$emit('close')">
    <h1 class="glitch" data-text="ABOUT ME">ABOUT ME</h1>
    <img src="@/assets/vivi.gif" alt="pfp">
    <p>vivi</p>
    <p>18</p>
  </AppWindow>
</template>
