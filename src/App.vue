<script setup lang="ts">
import { ref } from 'vue'

import DesktopIcon from './components/DesktopIcon.vue'
import AboutMeApp from './components/AboutMeApp.vue'
import GalleryApp from './components/GalleryApp.vue'
import SocialsApp from './components/SocialsApp.vue'

import heartIcon from './assets/heart.png'
import paperIcon from './assets/paper.png'
import chessIcon from './assets/chess.png'

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
      <AboutMeApp v-if="openApps.aboutMe"
      @close="close('aboutMe')"
      :style="{ top: 'calc(50% - 150px)', left: 'calc(50% - 200px)' }"
       />
    </Transition>

    <Transition name="win-pop">
      <GalleryApp v-if="openApps.gallery"
      @close="close('gallery')"
      :style="{ top: '100px', left: '80px' }"
      />
    </Transition>

    <Transition name="win-pop">
      <SocialsApp v-if="openApps.socials"
      @close="close('socials')"
      :style="{ top: '120px', left: 'calc(100% - 320px)' }"
      />
    </Transition>
  </div>
</template>

<style>
:root {
  --bg: #f0e6f8;
  --window: #cdb0e2;
  --pink: #d37ecd;
  --cyan: #b2ccf1;
  --purple: #9e71c7;
  --text: #000;
}

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

  background-image: url('./assets/wallpaper.png'); 
  background-size: cover;        
  background-position: center;   
  background-repeat: no-repeat;  

  color: var(--text);
  font-family: 'VT323', monospace;
  overflow: hidden;
  border: 2px solid #8087f0;
}

/* Window animation */
.win-pop-enter-active {
  transition: transform 0.15s ease-out;
}
.win-pop-leave-active {
  transition: transform 0.15s ease-in;
}

.win-pop-enter-from {
  transform: scale(0) translate(var(--icon-x, 0), var(--icon-y, 0));
}
.win-pop-enter-to {
  transform: scale(1) translate(0, 0);
}

.win-pop-leave-from {
  transform: scale(1) translate(0, 0);
}
.win-pop-leave-to {
  transform: scale(0) translate(var(--icon-x, 0), var(--icon-y, 0));
}

body::after {
  content: "";
  pointer-events: none;
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    rgba(0,0,0,0.03),
    rgba(0,0,0,0.03) 1px,
    transparent 1px,
    transparent 3px
  );
}
</style>


