<script setup lang="ts">

const props = defineProps<{
  title: string
  icon?: string
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
      <span class="win-title">
        <img v-if="icon" :src="icon" class="win-app-icon" alt="App Icon" />
        {{ title }}</span>
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
  border: 4px solid #000080;
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

.win-app-icon {
  width: 20px;
  height: 20px;
  vertical-align: middle; /* aligns with text */
}

.win-controls span {
  width: 20px;
  height: 20px;
  background: white;
  border: 1px solid #000;
  box-shadow: inset 1px 1px 0 #fff, inset -1px -1px 0 #555;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #800000; /* dark red X */
  font-family: monospace;
  user-select: none;
}

.win-controls span:hover {
  background: #e06060; /* slightly brighter on hover */
  color: white;
}

.win-controls span::before {
  content: "×"; /* Unicode multiplication symbol looks like the classic X */
  font-size: 12px;
  line-height: 1;
} 

.win-content {
  padding: 1rem;
  border: 2px solid #000080;
  margin: 0;
  background: var(--window);
}
</style>


