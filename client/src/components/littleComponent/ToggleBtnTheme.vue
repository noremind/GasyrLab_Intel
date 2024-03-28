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
        <svg
          class="theme__svg"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
          @click="theme.isToggle()"
          v-if="theme.isDark"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <path
            d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
          ></path>
        </svg>

        <svg
          class="theme__svg"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
          @click="theme.isToggle()"
          v-else
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </Transition>

      <!-- <Transition mode="out-in" name="theme">
        <button class="theme__btn" @click="theme.isToggle()" v-if="theme.isDark">
          {{ t('theme.light') }}
        </button>
        <button class="theme__btn" @click="theme.isToggle()" v-else>{{ t('theme.dark') }}</button>
      </Transition> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.theme {
  position: relative;

  &__svg {
    width: 25px;
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
