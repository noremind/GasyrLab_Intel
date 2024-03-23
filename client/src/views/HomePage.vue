<template>
  <Header> </Header>
  <!-- <div class="home">
    <h1>{{ t('header.title') }}</h1>
  </div> -->
  <Button :isActive="true"></Button>
  <h2 class="title">Component</h2>
</template>

<script setup>
import Button from '@/components/littleComponent/ButtonComponent.vue'
import Header from '@/components/HeaderMain.vue'
// import { useI18n } from 'vue-i18n'

// const { t } = useI18n()
</script>

<style scoped lang="scss"></style>
