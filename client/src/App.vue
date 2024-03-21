<script setup>
import { RouterView } from 'vue-router'
import Btn from '@/components/littleComponent/SwitchBtnLang.vue'
import Header from '@/components/HeaderComponent.vue'
</script>

<template>
  <Header />
  <Btn></Btn>
  <RouterView />
</template>

<style lang="scss" scoped></style>
