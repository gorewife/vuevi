<script setup lang="ts">
import AppWindow from './AppWindow.vue'
</script>

<template>
  <AppWindow title="LINKS.EXE" @close="$emit('close')">
    <h1 class="glitch" data-text="CONNECT">CONNECT</h1>
    <div class="social-links">
      <a href="https://www.tiktok.com/@cradlemybody" target="_blank">TikTok</a>
      <a href="https://twitter.com/cradlemybody" target="_blank">Twitter</a>
      <a href="https://instagram.com/cradlemybody" target="_blank">Instagram</a>
    </div>
  </AppWindow>
</template>
