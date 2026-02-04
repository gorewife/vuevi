<script setup lang="ts">
import AppWindow from './AppWindow.vue'

import TikTokIcon from '../assets/tiktok.png'
import TwitterIcon from '../assets/twitter.png'
import InstagramIcon from '../assets/instagram.png'
import PatreonIcon from '../assets/patreon.png'
</script>

<template>
  <AppWindow title="LINKS.EXE" @close="$emit('close')">
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
      <a href="https://www.patreon.com/cw/cradlemybody" target="_blank">
        <img :src="PatreonIcon" alt="Patreon" class="social-icon" />
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
  width: 40px; /* adjust size */
  height: 40px;
}
</style>