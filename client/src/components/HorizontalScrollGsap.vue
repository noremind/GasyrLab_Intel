<template>
  <section class="scroll-horizontal">
    <div class="scroll-horizontal__wrapper">
      <div class="demo-wrapper">
        <section class="section-gsap" ref="gsapSectionText">
          <div class="wrapper-gsap__title" ref="gsapWrapperText">
            <span class="wrapper-gsap__text" v-for="n in 6" :key="n">{{
              t('page.main.main.scrollHorizontal.title')
            }}</span>
          </div>
        </section>
        <section class="section-gsap" ref="gsapSectionImg">
          <ul class="wrapper-gsap__img" ref="gsapWrapperImg">
            <li>
              <a href="#">
                <img
                  class="wrapper-gsap__logo"
                  src="@/assets/images/sponsors/intel-logo.png"
                  alt="Google logo"
              /></a>
            </li>
            <li>
              <a href="#">
                <img
                  class="wrapper-gsap__logo"
                  src="@/assets/images/sponsors/Cisco-logo.avif"
                  alt="Google logo"
              /></a>
            </li>
            <li>
              <a href="#">
                <img
                  class="wrapper-gsap__logo"
                  src="@/assets/images/sponsors/Google-logo.avif"
                  alt="Google logo"
              /></a>
            </li>
            <li>
              <a href="#">
                <img
                  class="wrapper-gsap__logo"
                  src="@/assets/images/sponsors/Yandex-logo.png"
                  alt="Google logo"
              /></a>
            </li>
            <li>
              <a href="#">
                <img
                  class="wrapper-gsap__logo"
                  src="@/assets/images/sponsors/Fedex-logo.avif"
                  alt="Google logo"
              /></a>
            </li>
            <li>
              <a href="#">
                <img
                  class="wrapper-gsap__logo"
                  src="@/assets/images/sponsors/IBM-logo.avif"
                  alt="Google logo"
              /></a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/minified/ScrollTrigger.min.js'

const { t } = useI18n()

gsap.registerPlugin(ScrollTrigger)

const gsapWrapperText = ref(null)
const gsapWrapperImg = ref(null)
const gsapSectionText = ref(null)
const gsapSectionImg = ref(null)

onMounted(() => {
  const scrollText = () => {
    gsap.utils.toArray(gsapSectionText.value).forEach((section, index) => {
      const w = section.querySelector('.' + gsapWrapperText.value.classList[0])
      const [x, xEnd] =
        index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 550]
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 1
          }
        }
      )
    })
  }

  const scrollImg = () => {
    gsap.utils.toArray(gsapSectionImg.value).forEach((section, index) => {
      const w = section.querySelector('.' + gsapWrapperImg.value.classList[0])
      const [x, xEnd] =
        index % 2
          ? [(w.scrollWidth - section.offsetWidth) * -1, '100%']
          : [w.scrollWidth * -1, -580]
      gsap.fromTo(
        w,
        { x: x * -1 },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 1
          }
        }
      )
    })
  }

  // const scrollImg = () => {
  //   gsap.utils.toArray(gsapSectionImg.value).forEach((section, index) => {
  //     const w = section.querySelector('.' + gsapWrapperImg.value.classList[0])
  //     const [x, xEnd] =
  //       index % 2 ? [(w.scrollWidth - section.offsetWidth) * -1, '100%'] : [0, w.scrollWidth * -1]
  //     gsap.fromTo(
  //       w,
  //       { x: xEnd * -1 },
  //       {
  //         x: x,
  //         delay: 0.5,
  //         scrollTrigger: {
  //           trigger: section,
  //           scrub: 0.25
  //         }
  //       }
  //     )
  //   })
  // }

  ScrollTrigger.create({
    start: 'top top',
    end: 'bottom bottom',
    onToggle: (self) => {
      if (self.isActive) {
        scrollImg()
        scrollText()
      }
    }
  })

  ScrollTrigger.addEventListener('scroll', scrollText)
  ScrollTrigger.addEventListener('scroll', scrollImg)
  scrollImg()
  scrollText()
})
</script>

<style lang="scss" scoped>
.scroll-horizontal {
  margin-top: 800px;
  height: 1500px;
  &__wrapper {
    margin-top: clamp(1.875rem, -0.17rem + 10.23vw, 7.5rem);
  }
}

ul {
  display: flex;
  align-items: center;
  gap: 80px;
  list-style: none;
}

.section-gsap {
  overflow-x: hidden;
}

.wrapper-gsap {
  display: flex;

  &__text {
    text-transform: uppercase;
    font-size: clamp(1rem, 0.114rem + 4.43vw, 3.438rem);
    padding-inline: 15px;
  }

  &__title {
    // font-size: 55px;
    font-weight: 900;
    white-space: nowrap;
  }

  &__logo {
    width: 100%;
    min-width: clamp(5.625rem, 4.261rem + 6.82vw, 9.375rem);
  }
}

.section-gsap .text {
  width: 100%;
  font-size: clamp(2rem, 5vw, 5rem);
  font-weight: 900;
  white-space: nowrap;
}
</style>
