<template>
  <Loading v-if="isLoading"></Loading>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useThemeModeStore } from './stores/themeMode'
import Loading from '@/components/LoadingComponent.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const theme = useThemeModeStore()

const { isDark } = storeToRefs(theme)

const isLoading = ref(false)
router.beforeEach(() => {
  isLoading.value = true
})

router.afterEach(() => {
  isLoading.value = false
})

onMounted(() => {
  isDark
})
</script>

<style></style>
