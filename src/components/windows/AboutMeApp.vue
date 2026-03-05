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
  <AppWindow title="ABOUTME.EXE" :window-id="props.windowId" :initial-x="props.initialX" :initial-y="props.initialY"
    @close="$emit('close')">
    <img src="@/assets/vivi.gif" alt="pfp">
    <dl class="info">
      <dt>name</dt>
      <dd>vivi</dd>
      <dt>age</dt>
      <dd>18</dd>
      <dt>location</dt>
      <dd>australia</dd>
      <dt>pronouns</dt>
      <dd>she/her</dd>
    </dl>
  </AppWindow>
</template>

<style scoped>
.info {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2px 12px;
  margin: 0;
}

dt {
  font-weight: bold;
  text-align: right;
  opacity: 0.6;
}

dd {
  margin: 0;
}
</style>
