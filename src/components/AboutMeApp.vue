<script setup lang="ts">
import AppWindow from './AppWindow.vue'

import heartIcon from '../assets/heart.png' 
</script>

<template>
  <AppWindow title="ABOUTME.EXE"
  :icon="heartIcon"
  @close="$emit('close')"
  > 
    <img
    src="../assets/vivi.gif"
    alt="pfp"
    >
    <p>hiiii</p>
    <p>hahaa</p>
    <p>whadup yo</p>
  </AppWindow>
</template>


