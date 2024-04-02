<template>
  <Header></Header>
  <div class="container">
    <div class="breadcrumbs">
      <div class="breadcrumbs__wrapper">
        <router-link :to="{ name: 'home' }">Главная</router-link> /
        <span>Title courses</span>
      </div>
    </div>
  </div>
  <section class="intro-course">
    <div class="container">
      <div class="intro-course__wrapper">
        <div class="intro-course__text">
          <h2 class="intro-course__title">Курс: "Веб-разработка для начинающих"</h2>
          <p class="intro-course__decs">
            Начни писать первые веб-приложения используя JavaScript, считающимся языком №1 на
            мировом рынке
          </p>
        </div>
        <div class="intro-course__img">
          <img
            width="350px"
            src="https://decode.kz/new_decode/images/course/5c3dcee82595ec24a2396007.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  <div class="course-info">
    <div class="container">
      <div class="course-info__wrapper">
        <section>
          <h2>На этом курсе вы научитесь:</h2>

          <vue-collapsible-panel-group accordion>
            <vue-collapsible-panel :expanded="false">
              <template #title> Panel A Title </template>
              <template #content> Panel A Content </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel>
              <template #title> Panel B Title </template>
              <template #content> Panel B Content </template>
            </vue-collapsible-panel>
          </vue-collapsible-panel-group>
        </section>
        <aside></aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/HeaderMain.vue'
import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel'
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.intro-course {
  background-color: #8f8c8c;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: abs.$almost-white;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: clamp(0.938rem, 0.597rem + 1.7vw, 1.875rem);
  }

  &__title {
    font-size: 36px;
    font-weight: 700;
    line-height: 1.3;
  }

  &__decs {
    font-size: 14px;
  }
}
</style>
