<template>
  <div class="greeting">
    <div class="container">
      <div class="greeting__wrapper">
        <div class="greeting__text">
          <h1>{{ t('page.main.main.greetingSection.title') }}</h1>
          <p>{{ t('page.main.main.greetingSection.subtitle') }}</p>
          <a @click="goHashTag(router, $event.currentTarget, 'courses')">
            <Button class="btn btn--primary"></Button>
          </a>
        </div>

        <div class="greeting__img">
          <img src="../assets/images/banners/workshop.svg" alt="workshop" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/littleComponent/ButtonComponent.vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { goHashTag } from '@/stores/routerGo.js'

const router = useRouter()

const { t } = useI18n()
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.greeting {
  &__wrapper {
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    @include abs.breakpoint('tablet') {
      flex-direction: column;
      gap: 100px;
    }
  }

  &__text {
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 20px;

    h1 {
      font-size: clamp(1.25rem, 0.795rem + 2.27vw, 2.5rem);
      font-weight: 900;
    }

    p {
      color: abs.$gray;
      font-size: clamp(0.938rem, 0.824rem + 0.57vw, 1.25rem);
      margin-bottom: 20px;

      .dark & {
        color: #9a9a9a;
      }
    }
  }

  &__img {
    img {
      width: 1000px;
    }
  }
}
</style>
