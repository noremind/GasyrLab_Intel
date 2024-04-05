export default {
	theme: {
		light: 'Светлый',
		dark: 'Темный'
	},
	page: {
		main: {
			header: {
				my_training: 'Моё обучение',
				all_courses: 'Все курсы',
				contacts: 'Контакты',
				about: "О 'Gasyr Lab'",
				dropdown: {
					log_out: 'Выйти'
				},
				login: 'Войти',
				register: 'Регистрация'
			},
			main: {
				scrollHorizontal: {
					title: "Спонсоры"
				},
				greetingSection: {
					title: 'Онлайн-школа по IT, предлагая доступное и качественное образование.',
					subtitle: 'За нашими выпускниками охотятся компании'
				}
			},
			footer: {}
		},
		auth: {
			greetingSignIn: 'Добро пожаловать обратно!',
			greetingSignUp: 'Привет, друг!',
			textSignIn: 'Введите свои личные данные, чтобы воспользоваться всеми функциями сайта',
			textSignUp: 'Зарегистрируйтесь с помощью своих личных данных, чтобы воспользоваться всеми функциями сайта',

			login: {
				title: 'Войти',
				inputEmail: 'Эмейл',
				inputPassword: 'Пароль',
				signIn: 'Войти',
				errors: {
					requiredField: 'Обязательное поле',
					existingPasswordAndEmail: 'Введите правильный адрес электронной почты и пароль',
				}

			},
			register: {
				title: 'Создать аккаунт',
				inputName: 'Имя',
				inputEmail: 'Электронная почта',
				inputPassword: 'Пароль',
				signUp: 'Зарегистрироваться',
				errors: {
					requiredField: 'Обязательное поле',
					minFieldLength: 'Минимум 6 символов',
					correctEmail: 'Введите корректный адрес электронной почты'
				}
			},
		},
		courses: {
			header: {},
			main: {
				course: [{}]
			},
			footer: {}
		}
		// ... another page texts
	},
	global: {
		btn: {
			default: 'Подробнее',
			goOver: 'Перейти',
			back: 'Назад'
		}
	}
}
