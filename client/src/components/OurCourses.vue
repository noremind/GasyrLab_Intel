<template>
  <div class="courses">
    <div class="container">
      <div class="courses__wrapper">
        <h2 class="title">Направления и Курсы</h2>
        <div class="courses__cards">
          <Card v-for="(card, index) in CardData" :key="index" :card="card">
            <template #image>
              <div class="courses__svg" v-html="card.image"></div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from '@/components/CourseCard.vue'
import CardData from '@/CardData.js'
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.courses {
  &__wrapper {
    margin-top: 50px;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @include abs.breakpoint('laptop-sm') {
      grid-template-columns: repeat(2, 1fr);
    }
    @include abs.breakpoint('tablet-sm') {
      grid-template-columns: repeat(1, 1fr);
    }

    .courses__svg {
      transform: translateX(30px);
      margin-bottom: -5px;
      // transform: translateY(5px);
      // transform: translateX(50px);
    }
  }
}
</style>
