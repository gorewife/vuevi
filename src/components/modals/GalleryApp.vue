<script setup lang="ts">
import AppWindow from '@/components/modals/AppWindow.vue'

const props = defineProps<{
  initialX?: number
  initialY?: number
}>()
</script>

<template>
  <AppWindow title="COSPLAYS.EXE" :initial-x="props.initialX" :initial-y="props.initialY" @close="$emit('close')">
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
