<script setup lang="ts">
import AppWindow from '@/components/windows/AppWindow.vue'

const props = defineProps<{
  windowId: string
  initialX?: number
  initialY?: number
}>()

defineEmits<{ (e: 'close'): void }>()

import chessIcon from '@/assets/chess.png'
import TikTokIcon from '@/assets/tiktok.png'
import TwitterIcon from '@/assets/twitter.png'
import InstagramIcon from '@/assets/instagram.png'
</script>

<template>
  <AppWindow title="LINKS.EXE" :icon="chessIcon" :window-id="props.windowId" :initial-x="props.initialX"
    :initial-y="props.initialY" @close="$emit('close')">
    <div class="social-links">
      <a href="https://www.tiktok.com/@cradlemybody" target="_blank">
        <img :src="TikTokIcon" alt="TikTok" class="social-icon" />
      </a>
      <a href="https://twitter.com/cradlemybody" target="_blank">
        <img :src="TwitterIcon" alt="Twitter" class="social-icon" />
      </a>
      <a href="https://instagram.com/cradlemybody" target="_blank">
        <img :src="InstagramIcon" alt="Instagram" class="social-icon" />
      </a>
    </div>
  </AppWindow>
</template>

<style scoped>
.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social-icon {
  width: 40px;
  height: 40px;
}
</style>