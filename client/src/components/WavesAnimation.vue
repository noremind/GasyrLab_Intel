<template>
  <div class="waves">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0
              58-18 88-18s
              58 18 88 18
              58-18 88-18
              58 18 88 18
              v44h-352z"
        />
      </defs>
      <g class="waves">
        <use
          class="waves-bg"
          xlink:href="#gentle-wave"
          x="50"
          y="0"
          fill="#cab2f9"
          fill-opacity=".2"
        />
        <use
          class="waves-bg"
          xlink:href="#gentle-wave"
          x="50"
          y="2"
          fill="#cab2f9"
          fill-opacity=".4"
        />
        <use
          class="waves-bg"
          xlink:href="#gentle-wave"
          x="50"
          y="4"
          fill="#cab2f9"
          fill-opacity=".6"
        />
        <use
          class="waves-bg"
          xlink:href="#gentle-wave"
          x="50"
          y="6"
          fill="#cab2f9"
          fill-opacity=".8"
        />
        <use
          class="waves-bg"
          xlink:href="#gentle-wave"
          x="50"
          y="8"
          fill="#f2f2f2"
          fill-opacity="1"
        />
      </g>
    </svg>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts/' as abs;

.waves {
  margin-top: 200px;
  .waves-bg {
    .dark &:nth-child(1) {
      fill: #a375ff;
    }
    .dark &:nth-child(2) {
      fill: #a375ff;
    }
    .dark &:nth-child(3) {
      fill: #a375ff;
    }
    .dark &:nth-child(4) {
      fill: #a375ff;
    }
    .dark &:nth-child(5) {
      fill: abs.$almost-black;
    }
  }

  .waves > use {
    animation: move-forever 2s -2s linear infinite;
  }

  .waves > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 6s;
  }
  .waves > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 5s;
  }
  .waves > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 4s;
  }
  .waves > use:nth-child(5) {
    animation-delay: -6s;
    animation-duration: 3s;
  }

  @keyframes move-forever {
    0% {
      transform: translate(-90px, 0%);
    }
    100% {
      transform: translate(85px, 0%);
    }
  }

  svg {
    width: 100%;
    height: 30vw;
    max-height: 200px;
    margin-bottom: -10px;
  }
}
</style>
