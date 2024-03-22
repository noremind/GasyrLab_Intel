<script setup>
import { useThemeModeStore } from '@/stores/themeMode.js'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const theme = useThemeModeStore()
</script>

<template>
  <div class="theme">
    <div class="theme__wrapper">
      <Transition mode="out-in" name="theme">
        <button class="theme__btn" @click="theme.isToggle()" v-if="theme.isDark">
          {{ t('theme.light') }}
        </button>
        <button class="theme__btn" @click="theme.isToggle()" v-else>{{ t('theme.dark') }}</button>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.theme {
  position: relative;

  &__wrapper {
    position: absolute;
  }
}

.theme-enter-active,
.theme-leave-active {
  transition: all 0.25s ease-out;
}

.theme-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.theme-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
