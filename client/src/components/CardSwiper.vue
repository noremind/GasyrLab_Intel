<template>
  <swiper :slidesPerView="'auto'" :spaceBetween="30" class="mySwiper">
    <swiper-slide>
      <div class="card-swiper">
        <h1>Delau</h1>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/scss'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.card-swiper {
  background-color: red;
  width: 350px;
  height: 150px;
}
</style>
