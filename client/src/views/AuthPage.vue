<template>
  <div class="XYcenter">
    <div class="container-auth" ref="containerDiv">
      <Login v-if="currentAuthPage === 'login'"></Login>
      <Register v-if="currentAuthPage === 'register'"></Register>

      <div class="toggle-container">
        <div class="toggle">
          <div v-if="currentAuthPage === 'register'" class="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your Personal details to use all of site features</p>
            <Button class="hidden" @click="transitionRemoveMove()">Sign In</Button>
          </div>
          <div v-else class="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your Personal details to use all of site features</p>
            <Button class="btn hidden" @click="transitionAddMove()">Sign Up</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { RouterView } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import Login from '@/components/LoginComponent.vue'
import Register from '@/components/RegisterComponent.vue'
import Button from '@/components/littleComponent/ButtonComponent.vue'
import { useAuthUserStore } from '@/stores/authUser.js'
import { useRoute, useRouter } from 'vue-router'

const containerDiv = ref(null)
const route = useRoute()
const router = useRouter()
const authUser = useAuthUserStore()

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

onMounted(() => {
  if (route.name === 'register') {
    transitionAddMove()
  }
})
</script>

<style lang="scss" scoped></style>
