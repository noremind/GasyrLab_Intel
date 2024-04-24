<template>
  <div class="card">
    <div class="card__text">
      <h2>Title</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <ButtonAdd class="btn"></ButtonAdd>
    </div>
    <div class="card__img">
      <img src="../assets/images/icons/graduation.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import ButtonAdd from '@/components/littleComponent/ButtonAdditional.vue'
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;
.card {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  &__text {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;

    h2 {
      font-weight: 600;
      font-size: 20px;
      color: abs.$almost-black;
    }
    p {
      color: abs.$gray;
    }
  }

  &__img {
    width: 100px;

    img {
      position: absolute;
      bottom: -20px;
      right: -10px;
      width: 100px;
    }
  }
}
</style>
