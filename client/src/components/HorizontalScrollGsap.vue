<template>
  <section class="scroll-horizontal">
    <div class="scroll-horizontal__wrapper">
      <div class="demo-wrapper">
        <section class="section-gsap section-gsap--bg" ref="gsapSectionText">
          <div class="wrapper-gsap__title" ref="gsapWrapperText">
            <span class="wrapper-gsap__text" v-for="n in 6" :key="n"
              >{{ t('page.main.main.scrollHorizontal.title') }}
              <img
                class="wrapper-gsap__star"
                src="../assets/images/icons/sparkle.png"
                alt="sparkle"
                width="60"
              />
            </span>
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
                  src="@/assets/images/sponsors/kolesa.png"
                  alt="Kolesa"
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
                  src="@/assets/images/sponsors/meta.png"
                  alt="Google logo"
              /></a>
            </li>

            <li>
              <a href="#">
                <img
                  class="wrapper-gsap__logo"
                  src="@/assets/images/sponsors/kaspi.png"
                  alt="kaspi"
              /></a>
            </li>

            <li>
              <a href="#">
                <img
                  class="wrapper-gsap__logo"
                  src="@/assets/images/sponsors/microsoft.png"
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
// import { ScrollTrigger } from 'gsap/minified/ScrollTrigger.min.js'
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger.js'

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
        index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0]
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 15
          }
        }
      )
    })
  }

  const scrollImg = () => {
    gsap.utils.toArray(gsapSectionImg.value).forEach((section, index) => {
      const w = section.querySelector('.' + gsapWrapperImg.value.classList[0])
      const [x, xEnd] =
        index % 2 ? [(w.scrollWidth - section.offsetWidth) * -1, '100%'] : [w.scrollWidth * -1, 500]
      gsap.fromTo(
        w,
        { x: xEnd },
        {
          x: x,
          scrollTrigger: {
            trigger: section,
            scrub: 15
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
  // margin-top: 800px;
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

  &--bg {
    background-color: #7b3ff2;
  }
}

.wrapper-gsap {
  display: flex;

  &__star {
    filter: invert(1);
    max-width: clamp(1rem, 0.114rem + 4.43vw, 3.438rem);
    margin-top: 5px;
  }

  &__text {
    text-transform: uppercase;
    font-size: clamp(1rem, 0.114rem + 4.43vw, 3.438rem);
    padding-inline: 15px;
    margin-left: -11px;
  }

  &__title {
    // font-size: 55px;
    color: #fff;
    font-weight: 900;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__logo {
    width: 100%;
    min-width: clamp(5.625rem, 4.261rem + 6.82vw, 9.375rem);
  }
}
</style>
