import { defineStore } from "pinia";


export const useAccordionStore = defineStore('accordion', () => {
	const accordionData = [
		{
			id: 1,
			title: 'Основы Python. Часть 1',
			accordionList: [
				{
					title: 'Введение'
				},
				{
					title: 'Основы работы с Python'
				},
				{
					title: 'Операторы, выражения'
				}
			]
		},
		{
			id: 2,
			title: 'Основы Python. Часть 2: чат-бот для Telegram',
			accordionList: [
				{
					title: 'Установка и настройка IDE'
				},
				{
					title: 'Базовые коллекции. Списки'
				},
				{
					title: 'List: методы работы со списками'
				}
			]
		},
		{
			id: 3,
			title: 'Python-фреймворк Django',
			accordionList: [
				{
					title: 'Введение в веб-фреймворки'
				},
				{
					title: 'Введение в Django'
				},
				{
					title: 'Введение в веб и Linux'
				},
				{
					title: "База данных и модели"
				}
			]
		},
		{
			id: 4,
			title: 'Командный проект: создание маркетплейса',
			accordionList: [
				{
					title: 'Вместе с тимлидом и командой из 3–5 человек вы разработаете серверную часть для полноценного маркетплейса. Вы будете работать по системе Scrum или Kanban, регулярно обсуждать с тимлидом текущий прогресс и получать новые задачи. Все процессы максимально приближены к реальным условиям — именно так создают коммерческий софт в компаниях-работодателях. В результате вы создадите собственный аналог «Яндекс Маркета».'
				},

			]
		},
		{
			id: 5,
			title: 'Python Advanced: социальная сеть',
			accordionList: [
				{
					title: 'Flask: начало'
				},
				{
					title: 'Основы работы в Linux. Часть 1'
				},
			]
		},
	]

	return { accordionData }
})