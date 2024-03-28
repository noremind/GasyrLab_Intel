<template>
  <div class="XYcenter">
    <div class="container-auth" ref="containerDiv">
      <Login v-if="currentAuthPage === 'login'"></Login>
      <Register v-if="currentAuthPage === 'register'"></Register>

      <div class="toggle-container">
        <div class="toggle">
          <div v-if="currentAuthPage === 'register'" class="toggle-panel toggle-left">
            <div class="toggle__lang-in">
              <LangBtn></LangBtn>
            </div>
            <h1 class="toggle__title">{{ t('page.auth.greetingSignIn') }}</h1>
            <p class="toggle__text">{{ t('page.auth.textSignIn') }}</p>
            <Button class="btn hidden" @click="transitionRemoveMove()">{{
              t('page.auth.login.signIn')
            }}</Button>
          </div>

          <div v-else class="toggle-panel toggle-right">
            <div class="toggle__lang-up">
              <LangBtn></LangBtn>
            </div>
            <h1 class="toggle__title">{{ t('page.auth.greetingSignUp') }}</h1>
            <p class="toggle__text">{{ t('page.auth.textSignUp') }}</p>
            <Button class="btn hidden" @click="transitionAddMove()">{{
              t('page.auth.register.signUp')
            }}</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { RouterView } from 'vue-router'
import LangBtn from '@/components/littleComponent/ToggleBtnLang.vue'
import { ref, onMounted, computed } from 'vue'
import Login from '@/components/LoginComponent.vue'
import Register from '@/components/RegisterComponent.vue'
import Button from '@/components/littleComponent/ButtonComponent.vue'
import { useAuthUserStore } from '@/stores/authUser.js'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const containerDiv = ref(null)
const route = useRoute()
const router = useRouter()
// const authUser = useAuthUserStore()

// Sign In
function transitionAddMove() {
  containerDiv.value.classList.add('active')
  router.push({ name: 'register' })
}

//Sign Up
function transitionRemoveMove() {
  if (route.name !== 'register') {
    return transitionAddMove()
  }
  containerDiv.value.classList.remove('active')
  router.push({ name: 'login' })
}

const currentAuthPage = computed(() => {
  return route.name === 'login' ? 'login' : 'register'
})

window.addEventListener('popstate', function () {
  window.location.href = '/' // Перенаправление на главную страницу
  // router.push({ name: 'home' })
})

onMounted(() => {
  if (route.name === 'register') {
    transitionAddMove()
  }
})
</script>

<style lang="scss" scoped>
.toggle {
  &__lang-in {
    position: absolute;
    top: 25px;
    left: 25px;
    z-index: 10;
  }

  &__lang-up {
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 10;
  }
}
</style>
