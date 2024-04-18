<template>
  <div class="education">
    <h2>Подготовка</h2>
    <div class="education__cards">
      <EduCard />
      <EduCard />
      <EduCard />
      <EduCard />
    </div>
  </div>
</template>

<script setup>
import EduCard from '@/components/EduCard.vue'
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.education {
  margin-top: 50px;

  h2 {
    font-size: 23px;
    font-weight: 600;
    color: #000;
    .dark &{
      color: abs.$almost-white;
    }
  }

  &__cards {
    width: 100%;
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @include abs.breakpoint('laptop-sm') {
      grid-template-columns: repeat(2, 1fr);
    }
    @include abs.breakpoint('tablet-md') {
      grid-template-columns: repeat(1, 1fr);
    }

  }
}
</style>
