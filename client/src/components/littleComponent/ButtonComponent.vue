<template>
  <button class="btn" :class="props.isActive ? 'btn--active' : ' '" type="button">
    <slot>
      {{ t('global.btn.default') }}
    </slot>
  </button>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;


.btn {
  --clr-font-main: hsla(0 0% 20% / 100);
  --btn-bg-1: hsla(270 80% 69% / 1);
  --btn-bg-2: hsl(260, 87%, 60%);
  --btn-bg-color: hsla(360 100% 100% / 1);
  --radii: 0.5em;
  cursor: pointer;
  padding: 0.9em 1.4em;
  min-width: 120px;
  min-height: 44px;
  font-size: var(--size, 1rem);
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-weight: 500;
  transition: 0.8s;
  background-size: 280% auto;
  background-image: linear-gradient(
    325deg,
    var(--btn-bg-2) 0%,
    var(--btn-bg-1) 55%,
    var(--btn-bg-2) 90%
  );
  border: none;
  border-radius: var(--radii);
  color: var(--btn-bg-color);
  box-shadow:
    0px 0px 20px #8160c4,
    0px 5px 5px -1px #513c7a,
    inset 4px 4px 8px #916cdc,
    inset -4px -4px 8px #b071ef;

  @include abs.breakpoint('mobile-lg') {
    width: 100%;
  }
}

.btn:hover {
  background-position: right top;
}

.btn:is(:focus, :focus-visible, :active) {
  outline: none;
  box-shadow:
    0 0 0 3px var(--btn-bg-color),
    0 0 0 6px var(--btn-bg-2);
}

@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: linear;
  }
}
</style>
