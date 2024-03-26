import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/HomePage.vue')
		},
		{
			path: '/detail-page',
			name: 'details',
			component: () => import('@/views/DetailsPage.vue')
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

	]
})

export default router
