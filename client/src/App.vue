<script setup>
import { RouterView } from 'vue-router'
import Btn from '@/components/littleComponent/ToggleBtnLang.vue'
import ThemeButton from '@/components/littleComponent/ToggleBtnTheme.vue'
</script>

<template>
  <Btn></Btn>
  <ThemeButton></ThemeButton>

  <RouterView />
</template>

<style></style>
