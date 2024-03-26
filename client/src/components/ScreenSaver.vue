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
              xlink:href="@/assets/images/screenSaver/cloud1Mask.jpg"
              width="100%"
              height="800"
              x="500"
              y="-50"
            />
            <image
              xlink:href="@/assets/images/screenSaver/cloud1Mask2.jpg"
              width="100%"
              height="800"
              x="-500"
              y="-50"
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
    <svg class="waves__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#fff"
        fill-opacity="1"
        d="M0,96L18.5,90.7C36.9,85,74,75,111,101.3C147.7,128,185,192,222,186.7C258.5,181,295,107,332,80C369.2,53,406,75,443,101.3C480,128,517,160,554,165.3C590.8,171,628,149,665,122.7C701.5,96,738,64,775,53.3C812.3,43,849,53,886,53.3C923.1,53,960,43,997,58.7C1033.8,75,1071,117,1108,154.7C1144.6,192,1182,224,1218,202.7C1255.4,181,1292,107,1329,85.3C1366.2,64,1403,96,1422,112L1440,128L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"
      ></path>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/minified/ScrollTrigger.min.js'
import { ScrollToPlugin } from 'gsap/minified/ScrollToPlugin.min.js'

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
  gsap.set('cloud1', { y: -150 })
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
    gsap.to(arrow.value, { y: 10, duration: 0.8, ease: 'back.inOut(3)', overwrite: 'auto' })
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
  @include abs.breakpoint('tablet') {
    display: none;
  }
}

.waves {
  position: relative;
  height: clamp(1.25rem, -2.5rem + 18.75vw, 11.563rem);
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
