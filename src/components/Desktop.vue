<script setup lang="ts">
import DesktopIcon from '@/components/windows/DesktopIcon.vue'
import AboutMeApp from '@/components/windows/AboutMeApp.vue'
import GalleryApp from '@/components/windows/GalleryApp.vue'
import SocialsApp from '@/components/windows/SocialsApp.vue'
import { onMounted } from 'vue'
import { useWindowStore } from '@/stores/windowStore'

import heartIcon from '@/assets/heart.png'
import paperIcon from '@/assets/paper.png'
import chessIcon from '@/assets/chess.png'

const store = useWindowStore()

// Open all windows when the page first loads so they animate in together.
onMounted(() => {
  store.open('aboutMe')
  store.open('gallery')
  store.open('socials')
})
</script>

<template>
  <div class="desktop">
    <!-- Desktop Icons -->
    <DesktopIcon label="About Me" :icon="heartIcon" @open="store.open('aboutMe')" />
    <DesktopIcon label="Gallery" :icon="paperIcon" @open="store.open('gallery')" />
    <DesktopIcon label="Socials" :icon="chessIcon" @open="store.open('socials')" />

    <!-- Teleport renders the window DOM directly into <body>, so it escapes
         the desktop's overflow:hidden and can float over the whole viewport. -->
    <Teleport to="body">
      <Transition name="win-pop">
        <AboutMeApp v-if="store.isOpen('aboutMe')" window-id="aboutMe"
          @close="store.close('aboutMe')" :initial-x="40" :initial-y="80" />
      </Transition>

      <Transition name="win-pop">
        <GalleryApp v-if="store.isOpen('gallery')" window-id="gallery"
          @close="store.close('gallery')" :initial-x="340" :initial-y="60" />
      </Transition>

      <Transition name="win-pop">
        <SocialsApp v-if="store.isOpen('socials')" window-id="socials"
          @close="store.close('socials')" :initial-x="870" :initial-y="80" />
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.desktop {
  font-family: 'VT323', monospace;

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

@media (max-width: 768px) {
  .desktop {
    width: 100%;
    max-width: 100%;
    aspect-ratio: unset;
    height: auto;
    margin: 0 0 8px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    overflow: visible;
    border-left: none;
    border-right: none;
  }
}
</style>
