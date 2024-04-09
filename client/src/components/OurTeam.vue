<template>
  <div class="team">
    <div class="container">
      <div class="team__wrapper">
        <h2 class="title">Наша Команда</h2>
        <div class="team__cards">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import Card from '../components/CardTeam.vue';
import Card from '@/components/TeamCard.vue'
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts/' as abs;

.team {
  &__wrapper {
    margin-top: 100px;
  }

  &__cards {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    justify-items: center;
    gap: 30px;

    @include abs.breakpoint('laptop-md') {
      grid-template-columns: repeat(3, 1fr);
    }

    @include abs.breakpoint('tablet') {
      grid-template-columns: repeat(2, 1fr);
    }

    @include abs.breakpoint('mobile-lg') {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
