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
  <AppWindow title="COSPLAYS.EXE" :window-id="props.windowId" :initial-x="props.initialX" :initial-y="props.initialY" @close="$emit('close')">
    <h1 class="glitch" data-text="COSPLAYS">COSPLAYS</h1>
    <div class="gallery">
      <div class="cosplay-card">
        <img src="/src/assets/chess.png" alt="Cosplay 1" />
        <p class="name">Ame-chan</p>
        <p class="description">Cosplayer</p>
      </div>
      <!-- Add more cards as needed -->
    </div>
  </AppWindow>
</template>
