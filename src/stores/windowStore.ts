import { defineStore } from 'pinia'
import { ref } from 'vue'

// The setup-style store (second argument is a function, like a composable) is
// the idiomatic Pinia pattern for Vue 3 projects using <script setup>.
// It's just refs + functions — same mental model as what you write in components.
export const useWindowStore = defineStore('windows', () => {
  // Which windows are currently open
  const openWindows = ref<Set<string>>(new Set())

  // Tracks focus order — the last element is the topmost window.
  // When a window is focused we move it to the end of the array,
  // giving it the highest z-index.
  const focusStack = ref<string[]>([])

  function open(id: string) {
    openWindows.value.add(id)
    bringToFront(id)
  }

  function close(id: string) {
    openWindows.value.delete(id)
    focusStack.value = focusStack.value.filter(w => w !== id)
  }

  function bringToFront(id: string) {
    focusStack.value = focusStack.value.filter(w => w !== id)
    focusStack.value.push(id)
  }

  function isOpen(id: string) {
    return openWindows.value.has(id)
  }

  // z-index = position in the focus stack + a base value.
  // Windows not in the stack get 0 (they're hidden anyway).
  function zIndexOf(id: string) {
    const idx = focusStack.value.indexOf(id)
    return idx === -1 ? 0 : 10 + idx
  }

  return { open, close, bringToFront, isOpen, zIndexOf }
})
