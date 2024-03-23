<script setup>
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useThemeModeStore } from './stores/themeMode'
const theme = useThemeModeStore()

const { isDark } = storeToRefs(theme)

onMounted(() => {
  isDark
})
</script>

<template>
  <RouterView />
</template>

<style></style>
