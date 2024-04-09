<template>
  <div class="courses" id="courses">
    <div class="container">
      <div class="courses__wrapper">
        <h2 class="title">{{ t('page.main.main.ourCourses.title') }}</h2>
        <div class="courses__cards">
          <Card v-for="(card, index) in CardData" :key="index" :card="card">
            <template #image>
              <div class="courses__svg" v-html="card.image"></div>
            </template>
            <template #button>
              <button>
                {{ t('global.btn.move') }}
                <div class="arrow-wrapper">
                  <div class="arrow"></div>
                </div>
              </button>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from '@/components/CourseCard.vue'
import CardData from '@/CardData.js'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.courses {
  &__wrapper {
    margin-top: 50px;
    .title {
      margin-bottom: 40px;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @include abs.breakpoint('laptop-sm') {
      grid-template-columns: repeat(2, 1fr);
    }
    @include abs.breakpoint('tablet-sm') {
      grid-template-columns: repeat(1, 1fr);
    }

    .courses__svg {
      transform: translateX(30px);
      margin-bottom: -4px;
    }
  }
}

button {
  --primary-color: #fff;
  --secondary-color: #7b3ff2;
  --arrow-width: 10px;
  --arrow-stroke: 2px;
  box-sizing: border-box;
  font-size: 15px;
  border: 0;
  border-radius: 20px;
  color: var(--secondary-color);
  display: flex;
  transition: 0.2s background;
  align-items: center;
  gap: 0.6em;
  font-weight: 500;
}

button .arrow-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

button .arrow {
  margin-top: 1px;
  width: var(--arrow-width);
  background: transparent;
  height: var(--arrow-stroke);
  position: relative;
  transition: 0.2s;
}

button .arrow::before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  border: solid var(--secondary-color);
  border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
  display: inline-block;
  top: -3px;
  right: 3px;
  transition: 0.2s;
  padding: 3px;
  transform: rotate(-45deg);
}

button:hover {
  background-color: var(--hover-color);
}

button:hover .arrow {
  background: var(--secondary-color);
}

button:hover .arrow:before {
  right: 0;
}
</style>
