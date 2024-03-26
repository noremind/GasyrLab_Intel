<template>
  <TransitionGroup ref="dropdownLaptop" @click.stop tag="div" name="dropdown">
    <div v-if="isOpenUserDropdown" class="header__user-dropdown header__user-dropdown--hidden">
      <div class="flex-box">
        <p>Имя пользователя</p>
        <button class="btn btn--error" @click="closeDropdown()">
          {{ t('page.main.header.dropdown.log_out') }}
        </button>
      </div>
      <ThemeBtn></ThemeBtn>
    </div>
  </TransitionGroup>
</template>

<script setup></script>

<style lang="scss" scoped></style>
