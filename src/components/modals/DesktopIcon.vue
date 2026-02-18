<script setup lang="ts">

const props = defineProps<{
  label: string
  icon: string
}>()

const emit = defineEmits<{
  (e: 'open'): void
}>()

function handleClick() {
  emit('open')
}
</script>

<template>
  <div class="desktop-icon" @dblclick="handleClick">
    <img :src="icon" alt="" />
    <span>{{ label }}</span>
  </div>
</template>

<style scoped>
.desktop-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
}

.desktop-icon img {
  width: 64px;
  height: 64px;
  margin-bottom: 4px;
  image-rendering: pixelated;
  /* keeps retro CRT look */
}
</style>
