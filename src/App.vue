<script setup lang="ts">
import { ref } from 'vue'
import DesktopIcon from './components/DesktopIcon.vue'
import AppWindow from './components/AppWindow.vue'

import heartIcon from './assets/heart.png'
import paperIcon from './assets/paper.png'
import chessIcon from './assets/chess.png'

const openApps = ref({
  home: false,
  cosplays: false,
  links: false
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
    <DesktopIcon label="Home" :icon="heartIcon" @open="open('home')" />
    <DesktopIcon label="Cosplays" :icon="paperIcon" @open="open('cosplays')" />
    <DesktopIcon label="Links" :icon="chessIcon" @open="open('links')" />

    <!-- Windows -->
    <Transition name="win-fade">
      <AppWindow v-if="openApps.home" title="HOME.EXE" @close="close('home')" />
    </Transition>

    <Transition name="win-fade">
      <AppWindow v-if="openApps.cosplays" title="COSPLAYS.EXE" @close="close('cosplays')" />
    </Transition>

    <Transition name="win-fade">
      <AppWindow v-if="openApps.links" title="LINKS.EXE" @close="close('links')" />
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

/* Desktop grid */
.desktop {
  display: grid;
  grid-template-columns: repeat(5, 80px); /* 5 columns for 5:4 feel */
  grid-auto-rows: 80px;
  gap: 1rem;
  padding: 1rem;

  /* Constrain the desktop size */
  width: 400px;  /* 5 cols * 80px */
  height: 320px; /* 4 rows * 80px */
  
  margin: 2rem auto; /* center horizontally */
  background: var(--bg);
  color: var(--text);
  font-family: 'VT323', monospace;
  overflow: hidden;
  border: 2px solid #8087f0; /* optional frame */
}

/* Window animation */
.win-fade-enter-active,
.win-fade-leave-active {
  transition: all 0.3s ease;
}
.win-fade-enter-from,
.win-fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
.win-fade-enter-to,
.win-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}

/* Optional CRT scanlines */
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


