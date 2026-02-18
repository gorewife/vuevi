<script setup lang="ts">
import Desktop from '@/components/Desktop.vue'
</script>

<template>
  <Desktop />
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

/* global animation stays global */
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
  background: repeating-linear-gradient(to bottom,
      rgba(0, 0, 0, 0.03),
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 3px);
}
</style>
