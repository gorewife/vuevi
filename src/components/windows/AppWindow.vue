<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDraggable } from '@/composables/useDraggable'
import { useResizable } from '@/composables/useResizable'
import { useWindowStore } from '@/stores/windowStore'

const props = defineProps<{
  title: string
  windowId: string
  icon?: string
  initialX?: number
  initialY?: number
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

// Calling useWindowStore() anywhere gives you the same singleton instance,
// that's the whole point of a store vs a plain composable.
const store = useWindowStore()

const windowEl = ref<HTMLElement | null>(null)

const { x, y, startDrag } = useDraggable(props.initialX ?? 100, props.initialY ?? 100)
const { width, height, startResize } = useResizable()

const windowStyle = computed(() => ({
  left: `${x.value}px`,
  top: `${y.value}px`,
  zIndex: store.zIndexOf(props.windowId),
  ...(width.value !== null ? { width: `${width.value}px` } : {}),
  ...(height.value !== null ? { height: `${height.value}px` } : {}),
}))

function handleResizeStart(event: MouseEvent) {
  if (windowEl.value) {
    startResize(event, windowEl.value)
  }
}
</script>

<template>
  <div class="win-window" ref="windowEl" :style="windowStyle" @mousedown="store.bringToFront(windowId)">
    <div class="win-titlebar" @mousedown="startDrag">
      <div class="win-title-group">
        <img v-if="icon" :src="icon" class="win-icon" alt="" />
        <span class="win-title">{{ title }}</span>
      </div>
      <div class="win-controls" @mousedown.stop>
        <span @click="emit('close')"></span>
      </div>
    </div>
    <div class="win-content">
      <slot />
    </div>
    <div class="win-resize-handle" @mousedown="handleResizeStart"></div>
  </div>
</template>

<style scoped>
.win-window {
  position: fixed;
  width: auto;
  max-width: 90vw;
  min-width: 20vw;
  padding: 6px;
  border: 6px solid var(--accent);
  background: var(--window);
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.4),
    inset 1px 1px 0 white,
    inset -1px -1px 0 black;
  font-family: 'VT323', monospace;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
}

.win-titlebar {
  height: 32px;
  background: var(--window);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 4px;
  border: 2px solid var(--accent);
  margin: 2px;
  width: calc(100% - 4px);
  box-sizing: border-box;
  cursor: grab;
  flex-shrink: 0;
}

.win-titlebar:active {
  cursor: grabbing;
}

.win-title-group {
  display: flex;
  align-items: center;
  gap: 5px;
}

.win-icon {
  width: 16px;
  height: 16px;
  image-rendering: pixelated;
  flex-shrink: 0;
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
  transition: background 0.15s, box-shadow 0.15s;
}

.win-controls span:hover {
  background: #cc0000;
  box-shadow: inset 1px 1px 0 #ff7777, inset -1px -1px 0 #660000;
}

.win-content {
  padding: 1rem;
  border: 2px solid #4d21cc;
  margin: 0;
  background: var(--window);
  flex: 1;
  overflow: auto;
  min-height: 0;
}

.win-resize-handle {
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 12px 12px;
  border-color: transparent transparent var(--accent) transparent;
  cursor: se-resize;
}
</style>
