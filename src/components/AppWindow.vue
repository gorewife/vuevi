<script setup lang="ts">
defineProps({
  title: String
})
defineEmits(['close'])
</script>

<template>
  <div class="win-window" style="position:absolute;">
    <div class="win-titlebar">
      <span class="win-title">{{ title }}</span>
      <div class="win-controls">
        <span></span>
        <span></span>
        <span @click="$emit('close')"></span>
      </div>
    </div>
    <div class="win-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.win-window {
  display: inline-block;
  border: 2px solid #000080;
  background: var(--window);
  box-shadow: inset 1px 1px 0 #fff, inset -1px -1px 0 #888;
  padding: 2px;
}
.win-titlebar {
  height: 26px;
  background: var(--window);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  border-top: 2px solid #8087f0;
  border-bottom: 2px solid #8087f0;
}
.win-title {
  font-size: 14px;
  color: #000;
  font-family: VT323, monospace;
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


