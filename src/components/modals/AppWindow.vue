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
  width: auto;
  max-width: 90vw;
  min-width: 20vw;
  padding: 6px;
  border: 6px solid #000080;
  background: var(--window);
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.4),
    inset 1px 1px 0 white,
    inset -1px -1px 0 black;
  font-family: 'VT323', monospace;
  display: inline-block;
  box-sizing: border-box;
}

.win-titlebar {
  height: 32px;
  background: var(--window);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 4px;
  border: 2px solid #000080;

  margin: 2px;
  width: calc(100% - 4px);
  box-sizing: border-box;
}


.win-title {
  font-size: 14px;
  font-weight: bold;
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
  border: 2px solid #4d21cc;
  margin: 0;
  background: var(--window);
}
</style>
