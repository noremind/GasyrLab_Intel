<template>
  <!-- This is a recreation of Unfold's (https://dribbble.com/unfold) parallax scene: https://cdn.dribbble.com/users/14268/screenshots/3275340/northface.gif -->
  <div class="scrollDist" ref="scrollDist"></div>
  <div class="main" ref="main">
    <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
      <mask id="m">
        <g class="cloud1" ref="cloud1">
          <rect fill="#fff" width="100%" height="801" y="799" />
          <image
            xlink:href="https://assets.codepen.io/721952/cloud1Mask.jpg"
            width="1200"
            height="800"
          />
        </g>
      </mask>

      <image
        class="sky"
        ref="sky"
        xlink:href="https://assets.codepen.io/721952/sky.jpg"
        width="1200"
        height="590"
      />
      <image
        class="mountBg"
        ref="mountBg"
        xlink:href="https://assets.codepen.io/721952/mountBg.png"
        width="1200"
        height="800"
      />
      <image
        class="mountMg"
        ref="mountMg"
        xlink:href="https://assets.codepen.io/721952/mountMg.png"
        width="1200"
        height="800"
      />
      <image
        class="cloud2"
        ref="cloud2"
        xlink:href="https://assets.codepen.io/721952/cloud2.png"
        width="1200"
        height="800"
      />
      <image
        class="mountFg"
        ref="mountFg"
        xlink:href="https://assets.codepen.io/721952/mountFg.png"
        width="1200"
        height="800"
      />
      <image
        class="cloud1"
        ref="cloud1"
        xlink:href="https://assets.codepen.io/721952/cloud1.png"
        width="1200"
        height="800"
      />
      <image
        class="cloud3"
        ref="cloud3"
        xlink:href="https://assets.codepen.io/721952/cloud3.png"
        width="1200"
        height="800"
      />
      <text fill="#fff" x="350" y="200">EXPLORE</text>
      <polyline
        class="arrow"
        ref="arrow"
        fill="#fff"
        points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250"
      />

      <g mask="url(#m)">
        <rect fill="#fff" width="100%" height="100%" />
        <text x="350" y="200" fill="#162a43">FURTHER</text>
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
const mountBg = ref(null)
const mountMg = ref(null)
const mountFg = ref(null)

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

onMounted(() => {
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');

.main {
  position: fixed;
  background: #fff;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.scrollDist {
  width: 100%;
  height: 200%;
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
  transform: translateY(-50px);
}

.mountBg {
  /* начальные стили для .mountBg */
  transform: translateY(-10px);
}

.mountMg {
  /* начальные стили для .mountMg */
  transform: translateY(-30px);
}

.mountFg {
  /* начальные стили для .mountFg */
  transform: translateY(-50px);
}

body,
html {
  width: 100%;
  height: 100%;
  background: #ddd;
  font-family: 'Montserrat', sans-serif;
  font-size: 99px;
  text-align: center;
}

div {
  position: absolute;
}
</style>
