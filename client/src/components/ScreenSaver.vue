<template>
  <div class="gsap-class">
    <div class="scrollDist" ref="scrollDist"></div>
    <div class="main" ref="main">
      <svg viewBox="0 0 1200 570" xmlns="http://www.w3.org/2000/svg">
        <mask id="m">
          <g class="cloud1" ref="cloud1">
            <rect fill="#fff" width="100%" height="700" y="799" />
            <image
              xlink:href="@/assets/images/screenSaver/cloud1Mask2.jpg"
              width="100%"
              height="800"
            />
            <image
              xlink:href="@/assets/images/screenSaver/bg-white.jpg"
              width="100%"
              height="800"
              y="300"
            />
            <image
              xlink:href="@/assets/images/screenSaver/cloud1Mask.jpg"
              width="100%"
              height="800"
              x="500"
              y="-150"
            />
            <image
              xlink:href="@/assets/images/screenSaver/cloud1Mask2.jpg"
              width="100%"
              height="800"
              x="-500"
              y="-150"
            />
          </g>
        </mask>

        <image
          class="sky"
          ref="sky"
          xlink:href="@/assets/images/screenSaver/bg-color.jpg"
          width="100%"
          height="590"
        />
        <image
          class="mountBg"
          ref="mountBg"
          xlink:href="@/assets/images/screenSaver/code6.png"
          width="500"
          height="800"
        />
        <image
          class="mountMg"
          ref="mountMg"
          xlink:href="@/assets/images/screenSaver/code5.png"
          width="500"
          height="800"
          y="100"
        />
        <image
          class="cloud2"
          ref="cloud2"
          xlink:href="@/assets/images/screenSaver/cloud2.webp"
          width="1200"
          height="800"
          y="150"
        />
        <image
          class="cloud4"
          ref="cloud4"
          xlink:href="@/assets/images/screenSaver/cloud4.png"
          width="400px"
          height="800"
          x="800"
          y="-80"
        />
        <image
          class="mountFg"
          ref="mountFg"
          xlink:href="@/assets/images/screenSaver/code3.png"
          width="500"
          height="800"
          y="100"
        />
        <image
          class="cloud1"
          ref="cloud1"
          xlink:href="@/assets/images/screenSaver/cloud1.png"
          width="1200"
          height="800"
        />
        <image
          class="cloud3"
          ref="cloud3"
          xlink:href="@/assets/images/screenSaver/cloud3.png"
          width="1200"
          height="800"
        />

        <image xlink:href="../assets/images/logo/Gasyr_logo.svg" x="430" y="95" width="70" />

        <text font-size="60" font-weight="bold" fill="#fff" x="500" y="150">GasyrLab</text>
        <!-- <polyline
          class="arrow"
          ref="arrow"
          fill="#fff"
          points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250"
        /> -->

        <svg viewBox="0 0 100 100" width="60" x="570" y="-20">
          <path
            class="arrow"
            ref="arrow"
            d="
              M 50,16
              l 0,72
              M 20,60
              l 30,28
              M 80,60
              l -30,28"
            stroke="#fff"
            stroke-linecap="round"
            stroke-width="10"
          />
        </svg>

        <g mask="url(#m)">
          <rect fill="#fff" width="100%" height="100%" />
          <text font-size="45" font-weight="bold" x="190" y="350" fill="#7b3ff2">
            "Главное - ваша идея и амбиции"
          </text>
          <text font-size="30" font-weight="bold" x="500" y="430" fill="#1d1d1d">- Якуб CEO</text>
        </g>

        <rect
          id="arrowBtn"
          ref="arrowBtn"
          width="100"
          height="100"
          opacity="0"
          x="550"
          y="220"
          style="cursor: pointer"
        />
      </svg>
    </div>
  </div>
  <div class="waves">
    <svg class="waves__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
      <path
        fill="#fff"
        fill-opacity="1"
        d="M0,64L48,53.3C96,43,192,21,288,32C384,43,480,85,576,90.7C672,96,768,64,864,64C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/minified/ScrollTrigger.min.js'
// import { ScrollToPlugin } from 'gsap/minified/ScrollToPlugin.min.js'

import { ScrollToPlugin } from 'gsap-trial/ScrollToPlugin.js'
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger.js'

import $ from 'zeptojs'

const main = ref(null)
const scrollDist = ref(null)
const arrow = ref(null)
const arrowBtn = ref(null)
const sky = ref(null)
const cloud1 = ref(null)
const cloud2 = ref(null)
const cloud3 = ref(null)
const cloud4 = ref(null)
const mountBg = ref(null)
const mountMg = ref(null)
const mountFg = ref(null)

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

onMounted(() => {
  // gsap.set('cloud1', { y: -150 })
  // gsap.set(scrollDist.value, { width: '100%', height: '200%' })
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.' + scrollDist.value.classList[0],
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1
      }
    })
    .fromTo('.' + sky.value.classList[0], { y: 0 }, { y: -200 }, 0)
    .fromTo('.' + cloud1.value.classList[0], { y: 100 }, { y: -800 }, 0)
    .fromTo('.' + cloud2.value.classList[0], { y: -150 }, { y: -500 }, 0)
    .fromTo('.' + cloud3.value.classList[0], { y: -50 }, { y: -650 }, 0)
    .fromTo('.' + cloud4.value.classList[0], { y: -50 }, { y: -650 }, 0)
    .fromTo('.' + mountBg.value.classList[0], { y: -10 }, { y: -100 }, 0)
    .fromTo('.' + mountMg.value.classList[0], { y: -30 }, { y: -250 }, 0)
    .fromTo('.' + mountFg.value.classList[0], { y: -50 }, { y: -600 }, 0)

  $(arrowBtn.value).on('mouseenter', () => {
    gsap.to(arrow.value, {
      y: 10,
      duration: 0.8,
      ease: 'back.inOut(3)',
      overwrite: 'auto'
    })
  })
  $(arrowBtn.value).on('mouseleave', () => {
    gsap.to(arrow.value, { y: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' })
  })
  $(arrowBtn.value).on('click', () => {
    gsap.to(window, { scrollTo: innerHeight, duration: 1.5, ease: 'power1.inOut' })
  }) // scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.gsap-class {
  will-change: scroll-position;
  @include abs.breakpoint('tablet') {
    display: none;
  }
}

.waves {
  position: relative;
  height: clamp(1.25rem, -2.083rem + 6.94vw, 3.125rem);
  transform: translateY(-10px);

  @include abs.breakpoint('tablet') {
    display: none;
  }

  &__svg {
    position: absolute;
    top: 5px;
  }
}

.main {
  position: relative;
  background: #7d7d7d;
  width: 100%;
  /* max-width: 1200px; */
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.scrollDist {
  width: 100%;
  height: 180%;
  position: absolute;
  z-index: -3;
}

.sky {
  /* начальные стили для .sky */
  transform: translateY(0);
}

.cloud1 {
  /* начальные стили для .cloud1 */
  transform: translateY(100px);
}

.cloud2 {
  /* начальные стили для .cloud2 */
  transform: translateY(-150px);
}

.cloud3 {
  /* начальные стили для .cloud3 */
  transform: translateY(50px);
}

.mountBg {
  transform: translateX(900px);
}

.mountMg {
  /* начальные стили для .mountMg */
  transform: translateX(430px);
}

.mountFg {
  /* начальные стили для .mountFg */

  transform: translateY(-100px);
}
</style>
