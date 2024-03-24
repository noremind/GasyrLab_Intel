<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__inner">
          <router-link :to="{ name: 'home' }"
            ><img class="logo" src="@/assets/images/logo/Gasyr_logo.svg" alt="Gasyr Lab"
          /></router-link>

          <nav class="nav nav--hidden">
            <ul class="nav__list">
              <li class="nav__list-item">
                <a href="#" class="nav__link">{{ t('page.main.header.my_training') }}</a>
              </li>
              <li class="nav__list-item">
                <a href="#" class="nav__link">{{ t('page.main.header.all_courses') }}</a>
              </li>
              <li class="nav__list-item">
                <a href="#" class="nav__link">{{ t('page.main.header.contacts') }}</a>
              </li>
              <li class="nav__list-item">
                <router-link :to="{ name: 'about' }" class="mobile-dropdown__link">{{
                  t('page.main.header.about')
                }}</router-link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="header__user header__user--hidden">
          <button @click="toggleOpenDropdown" class="header__user-btn header__user-btn--hidden">
            <img class="header__user-img" src="@/assets/images/icons/user.png" alt="User icon" />
          </button>

          <LangBtn></LangBtn>
          <TransitionGroup tag="div" name="dropdown">
            <div
              v-if="isOpenUserDropdown"
              class="header__user-dropdown header__user-dropdown--hidden"
            >
              <div class="flex-box">
                <p>Имя пользователя</p>
                <button @click="closeDropdown()">
                  {{ t('page.main.header.dropdown.log_out') }}
                </button>
              </div>
              <ThemeBtn></ThemeBtn>
            </div>
          </TransitionGroup>

          <div class="burger burger--hidden">
            <Transition mode="out-in" name="burger">
              <button class="burger__btn" @click="toggleBurgerMenu()" v-if="!isOpenBurgerMenu">
                <img
                  v-if="theme.isDark"
                  class="burger__icon"
                  src="@/assets/images/icons/burger-light-menu.svg"
                  alt="Burger menu icon"
                />
                <img
                  v-else
                  class="burger__icon"
                  src="@/assets/images/icons/burger-dark-menu.svg"
                  alt="Burger menu icon"
                />
              </button>
              <button class="burger__btn" @click="toggleBurgerMenu()" v-else-if="isOpenBurgerMenu">
                <img
                  v-if="theme.isDark"
                  class="burger__icon"
                  src="@/assets/images/icons/close-light-icon.svg"
                  alt="Burger close icon"
                />
                <img
                  v-else
                  class="burger__icon"
                  src="@/assets/images/icons/close-dark-icon.svg"
                  alt="Burger close icon"
                />
              </button>
            </Transition>
          </div>
        </div>
      </div>
      <transition-group
        tag="div"
        name="mobile-dropdown"
        class="mobile-dropdown mobile-dropdown--hidden"
      >
        <ul v-if="isOpenBurgerMenu" class="mobile-dropdown__list">
          <li class="mobile-dropdown__list-item">
            <a href="#" class="mobile-dropdown__link">{{ t('page.main.header.my_training') }}</a>
          </li>
          <li class="mobile-dropdown__list-item">
            <a href="#" class="mobile-dropdown__link">{{ t('page.main.header.all_courses') }}</a>
          </li>
          <li class="mobile-dropdown__list-item">
            <a href="#" class="mobile-dropdown__link">{{ t('page.main.header.contacts') }}</a>
          </li>
          <li class="mobile-dropdown__list-item">
            <router-link :to="{ name: 'about' }" class="mobile-dropdown__link">{{
              t('page.main.header.about')
            }}</router-link>
          </li>
          <li class="mobile-dropdown__list-item">
            <ThemeBtn></ThemeBtn>
          </li>
          <li class="mobile-dropdown__list-item">
            <div class="flex-box">
              <p>Имя пользователя</p>
              <button @click="closeBurgerMenu()">
                {{ t('page.main.header.dropdown.log_out') }}
              </button>
            </div>
          </li>
        </ul>
      </transition-group>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import LangBtn from '@/components/littleComponent/ToggleBtnLang.vue'
import ThemeBtn from '@/components/littleComponent/ToggleBtnTheme.vue'
import { useThemeModeStore } from '@/stores/themeMode.js'

const theme = useThemeModeStore()

const { t } = useI18n()
const isOpenUserDropdown = ref(false)
const isOpenBurgerMenu = ref(false)

function toggleOpenDropdown() {
  isOpenUserDropdown.value = !isOpenUserDropdown.value
}

function closeDropdown() {
  isOpenUserDropdown.value = false
}

function closeBurgerMenu() {
  isOpenBurgerMenu.value = false
}

function toggleBurgerMenu() {
  isOpenBurgerMenu.value = !isOpenBurgerMenu.value
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.header {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    position: relative;
    margin-top: 20px;
  }

  &--hidden {
    @include abs.breakpoint('tablet') {
      display: none;
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 150px;
    gap: 10px;
  }

  &__user-btn {
    display: block;

    &--hidden {
      @include abs.breakpoint('tablet') {
        display: none;
      }
    }
  }

  &__user-dropdown {
    max-width: 250px;
    padding: 16px;
    background-color: abs.$theme-dark-color;
    color: abs.$theme-light-color;
    border-radius: 8px;
    min-height: 150px;
    position: absolute;
    top: 60px;
    right: 0px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    &--hidden {
      @include abs.breakpoint('tablet') {
        display: none;
      }
    }
  }

  .dark &__user-dropdown {
    background-color: abs.$theme-light-color;
    color: abs.$theme-dark-color;
  }

  &__user-img {
    max-width: 32px;
    // margin-top: 15px;
  }
}

.mobile-dropdown {
  display: none;
  &--hidden {
    @include abs.breakpoint('tablet') {
      display: block;
    }
  }
  &__list {
    background-color: abs.$theme-dark-color;
    color: abs.$theme-light-color;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    border-radius: 16px;
  }

  .dark &__list {
    background-color: abs.$theme-light-color;
    color: abs.$theme-dark-color;
  }

  & a {
    color: inherit;
  }
}

.mobile-dropdown-enter-active {
  transition: all 0.3s ease-out;
}

.mobile-dropdown-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.mobile-dropdown-enter-from,
.mobile-dropdown-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.burger-enter-active {
  animation: burgerbounce-in 0.5s;
}
.burger-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.burger {
  display: none;

  &__icon {
    max-width: 30px;
    transform: rotate(180deg);
  }

  &--hidden {
    @include abs.breakpoint('tablet') {
      display: block;
    }
  }
}

.dropdown-enter-active {
  transition: all 0.3s ease-out;
}

.dropdown-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.dropdown-enter-from,
.dropdown-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
