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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;   
  font-size: 14px;
  cursor: pointer;
  user-select: none;
}

.desktop-icon img {
  width: 64px;     
  height: 64px;    
  margin-bottom: 4px;
  image-rendering: pixelated; 
}

</style>



