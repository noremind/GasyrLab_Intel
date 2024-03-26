<template>
  <div class="loader">
    <div class="loader__spinner"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader__spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid abs.$accent-color;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
