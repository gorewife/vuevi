<script setup lang="ts">
import { ref } from 'vue'

import DesktopIcon from '@/components/windows/DesktopIcon.vue'
import AboutMeApp from '@/components/windows/AboutMeApp.vue'
import GalleryApp from '@/components/windows/GalleryApp.vue'
import SocialsApp from '@/components/windows/SocialsApp.vue'

import heartIcon from '@/assets/heart.png'
import paperIcon from '@/assets/paper.png'
import chessIcon from '@/assets/chess.png'

const openApps = ref({
  aboutMe: false,
  gallery: false,
  socials: false
})

function open(app: keyof typeof openApps.value) {
  openApps.value[app] = true
}

function close(app: keyof typeof openApps.value) {
  openApps.value[app] = false
}
</script>

<template>
  <div class="desktop">
    <!-- Desktop Icons -->
    <DesktopIcon label="About Me" :icon="heartIcon" @open="open('aboutMe')" />
    <DesktopIcon label="Gallery" :icon="paperIcon" @open="open('gallery')" />
    <DesktopIcon label="Socials" :icon="chessIcon" @open="open('socials')" />

    <Transition name="win-pop">
      <AboutMeApp v-if="openApps.aboutMe" @close="close('aboutMe')" :initial-x="160" :initial-y="80" />
    </Transition>

    <Transition name="win-pop">
      <GalleryApp v-if="openApps.gallery" @close="close('gallery')" :initial-x="60" :initial-y="100" />
    </Transition>

    <Transition name="win-pop">
      <SocialsApp v-if="openApps.socials" @close="close('socials')" :initial-x="380" :initial-y="100" />
    </Transition>
  </div>
</template>

<style scoped>
.desktop {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 80px);
  grid-auto-rows: 80px;
  gap: 1rem;
  padding: 1rem;

  aspect-ratio: 5 / 4;
  width: 90vw;
  max-width: calc(80vh * 5 / 4);

  margin: 4rem auto;

  background-image: url('../assets/wallpaper.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  overflow: hidden;
  border: 2px solid #8087f0;
}
</style>
