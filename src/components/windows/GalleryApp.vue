<script setup lang="ts">
import AppWindow from '@/components/windows/AppWindow.vue'
import paperIcon from '@/assets/paper.png'
import viv1 from '@/assets/viv1.jpg'
import viv2 from '@/assets/viv2.jpg'
import viv3 from '@/assets/viv3.png'

const props = defineProps<{
  windowId: string
  initialX?: number
  initialY?: number
}>()

defineEmits<{ (e: 'close'): void }>()

const cosplays = [
  { src: viv1, name: 'me' },
  { src: viv2, name: 'me' },
  { src: viv3, name: 'ame-chan' },
]
</script>

<template>
  <AppWindow title="COSPLAYS.EXE" :icon="paperIcon" :window-id="props.windowId" :initial-x="props.initialX"
    :initial-y="props.initialY" @close="$emit('close')">
    <div class="gallery">
      <figure v-for="(cosplay, i) in cosplays" :key="i" class="photo-frame">
        <img :src="cosplay.src" :alt="cosplay.name" />
        <figcaption>{{ cosplay.name }}</figcaption>
      </figure>
    </div>
  </AppWindow>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 4px;
  min-width: 480px;
}

.photo-frame {
  margin: 0;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 3px solid var(--accent);
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.35),
    inset 1px 1px 0 #fff,
    inset -1px -1px 0 #aaa;
  padding: 4px 4px 0 4px;
}

.photo-frame img {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  display: block;
  filter: saturate(0.85) contrast(1.05);
}

figcaption {
  font-family: 'VT323', monospace;
  font-size: 13px;
  text-align: center;
  padding: 2px 0;
  color: var(--accent);
  letter-spacing: 1px;
}
</style>
