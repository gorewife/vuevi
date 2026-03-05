import { ref } from 'vue'

export function useDraggable(initialX: number, initialY: number) {
  const x = ref(initialX)
  const y = ref(initialY)

  function startDrag(event: MouseEvent) {
    event.preventDefault()

    let prevX = event.clientX
    let prevY = event.clientY

    function onMouseMove(e: MouseEvent) {
      x.value += e.clientX - prevX
      y.value += e.clientY - prevY
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

  return { x, y, startDrag }
}
