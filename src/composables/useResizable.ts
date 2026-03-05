import { ref } from 'vue'

export function useResizable(minWidth = 200, minHeight = 80) {
  const width = ref<number | null>(null)
  const height = ref<number | null>(null)

  function startResize(event: MouseEvent, el: HTMLElement) {
    event.preventDefault()
    event.stopPropagation()

    // On first resize, lock in the current rendered dimensions so we have a baseline
    if (width.value === null) width.value = el.offsetWidth
    if (height.value === null) height.value = el.offsetHeight

    let prevX = event.clientX
    let prevY = event.clientY

    function onMouseMove(e: MouseEvent) {
      width.value = Math.max(minWidth, (width.value ?? 0) + e.clientX - prevX)
      height.value = Math.max(minHeight, (height.value ?? 0) + e.clientY - prevY)
      prevX = e.clientX
      prevY = e.clientY
    }

    function onMouseUp() {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }

  return { width, height, startResize }
}
