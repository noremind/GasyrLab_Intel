<template>
  <div class="card">
    <h3>{{ props.card.title }}</h3>
    <p>{{ props.card.description }}</p>
    <div class="card__action">
<<<<<<< HEAD
      <slot name="button"></slot>
=======
      <button>
        {{ t('global.btn.move') }}
        <div class="arrow-wrapper">
          <div class="arrow"></div>
        </div>
      </button>
>>>>>>> 4eaf7e0606b869731eac9d5f16eb7c9b3dc29ed1

      <slot name="image"></slot>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const props = defineProps({
  card: {
    type: Object,
    default: null
  }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.card {
  width: 100%;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 15px;
  padding: 30px 30px 0 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  h3 {
    color: abs.$almost-black;
    font-size: 20px;
    font-weight: 700;
  }

  p {
    color: abs.$gray;
    font-size: 16px;
  }

  .card__action {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
