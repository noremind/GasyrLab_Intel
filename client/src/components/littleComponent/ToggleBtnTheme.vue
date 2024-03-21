<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const isToggle = useToggle(isDark)
</script>

<template>
  <h1>Dark mode: {{ isDark }}</h1>
  <button @click="isToggle()">Toggle theme button</button>
</template>

<style></style>
