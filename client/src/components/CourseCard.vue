<template>
  <div class="card">
    <h3>{{ props.card.title }}</h3>
    <p>{{ props.card.description }}</p>
    <div class="card__action">
      <button>
        {{ t('global.btn.move') }}
        <div class="arrow-wrapper">
          <div class="arrow"></div>
        </div>
      </button>

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

button {
  --primary-color: #fff;
  --secondary-color: #7b3ff2;
  --arrow-width: 10px;
  --arrow-stroke: 2px;
  box-sizing: border-box;
  font-size: 15px;
  border: 0;
  border-radius: 20px;
  color: var(--secondary-color);
  display: flex;
  transition: 0.2s background;
  align-items: center;
  gap: 0.6em;
  font-weight: 500;
}

button .arrow-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

button .arrow {
  margin-top: 1px;
  width: var(--arrow-width);
  background: transparent;
  height: var(--arrow-stroke);
  position: relative;
  transition: 0.2s;
}

button .arrow::before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  border: solid var(--secondary-color);
  border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
  display: inline-block;
  top: -3px;
  right: 3px;
  transition: 0.2s;
  padding: 3px;
  transform: rotate(-45deg);
}

button:hover {
  background-color: var(--hover-color);
}

button:hover .arrow {
  background: var(--secondary-color);
}

button:hover .arrow:before {
  right: 0;
}
</style>
