<template>
  <div class="container">
    <Header></Header>
    <div class="training">
      <div class="nav__wrapper">
        <Nav class="nav"></Nav>
      </div>
      <Content class="content"></Content>
    </div>
  </div>
  <Waves></Waves>
  <Footer></Footer>
</template>

<script setup>
import Nav from '@/components/TrainingNav.vue'
import Content from '@/components/TrainingContent.vue'
import Header from '@/components/HeaderMain.vue'
import Waves from '@/components/WavesAnimation.vue'
import Footer from '@/components/FooterMain.vue'
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.training {
  margin-top: 20px;
  display: flex;
  gap: 30px;

  @include abs.breakpoint('tablet-sm') {
    flex-direction: column;
  }
}

.nav {
  position: sticky;
  top: 20px;
  @include abs.breakpoint('tablet-sm') {
    position: static;
  }
}

.nav__wrapper {
  min-width: 250px; /* Ширина навигационного блока */
  height: auto;
  border-radius: 20px;
}

.content {
  width: 100%;
}
</style>
