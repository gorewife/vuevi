<script setup lang="ts">
import AppWindow from './AppWindow.vue'
</script>

<template>
  <AppWindow title="ABOUTME.EXE" @close="$emit('close')">
    <h1 class="glitch" data-text="ABOUT ME">ABOUT ME</h1>
    <p>Hi, Im Vivi! This is a little intro about me.</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Voluptate, perferendis dolores adipisci sequi necessitatibus natus repellat provident doloribus totam veritatis error, repellendus accusantium ad inventore fuga sunt consequatur, facilis nemo.</p>
  </AppWindow>
</template>


