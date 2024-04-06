<template>
  <button>
    <div class="arrow-wrapper">
      <div class="arrow"></div>
    </div>
    <slot>
      {{ t('global.btn.default') }}
    </slot>
  </button>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss" scoped>
.btn {
  --primary-color: #fff;
  --secondary-color: #7b3ff2;
  --arrow-width: 10px;
  --arrow-stroke: 2px;
  box-sizing: border-box;
  font-size: 15px;
  width: 70px;
  border-radius: 20px;
  color: var(--secondary-color);
  display: flex;
  transition: 0.2s background;
  align-items: center;
  gap: 0.6em;
  font-weight: 500;

  // &--left .arrow {
  //   // transform: rotate(180deg)
  //   // display: none;
  // }

  &--white {
    color: #fff;
  }


}

.btn .arrow-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn .arrow {
  margin-top: 1px;
  width: var(--arrow-width);
  background: transparent;
  height: var(--arrow-stroke);
  position: relative;
  transition: 0.2s;
  transform: rotate(180deg);
}

.btn .arrow::before {
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

.btn:hover {
  background-color: transparent;
}

.btn:hover .arrow {
  background: var(--secondary-color);
}

.btn:hover .arrow:before {
  right: 0;
}
</style>
