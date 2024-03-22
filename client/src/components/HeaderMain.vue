<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__inner">
          <router-link :to="{ name: 'home' }"
            ><img class="logo" src="@/assets/images/logo/Gasyr_logo.svg" alt="Gasyr Lab"
          /></router-link>

          <nav class="nav">
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
                <a href="#" class="nav__link">{{ t('page.main.header.about') }}</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="header__user">
          <button @click="toggleOpen" class="header__user-btn">
            <img class="header__user-img" src="@/assets/images/icons/user.png" alt="User icon" />
          </button>

          <LangBtn></LangBtn>
          <TransitionGroup tag="div" name="dropdown">
            <div v-if="isOpenUserDropdown" class="header__user-dropdown">
              <div class="flex-box">
                <p>Имя пользователя</p>
                <button @click="closeDropdown">{{ t('page.main.header.dropdown.log_out') }}</button>
              </div>
              <ThemeBtn></ThemeBtn>
            </div>
          </TransitionGroup>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import LangBtn from '@/components/littleComponent/ToggleBtnLang.vue'
import ThemeBtn from '@/components/littleComponent/ToggleBtnTheme.vue'

const { t } = useI18n()

const isOpenUserDropdown = ref(false)

function toggleOpen() {
  isOpenUserDropdown.value = !isOpenUserDropdown.value
}

function closeDropdown() {
  isOpenUserDropdown.value = false
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

  &__inner {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    gap: 10px;
  }

  &__user-btn {
    display: block;
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
    right: -50px;

    display: flex;
    flex-direction: column;
    gap: 10px;
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
