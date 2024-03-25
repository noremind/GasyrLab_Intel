import { defineStore } from "pinia";
import { ref } from 'vue'

export const useAuthUserStore = defineStore('auth', () => {
	const toggleAuth = ref('login')

	const loginEmail = ref('')
	const loginPassword = ref('')

	const registerName = ref('')
	const registerEmail = ref('')
	const registerPassword = ref('')


	function transitionRemoveMove(linkRef) {
		linkRef.value.classList.add('active')
	}

	function transitionAddMove(linkRef) {
		linkRef.value.classList.remove('active')
	}



	return {
		loginEmail,
		loginPassword,
		registerName,
		registerEmail,
		registerPassword,
		transitionRemoveMove,
		transitionAddMove,
		toggleAuth
	}
})