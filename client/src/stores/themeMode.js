import { defineStore } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'


export const useThemeModeStore = defineStore('theme', () => {
	const isDark = useDark()
	const isToggle = useToggle(isDark)

	return {
		isToggle,
		isDark
	}
})
