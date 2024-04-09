<template>
  <div class="card">
    <img src="../assets/images/people/ceoSM.png" alt="ceo" />
    <h3>Jakub Khalykberdiev</h3>
    <p>CEO GasyrLab</p>
    <div class="gradient"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts/' as abs;
.card {
  max-width: 250px;
  width: 100%;
  // width: 250px;
  height: clamp(16.25rem, 13.977rem + 11.36vw, 22.5rem);
  border-radius: 20px;
  position: relative;
  background: rgb(29, 0, 87);
  background: linear-gradient(180deg, rgba(29, 0, 87, 1) 0%, rgba(123, 63, 242, 1) 100%);
  transition: all 0.2s ease-in;

  &:hover {
    box-shadow:
      rgba(123, 63, 242, 0.4) 5px 5px,
      rgba(123, 63, 242, 0.3) 10px 10px,
      rgba(123, 63, 242, 0.2) 15px 15px;
    transform: translate(-5px, -5px);
  }

  @include abs.breakpoint('mobile-lg') {
    margin-top: 30px;
  }

  img {
    max-width: auto;
    position: absolute;
    z-index: 9;
    border-radius: 20px;
    bottom: 0;
  }

  h3 {
    position: absolute;
    bottom: 40px;
    font-weight: 600;
    z-index: 11;
    font-size: 19px;
    left: 15px;
    color: #fff;
  }
  p {
    color: #e4dfff;
    position: absolute;
    font-weight: 500;
    bottom: 15px;
    z-index: 11;
    left: 15px;
  }

  .gradient {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgb(0, 0, 0, 0) 50%, rgba(123, 63, 242, 1) 100%);
    position: absolute;
    opacity: 0.5;
    z-index: 10;
  }
}
</style>
