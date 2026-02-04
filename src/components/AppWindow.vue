<script setup lang="ts">

const props = defineProps<{
  title: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

function handleClose() {
  emit('close')
}
</script>

<template>
  <div class="win-window">
    <div class="win-titlebar">
      <span class="win-title">{{ title }}</span>
      <div class="win-controls">
        <span @click="handleClose"></span>
      </div>
    </div>
    <div class="win-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.win-window {
  position: absolute;
  top: 50px;
  left: 50px;
  width: auto;          /* auto width */
  max-width: 90vw;      /* optional: prevent it from going off-screen */
  min-width: 200px;     /* optional: don't get too small */
  padding: 2px;
  border: 2px solid #000080;
  background: var(--window);
  box-shadow: inset 1px 1px 0 #fff, inset -1px -1px 0 #888;
  font-family: 'VT323', monospace;
  display: inline-block; /* shrink-to-fit content */
}


.win-titlebar {
  height: 26px;
  background: var(--window);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 6px;
  border-top: 2px solid #8087f0;
  border-bottom: 2px solid #8087f0;
}

.win-title {
  font-size: 14px;
  color: #000;
}

.win-controls {
  display: flex;
  gap: 4px;
}

.win-controls span {
  width: 14px;
  height: 14px;
  background: #c0c0c0;
  border: 1px solid #000;
  box-shadow: inset 1px 1px 0 #fff, inset -1px -1px 0 #555;
  cursor: pointer;
}

.win-content {
  padding: 1rem;
  border: 2px solid #8087f0;
  margin: 0;
  background: var(--window);
}
</style>


