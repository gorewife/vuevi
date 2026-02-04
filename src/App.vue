<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

import DesktopIcon from './components/DesktopIcon.vue'
import AboutMeApp from './components/AboutMeApp.vue'
import GalleryApp from './components/GalleryApp.vue'
import SocialsApp from './components/SocialsApp.vue'

import heartIcon from './assets/heart.png'
import paperIcon from './assets/paper.png'
import chessIcon from './assets/chess.png'

// Boot screen state
const booting = ref(true)

// Apps open state
const openApps = ref({
  aboutMe: false,
  gallery: false,
  socials: false
})

// Helper array to control when animations trigger
const appsToOpen = ref<(keyof typeof openApps.value)[]>([])

function open(app: keyof typeof openApps.value) {
  openApps.value[app] = true
}

function close(app: keyof typeof openApps.value) {
  openApps.value[app] = false
}

// Simulate boot sequence
onMounted(() => {
  setTimeout(async () => {
    booting.value = false      // hide boot screen
    await nextTick()           // wait for DOM to update

    // Open all apps after boot with optional stagger
    const apps: (keyof typeof openApps.value)[] = ['aboutMe', 'gallery', 'socials']
    appsToOpen.value = apps

    apps.forEach((app, i) => {
      setTimeout(() => {
        openApps.value[app] = true
      }, i * 150) // 150ms stagger between windows
    })
  }, 2500) // boot screen duration
})
</script>

<template>
  <!-- Boot screen -->
  <div v-if="booting" class="boot-screen">
    <pre class="boot-text">
Starting Windows 98...
C:\WINDOWS\>_
    </pre>
  </div>

  <!-- Desktop + windows -->
  <div v-else class="desktop">
    <!-- Desktop Icons -->
    <DesktopIcon label="About Me" :icon="heartIcon" @open="open('aboutMe')" />
    <DesktopIcon label="Gallery" :icon="paperIcon" @open="open('gallery')" />
    <DesktopIcon label="Socials" :icon="chessIcon" @open="open('socials')" />

    <!-- Windows with transition -->
    <Transition name="win-pop">
      <AboutMeApp 
        v-if="openApps.aboutMe && appsToOpen.includes('aboutMe')" 
        @close="close('aboutMe')" 
        :style="{ top: 'calc(50% - 150px)', left: '800px' }" 
      />
    </Transition>

    <Transition name="win-pop">
      <GalleryApp 
        v-if="openApps.gallery && appsToOpen.includes('gallery')" 
        @close="close('gallery')" 
        :style="{ top: '200px', left: '300px' }" 
      />
    </Transition>

    <Transition name="win-pop">
      <SocialsApp 
        v-if="openApps.socials && appsToOpen.includes('socials')" 
        @close="close('socials')" 
        :style="{ top: '120px', left: '900px' }" 
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

/* Boot screen */
.boot-screen {
  position: fixed;
  inset: 0;
  background: black;
  color: #0f0;
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 9999;
}

.boot-text::after {
  content: "_";
  animation: blink 1s steps(1) infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  50.01%, 100% { opacity: 0; }
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
