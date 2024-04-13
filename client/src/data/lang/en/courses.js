export default [
	{
		id: 1,
		title: 'Python Developer',
		cardDescription: `Our course consists of 30 lessons/ 5 parts. There are 4 projects in your portfolio before the end of the course. Duration: ${this.duration} weeks. `,
		titleDescription: '',
		duration: 28,
		fullProjects: 3,
		aboutProfession: {
			title: 'About Profession',
			description: 'Python is a great language for beginners. Python code is easy to write and read, the language consistently ranks high in popularity ratings, and "Pythonists" are in demand in almost all areas of IT-Programming, Data Analysis, System Management and testing. YouTube, Intel, Pixar, NASA, VK, Yandex are just a few of the well - known companies that use Python in their products.',
			salary: '400 000 тенге',
			avarageSalary: 'the average salary of a specialist',
			durationDescription: 'intensive classes and practice on the course are enough to find your first job'
		},
		requiredEmployee: {
			title: 'The course is designed according to the requirements of employers',
			description: 'We conduct market research, interview large companies about the requirements for novice specialists, check vacancies and expert opinions. Based on this, we add only the most necessary things to the course.'
		},
		contentsCourse: {
			title: "Содержание курсов",
			description: `You will find ${this.fullProjects} blocks on Python programming with different levels of difficulty and additional courses.`,
			list: [
				{
					id: 1,
					title: 'Python Basics. Part 1',
					accordionList: [
						{
							title: 'Introduction'
						},
						{
							title: 'Python Basics'
						},
						{
							title: 'Operators and Expressions'
						}
					]
				},
				{
					id: 2,
					title: 'Python Basics. Part 2: Chatbot for Telegram',
					accordionList: [
						{
							title: 'IDE Setup and Configuration'
						},
						{
							title: 'Basic Concepts. Arrays'
						},
						{
							title: 'List: Working with Arrays'
						}
					]
				},
				{
					id: 3,
					title: 'Python Framework Django',
					accordionList: [
						{
							title: 'Introduction to Web Frameworks'
						},
						{
							title: 'Introduction to Django'
						},
						{
							title: 'Introduction to Web and Linux'
						},
						{
							title: 'Database and Models'
						}
					]
				},
				{
					id: 4,
					title: 'Team Project: Creating a Marketplace',
					accordionList: [
						{
							title:
								'Together with a team lead and a team of 3-5 people, you will develop the server part for a full-fledged marketplace. You will work according to the Scrum or Kanban system, regularly discuss the current progress with the team lead and receive new tasks. All processes are maximally close to real conditions - this is how commercial software is created in employer companies. As a result, you will create your own analog of "Yandex Market".'
						}
					]
				},
				{
					id: 5,
					title: 'Python Advanced: Social Network',
					accordionList: [
						{
							title: 'Flask: Getting Started'
						},
						{
							title: 'Linux Basics. Part 1'
						}
					]
				}
			]
		},
		helpCenter: {
			title: 'Помощь с трудоустройством',
			benefits: [
				{
					id: 1,
					bgColor: '#FFE96E',
					title: 'Resume',
					description: 'We present you to an employer with a profitable side'
				},
				{
					id: 2,
					bgColor: '#DCF4FE',
					title: 'Individual career plan',
					description: 'Let`s tell you how to start and develop a career'
				},
				{
					id: 3,
					bgColor: '#AFE9B4',
					title: 'Partner vacancies',
					description: 'We will recommend your candidacy'
				},
				{
					id: 4,
					bgColor: '#FEBCB4',
					title: 'Making a portfolio',
					description: 'We will help you to present your projects effectively'
				},
			]
		},
		rate: {
			title: 'Choose your tariff',
			paket: [
				{
					title: 'Stadart',
					description: 'Intensive study in a group of students',
					list: [
						{
							title: '3 проекта в портфолио'
						},
						{
							title: 'Карьерный трек'
						},
						{
							title: 'Гарантия трудоустройства'
						},
						{
							title: 'Бессрочный доступ к учебным материалам'
						},
						{
							title: 'Комплексная подготовка'
						},
						{
							title: 'Профориентация'
						},
					]
				},
				{
					title: 'Stadart',
					description: 'Intensive study in a group of students',
					list: [
						{
							title: '3 проекта в портфолио'
						},
						{
							title: 'Карьерный трек'
						},
						{
							title: 'Гарантия трудоустройства'
						},
						{
							title: 'Бессрочный доступ к учебным материалам'
						},
						{
							title: 'Комплексная подготовка'
						},
						{
							title: 'Профориентация'
						},
						{
							title: 'Персональное расписание'
						},
						{
							title: 'Индивидуальная траектория обучения'
						},
						{
							title: '80 часов персональных консультаций с наставником'
						},
					]
				},
			]
		},
		modalWindow: {
			title: 'Tarif',
			subtitle: 'Leave a request and our manager will contact you',
			description: 'You can pay for the program and start studying',

			input: {
				name: 'Your name',
				email: 'Email',
				tel: 'Phone number'
			}
		}
	},
	{},
	{},
]
