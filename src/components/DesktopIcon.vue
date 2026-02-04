<script setup lang="ts">
defineProps({
  label: String,
  icon: String
})
defineEmits(['open'])
</script>

<template>
  <div class="desktop-icon" @dblclick="$emit('open')">
    <img :src="icon" alt="icon" />
    <div>{{ label }}</div>
  </div>
</template>

<style scoped>
.desktop-icon {
  display: inline-block;
  width: 80px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  margin: 1rem;
}
.desktop-icon img {
  width: 48px;
  height: 48px;
  margin-bottom: 4px;
}
</style>



