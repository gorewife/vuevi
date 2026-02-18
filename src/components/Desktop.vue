<script setup lang="ts">
import { ref } from 'vue'

import DesktopIcon from '@/components/modals/DesktopIcon.vue'
import AboutMeApp from '@/components/modals/AboutMeApp.vue'
import GalleryApp from '@/components/modals/GalleryApp.vue'
import SocialsApp from '@/components/modals/SocialsApp.vue'

import heartIcon from '../assets/heart.png'
import paperIcon from '../assets/paper.png'
import chessIcon from '../assets/chess.png'

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
      <AboutMeApp v-if="openApps.aboutMe" @close="close('aboutMe')"
        :style="{ top: 'calc(50% - 150px)', left: 'calc(50% - 200px)' }" />
    </Transition>

    <Transition name="win-pop">
      <GalleryApp v-if="openApps.gallery" @close="close('gallery')" :style="{ top: '100px', left: '80px' }" />
    </Transition>

    <Transition name="win-pop">
      <SocialsApp v-if="openApps.socials" @close="close('socials')"
        :style="{ top: '120px', left: 'calc(100% - 320px)' }" />
    </Transition>
  </div>
</template>

<style scoped>
.desktop {
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
