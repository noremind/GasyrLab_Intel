import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
<<<<<<< HEAD
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/HomePage.vue')
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('@/views/AboutPage.vue')
		},
		{
			path: '/auth',
			name: 'auth',
			redirect: '/auth/signIn',
			component: () => import('@/views/AuthPage.vue'),
			children: [
				{
					path: 'signIn',
					name: 'login',
					component: () => import('@/views/AuthPage.vue')
				},
				{
					path: 'signUp',
					name: 'register',
					component: () => import('@/views/AuthPage.vue')
				}
			]
		},
		{
			path: '/course/:courseId',
			name: 'course',
			props: true,
			component: () => import('@/views/CoursesDetails.vue')
		},
		{
			path: '/video',
			name: 'video',
			props: true,
			component: () => import('@/views/VideoPage.vue')
		}
	]
=======
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutPage.vue')
    },
    {
      path: '/training',
      name: 'training',
      component: () => import('@/views/MyTraining.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      redirect: '/auth/signIn',
      component: () => import('@/views/AuthPage.vue'),
      children: [
        {
          path: 'signIn',
          name: 'login',
          component: () => import('@/views/AuthPage.vue')
        },
        {
          path: 'signUp',
          name: 'register',
          component: () => import('@/views/AuthPage.vue')
        }
      ]
    },
    {
      path: '/course/:courseId',
      name: 'course',
      props: true,
      component: () => import('@/views/CoursesDetails.vue')
    }
  ]
>>>>>>> f3394eebf5a607f95de8931bee2ca8b28437e720
})


router.beforeEach((to, from, next) => {
	window.scrollTo(0, 0)
	next()
})

export default router
