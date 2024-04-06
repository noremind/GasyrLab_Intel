<template>
  <div class="courses" id="courses">
    <div class="container">
      <div class="courses__wrapper">
        <h2 class="title">{{ t('page.main.main.ourCourses.title') }}</h2>
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
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.courses {
  &__wrapper {
    margin-top: 50px;
    .title {
      margin-bottom: 40px;
    }
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
      margin-bottom: -4px;
    }
  }
}
</style>
