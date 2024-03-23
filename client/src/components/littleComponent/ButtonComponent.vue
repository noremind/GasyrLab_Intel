<template>
  <button class="btn" :class="props.isActive ? 'btn--active' : ' '" type="button">
    <slot>
      {{ t('global.btn.default') }}
    </slot>
  </button>
</template>

<script setup>
    import { useI18n } from 'vue-I18n'
    const { t } = useI18n()
    const props = defineProps({
    isActive: {
        type: Boolean,
        default: false
    }
    })
</script>

<style lang="scss" scoped></style>
