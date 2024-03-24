<template>
  <section class="scroll-horizontal">
    <div class="container">
      <div class="scroll-horizontal__wrapper">
        <h1 class="title scroll-horizontal__title">
          {{ t('page.main.main.scrollHorizontal.title') }}
        </h1>
        <div class="demo-wrapper">
          <section class="section-gsap" ref="gsapSection">
            <!-- <div class="wrapper-gsap text" ref="gsapWrapper">Школа програмирование Gasyr Lab</div> -->
            <ul class="wrapper-gsap" ref="gsapWrapper">
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

const gsapWrapper = ref(null)
const gsapSection = ref(null)

onMounted(() => {
  const showDemo = () => {
    gsap.utils.toArray(gsapSection.value).forEach((section, index) => {
      const w = section.querySelector('.' + gsapWrapper.value.classList[0])
      const [x, xEnd] =
        index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0]
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.8
          }
        }
      )
    })
  }

  ScrollTrigger.create({
    start: 'top top',
    end: 'bottom bottom',
    onToggle: (self) => {
      if (self.isActive) {
        showDemo()
      }
    }
  })

  ScrollTrigger.addEventListener('scroll', showDemo)
  showDemo()
})
</script>

<style lang="scss" scoped>
.scroll-horizontal {
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
