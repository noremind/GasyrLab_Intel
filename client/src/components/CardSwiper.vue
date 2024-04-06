<template>
  <swiper :slidesPerView="3" :breakpoints="breakpoints" :spaceBetween="30" class="mySwiper">
    <swiper-slide v-for="data in swiperData" :key="data.id">
      <div class="card-swiper" :style="{ 'background-color': data.bgColor }">
        <p class="card-swiper__number">{{ data.id }}</p>
        <div class="card-swiper__first-side">
          <h1 class="card-swiper__title">{{ data.title }}</h1>
          <p class="card-swiper__desc">{{ data.description }}</p>
        </div>
        <div class="card-swiper__hover">
          <!-- <p>
            {{ data.hoverDescription }}
          </p> -->
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import swiperData from '@/stores/swiperData.js'
import 'swiper/scss'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const breakpoints = {
      1024: {
        slidesPerView: 3.3,
        spaceBetween: 30,
        centeredSlides: false
      },
      768: {
        slidesPerView: 2.3,
        spaceBetween: 15
        // centeredSlides: true
      },
      320: {
        slidesPerView: 1.3,
        spaceBetween: 10
        // centeredSlides: true
      }
    }
    swiperData
    return {
      breakpoints,
      swiperData
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.card-swiper {
  border-radius: 20px;
  max-width: 377px;
  position: relative;
  margin: 30px 0;
  color: abs.$almost-black;
  min-height: 350px;

  &__number {
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: abs.$almost-black;
    color: abs.$almost-white;
    display: inline;
    padding: 15px 26px;
    font-size: 26px;
    border-radius: 50%;
  }

  &__title {
    font-size: clamp(1.375rem, 1.261rem + 0.57vw, 1.688rem);
    font-weight: 500;
    color: abs.$almost-black;
    padding: 118px 0 0;
  }

  &__desc {
    align-items: flex-end;
    font-size: clamp(0.875rem, 0.83rem + 0.23vw, 1rem);
  }

  &__first-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 25px;
    padding: clamp(0.625rem, 0.284rem + 1.7vw, 1.563rem);
    min-height: 330px;
    position: relative;
    z-index: 2;
  }

  &__hover {
    position: absolute;
    z-index: -1;
    padding: 30px;
  }
}
</style>
