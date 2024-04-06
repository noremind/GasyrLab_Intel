<template>
  <div v-if="cardData">
    <Header></Header>

    <div class="container">
      <!-- <div class="breadcrumbs">
      <div class="breadcrumbs__wrapper">
        <router-link :to="{ name: 'home' }">Главная</router-link> /
        <span>Title courses</span>
      </div>
    </div> -->
    </div>
    <section class="intro-course">
      <div class="container">
        <div class="intro-course__header">
          <div class="flex-box intro-course__box">
            <p class="intro-course__header-text">Онлайн</p>
            <p class="intro-course__header-text">Старт: 6 мая</p>
          </div>
          <div class="flex-box intro-course__wrapper">
            <div class="intro-course__text-side">
              <h1 class="intro-course__title">
                Стань
                <span class="intro-course__decor">Junior {{ cardData.title }} разработчиком</span>с
                0 за 6 месяцев
              </h1>
              <p class="intro-course__desc">
                Python просто выучить, даже если вы никогда не программировали. Во время обучения
                вам будет помогать эксперт-куратор. Вы разработаете 3 проекта для портфолио, а Центр
                карьеры поможет найти работу Python-разработчиком.
              </p>
              <Button class="btn btn--outline intro-course__btn">Записаться на курс</Button>
            </div>
            <img
              class="intro-course__img"
              src="@/assets/images/courses/python/python.png"
              alt="Python course"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="about-prof">
      <div class="container">
        <div class="about-prof__wrapper">
          <h1 class="title about-prof__title">О профессии</h1>

          <p class="about-prof__desc">
            Python — идеальный язык для новичка. Код на Python легко писать и читать, язык стабильно
            занимает высокие места в рейтингах популярности, а «питонисты» востребованы почти во
            всех сферах IT — программировании, анализе данных, системном администрировании и
            тестировании. YouTube, Intel, Pixar, NASA, VK, Яндекс — вот лишь немногие из известных
            компаний, которые используют Python в своих продуктах.
          </p>

          <div class="flex-box about-prof__box">
            <div class="about-prof__footer">
              <h2 class="about-prof__footer-title">6 месяцев</h2>
              <p class="description about-prof__footer-desc">
                интенсивных занятий и практики на курсе достаточно, чтобы найти первую работу
              </p>
            </div>
            <div class="about-prof__footer">
              <h2 class="about-prof__footer-title">400 000 тенге</h2>
              <p class="description about-prof__footer-desc">средняя зарплата специалиста</p>
            </div>
          </div>
        </div>
        <section class="required">
          <div class="container">
            <div class="required__wrapper">
              <h2 class="required__title">Курс разработан согласно требованиям работодателей</h2>

              <p class="description required__desc">
                Мы проводим исследования рынка, опрашиваем крупные компании насчет требований для
                начинающих специалистов, сверяемся с вакансиями и мнением экспертов. Исходя из
                этого, добавляем на курс только самое нужное.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section class="content-list">
      <div class="container">
        <div class="content-list__wrapper">
          <div class="content-list__box">
            <h2 class="content-list__title">Содержание курсов</h2>
            <div class="content-list__box-inner">
              <p>
                Вас ждёт 3 блока по программированию на Python с разным уровнем сложности и
                дополнительные курсы.
              </p>
              <div class="flex-box">
                <p><span class="content-list__decor">6</span> месяцев обучения</p>
                <p><span class="content-list__decor">3</span> итоговых проекта</p>
              </div>
            </div>
          </div>
          <div class="course-info">
            <div class="course-info__wrapper">
              <Accordion
                v-for="accordion in accordions.accordionData"
                :key="accordion.id"
                :accordion="accordion"
              ></Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="help-center">
      <div class="container">
        <div class="help-center__wrapper">
          <h1 class="title">Помощь с трудоустройством</h1>
          <SwiperCard></SwiperCard>
        </div>
      </div>
    </section>

    <SubscriptionForm></SubscriptionForm>

    <section class="choose-tarif">
      <div class="container">
        <h2 class="title">Выберите свой тариф</h2>
        <div class="choose-tarif__wrapper">
          <div class="choose-tarif__box">
            <h3 class="choose-tarif__title">Standard</h3>
            <p class="choose-tarif__desc">Интенсивное обучение в группе студентов</p>
            <!-- <div class="flex-box">
              <div>
                <p class="choose-tarif__mounth">В рассрочку на 24 месяца</p>
                <h3 class="choose-tarif__price">6 300</h3>
              </div>
              <div>
                <p class="choose-tarif__mounth">В рассрочку на 24 месяца</p>
                <h3 class="choose-tarif__price">6 300</h3>
              </div>
            </div> -->
            <ul class="choose-tarif__list">
              <li class="choose-tarif__item">4 проекта в портфолио</li>
              <li class="choose-tarif__item">Карьерный трек</li>
              <li class="choose-tarif__item">Гарантия трудоустройства</li>
              <li class="choose-tarif__item">Бессрочный доступ к учебным материалам</li>
              <li class="choose-tarif__item">Комплексная подготовка</li>
              <li class="choose-tarif__item">Профориентация</li>
            </ul>
            <Button class="btn btn--outline">Оставить заявку</Button>
          </div>
          <div class="choose-tarif__box">
            <h3 class="choose-tarif__title">Ultimate</h3>
            <p class="choose-tarif__desc">Индивидуальное обучение с персональным наставником</p>
            <!-- <div class="flex-box">
              <div>
                <p class="choose-tarif__mounth">В рассрочку на 24 месяца</p>
                <h3 class="choose-tarif__price">6 300</h3>
              </div>
              <div>
                <p class="choose-tarif__mounth">В рассрочку на 24 месяца</p>
                <h3 class="choose-tarif__price">6 300</h3>
              </div>
            </div> -->

            <ul class="choose-tarif__list">
              <li class="choose-tarif__item">4 проекта в портфолио</li>
              <li class="choose-tarif__item">Карьерный трек</li>
              <li class="choose-tarif__item">Гарантия трудоустройства</li>
              <li class="choose-tarif__item">Бессрочный доступ к учебным материалам</li>
              <li class="choose-tarif__item">Комплексная подготовка</li>
              <li class="choose-tarif__item">Профориентация</li>
              <li class="choose-tarif__item">Персональное расписание</li>
              <li class="choose-tarif__item">Индивидуальная траектория обучения</li>
              <li class="choose-tarif__item">80 часов персональных консультаций с наставником</li>
            </ul>
            <Button class="btn btn--outline">Оставить заявку</Button>
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </div>

  <div v-else>Ошибка!</div>
</template>

<script setup>
import Header from '@/components/HeaderMain.vue'
import Button from '@/components/littleComponent/ButtonComponent.vue'
import Accordion from '@/components/AccordionComponent.vue'
import SwiperCard from '@/components/CardSwiper.vue'
import SubscriptionForm from '@/components/SubscriptionForm.vue'
import Footer from '@/components/FooterMain.vue'

import { ref, onMounted } from 'vue'
import { useAccordionStore } from '@/stores/accordionData.js'
import { useRoute } from 'vue-router'
import CryptoJS from 'crypto-js'
const route = useRoute()

const accordions = useAccordionStore()

const cardData = ref(null)
onMounted(() => {
  // const title = route.params.title
  const encryptedCard = route.query.card
  const secretKey = 'gasyrLab' // Секретный ключ для расшифровки

  if (encryptedCard) {
    const decryptedCard = CryptoJS.AES.decrypt(encryptedCard, secretKey).toString(CryptoJS.enc.Utf8)
    cardData.value = JSON.parse(decryptedCard)
    // console.log(cardData.value.title)
  } else {
    console.log('Карточка не найдена')
  }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.intro-course {
  margin-top: 30px;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: abs.$almost-white;

    @include abs.breakpoint('tablet') {
      display: flex;
      flex-direction: column;
    }
  }

  &__btn {
    justify-self: end;
    @include abs.breakpoint('tablet') {
      align-self: center;
      padding: 16px 50px;
    }
  }

  &__box {
    justify-content: start;
    margin-bottom: 50px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: clamp(0.938rem, 0.597rem + 1.7vw, 1.875rem);
  }

  &__text-side {
    display: flex;
    flex-direction: column;
    gap: 25px;

    @include abs.breakpoint('tablet') {
      order: 1;
    }
  }

  &__title {
    font-size: clamp(1rem, 0.636rem + 1.82vw, 2rem);
    font-weight: 700;
    line-height: 1.3;
  }

  &__decor {
    display: block;
    color: rgb(255, 205, 58);
    font-size: clamp(1.563rem, 1.131rem + 2.16vw, 2.75rem);
  }

  &__desc {
    letter-spacing: 1px;
    font-size: clamp(0.75rem, 0.659rem + 0.45vw, 1rem);
    max-width: 550px;
  }

  &__img {
    width: 100%;
    max-width: 250px;

    @include abs.breakpoint('tablet') {
      order: -1;
    }
  }

  &__btn {
    max-width: 250px;

    @include abs.breakpoint('tablet') {
      max-width: 300px;
    }
  }

  &__header {
    background: radial-gradient(circle, rgba(156, 152, 226, 1) 9%, rgba(123, 63, 242, 1) 97%);
    border-radius: 20px;
    padding: clamp(1.375rem, 0.875rem + 2.5vw, 2.75rem) clamp(1.375rem, 0.875rem + 2.5vw, 2.75rem)
      clamp(1.75rem, 1.114rem + 3.18vw, 3.5rem);

    width: 100%;

    &-text {
      border-radius: 16px;
      padding: 8px 12px;
      font-size: clamp(0.75rem, 0.659rem + 0.45vw, 1rem);

      color: abs.$almost-white;
      background-color: abs.$almost-black;

      .dark & {
        color: abs.$almost-black;
        background-color: abs.$almost-white;
      }
    }
  }
}

.about-prof {
  &__wrapper {
    width: 83%;
    margin: clamp(1.875rem, -0.398rem + 11.36vw, 8.125rem) 0;

    @include abs.breakpoint('tablet') {
      width: 100%;
    }
  }

  &__box {
    column-gap: 60px;

    @include abs.breakpoint('mobile-lg') {
      display: block;
    }
  }

  &__desc {
    margin-top: 20px;
    font-size: clamp(0.875rem, 0.784rem + 0.45vw, 1.125rem);
  }

  &__footer {
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    &-title {
      font-size: 22px;
      font-weight: 600;
    }
  }
}

.required {
  border-bottom: 1.3px solid abs.$almost-black;
  border-top: 1.3px solid abs.$almost-black;

  .dark & {
    border-bottom: 1.3px solid abs.$almost-white;
    border-top: 1.3px solid abs.$almost-white;
  }

  &__wrapper {
    padding: clamp(1.563rem, 0.994rem + 2.84vw, 3.125rem) 0;

    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: center;

    @include abs.breakpoint('tablet') {
      flex-direction: column;
    }
  }

  &__title {
    font-size: clamp(1.125rem, 0.807rem + 1.59vw, 2rem);
    font-weight: 600;
  }

  &__desc {
    max-width: 500px;
    line-height: 1.42;
  }
}

.content-list {
  &__wrapper {
    margin-top: 40px;
    border: 1.3px solid abs.$accent-color;
    padding: 40px;
    border-radius: 20px;
    background-color: abs.$accent-color;
    // color: abs.$almost-black;
    color: abs.$almost-white;
  }

  &__box {
    display: flex;
    justify-content: space-between;
    gap: 30px;

    @include abs.breakpoint('tablet') {
      display: flex;
      flex-direction: column;
    }

    &-inner {
      max-width: 500px;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }

  &__decor {
    padding: 6px 16px;
    line-height: 1.8;
    border-radius: 8px;
    background-color: abs.$almost-white;
    color: abs.$almost-black;

    .dark & {
      background-color: abs.$almost-black;
      color: abs.$almost-white;
    }
  }

  &__title {
    font-size: clamp(1.75rem, 1.205rem + 2.73vw, 3.25rem);
    font-weight: 500;
  }
}

.help-center {
  &__wrapper {
    margin-top: 50px;
  }
}

.choose-tarif {
  &__wrapper {
    display: flex;
    gap: 15px;
    justify-content: center;
    // align-items: center;
    margin-bottom: 50px;

    @include abs.breakpoint('tablet-xs') {
      display: flex;
      flex-direction: column;
    }
  }

  &__box {
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 15px;
    border: 3px solid abs.$accent-color;
    color: abs.$almost-black;
    background-color: abs.$almost-white;
    border-radius: 20px;
    padding: 16px;
    margin-top: 30px;
  }

  &__title {
    font-size: 26px;
    font-weight: 500;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style-type: disc;
  }

  &__item {
    margin-left: 30px;
    list-style-type: disc;
  }
}
</style>
