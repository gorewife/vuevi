<script setup lang="ts">
import { ref } from 'vue'
import DesktopIcon from './components/DesktopIcon.vue'
import AppWindow from './components/AppWindow.vue'

import heartIcon from './assets/heart.png'
import chessIcon from './assets/chess.png'
import paperIcon from './assets/paper.png'

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
    <AppWindow v-if="openApps.home" title="HOME.EXE" @close="close('home')" :style="{ top: '60px', left: '80px' }">
      <p>Home App Content</p>
    </AppWindow>

    <AppWindow v-if="openApps.cosplays" title="COSPLAYS.EXE" @close="close('cosplays')" :style="{ top: '100px', left: '220px' }">
      <p>Cosplays App Content</p>
    </AppWindow>

    <AppWindow v-if="openApps.links" title="LINKS.EXE" @close="close('links')" :style="{ top: '140px', left: '360px' }">
      <p>Links App Content</p>
    </AppWindow>
  </div>
</template>

<style>
:root {
  --text: black;
  --bg: #f0e6f8;
  --window: #cdb0e2;
  --pink: #d37ecd;
  --cyan: #b2ccf1;
  --purple: #9e71c7;
}

/* Desktop */
.desktop {
  display: grid;
  grid-template-columns: repeat(auto-fill, 80px); /* each icon box is 80px wide */
  grid-auto-rows: 80px; /* row height matches icon box */
  gap: 1rem; /* space between icons */
  padding: 1rem;
  align-content: start; /* icons stick to top of screen */
}

#app, .desktop {
  width: 100vw;
  height: 100vh;
  background: var(--bg);
  padding: 1rem;
  overflow: hidden;
  font-family: 'VT323', monospace;
  color: var(--text);
}

/* Glitch text effect (can be used in windows later) */
.glitch {
  position: relative;
  color: var(--pink);
  font-size: 3rem;
  font-family: VT323, monospace;
}
.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.75;
}
.glitch::before {
  color: var(--cyan);
  transform: translate(2px, -2px);
  animation: glitch 1.5s infinite linear alternate-reverse;
}
.glitch::after {
  color: var(--purple);
  transform: translate(-2px, 2px);
  animation: glitch 1s infinite linear alternate-reverse;
}
@keyframes glitch {
  0% { clip-path: inset(0 0 90% 0); }
  50% { clip-path: inset(40% 0 20% 0); }
  100% { clip-path: inset(80% 0 5% 0); }
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


