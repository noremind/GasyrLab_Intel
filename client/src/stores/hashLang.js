import CryptoJS from 'crypto-js'
import { defineStore } from 'pinia'
export const usehashLangStores = defineStore('hashLang', () => {
	function goToCourse(router, title, card) {
		const secretKey = 'gasyrLab' // Секретный ключ для шифрования
		console.log(card);
		const encryptedCard = CryptoJS.AES.encrypt(JSON.stringify(card), secretKey).toString()

		localStorage.setItem('idCurrentCourse', card.id)
		router.push({
			name: 'course',
			params: { titleCourse: title },
			query: { card: encryptedCard }
		})
	}

	console.log("Bla bla")

	return { goToCourse }
})
