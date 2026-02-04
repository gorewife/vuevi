<script setup lang="ts">
import AppWindow from './AppWindow.vue'
</script>

<template>
  <AppWindow title="ABOUTME.EXE" @close="$emit('close')">
    <h1 class="glitch" data-text="ABOUT ME">ABOUT ME</h1>
    <img
    src="../assets/vivi.gif"
    alt="pfp"
    >
    <p>Lorem, ipsum dolor sit amet consectetur</p>
    <p>Voluptate, perferendis dolores adipisci sequi </p>
    <p>repellendus accusantium ad inventore fuga sunt consequatur</p>
  </AppWindow>
</template>


