import pythonSvg from '@/assets/images/courses/preview/python.svg'
import javaSvg from '@/assets/images/courses/preview/java.svg'
import dataAnalyticsSvg from '@/assets/images/courses/preview/dataAnalytics.svg'

export default {
  theme: {
    light: 'Светлый',
    dark: 'Темный'
  },
  page: {
    main: {
      intro: {
        title: '"Главное - ваша идея и амбиции"',
        name: 'Якуб'
      },
      header: {
        my_training: 'Моё обучение',
        all_courses: 'Все курсы',
        contacts: 'Контакты',
        team: 'Команда',
        about: "О 'Gasyr Lab'",
        dropdown: {
          log_out: 'Выйти'
        },
        login: 'Войти',
        register: 'Регистрация'
      },
      main: {
        scrollHorizontal: {
          title: 'Спонсоры'
        },
        greetingSection: {
          title:
            'Онлайн IT школа, основанная на принципах доступности и инклюзивности, обучающая веку цифровых технологий.',
          subtitle: 'За нашими выпускниками охотятся компании'
        },
        ourCourses: {
          title: 'Направления и Курсы',
          courses: [
            {
              preview: {
                title: 'Python',
                description:
                  'Наш курс состоит из 30 уроков/ 5 частей. До окончание курса 4 проекта в ваше портфолио. Длительность: 28 недель. ',
                link: '#!',
                image: pythonSvg
              },
              detail: {
                id: 1,
                title: 'Python',
                fullMounth: 6,
                description:
                  'Python просто выучить, даже если вы никогда не программировали. Во время обучения вам будет помогать эксперт-куратор. Вы разработаете 3 проекта для портфолио, а Центр карьеры поможет найти работу Python-разработчиком.',
                headerCircle: ['Онлайн', 'Старт: 6 мая'],
                aboutProfession: {
                  description:
                    'Python — идеальный язык для новичка. Код на Python легко писать и читать, язык стабильно занимает высокие места в рейтингах популярности, а «питонисты» востребованы почти во всех сферах IT — программировании, анализе данных, системном администрировании и тестировании. YouTube, Intel, Pixar, NASA, VK, Яндекс — вот лишь немногие из известных компаний, которые используют Python в своих продуктах.',
                  salary: '400 000'
                },
                conversationCourse: {
                  allProjects: 3,
                  accordionData: [
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
                          title: 'База данных и модели'
                        }
                      ]
                    },
                    {
                      id: 4,
                      title: 'Командный проект: создание маркетплейса',
                      accordionList: [
                        {
                          title:
                            'Вместе с тимлидом и командой из 3–5 человек вы разработаете серверную часть для полноценного маркетплейса. Вы будете работать по системе Scrum или Kanban, регулярно обсуждать с тимлидом текущий прогресс и получать новые задачи. Все процессы максимально приближены к реальным условиям — именно так создают коммерческий софт в компаниях-работодателях. В результате вы создадите собственный аналог «Яндекс Маркета».'
                        }
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
                        }
                      ]
                    }
                  ]
                },
                tarifs: {
                  standart: {
                    listData: [
                      '3  проекта в портфолио',
                      'Карьерный трек',
                      'Гарантия трудоустройства',
                      'Бессрочный доступ к учебным материалам',
                      'Комплексная подготовка',
                      'Профориентация'
                    ]
                  },
                  ultimate: {
                    listData: [
                      '3  проекта в портфолио',
                      'Карьерный трек',
                      'Гарантия трудоустройства',
                      'Бессрочный доступ к учебным материалам',
                      'Комплексная подготовка',
                      'Профориентация',
                      'Персональное расписание',
                      'Индивидуальная траектория обучения',
                      '80 часов персональных консультаций с наставником'
                    ]
                  }
                }
              }
            },
            {
              preview: {
                title: 'Java',
                description:
                  'Наш курс состоит из 30 уроков/ 5 частей. До окончание курса 4 проекта в ваше портфолио. Длительность: 28 недель. ',
                link: '#!',
                image: javaSvg
              },
              detail: {
                id: 2,
                title: 'Java',
                fullMounth: 6,
                description:
                  'Python просто выучить, даже если вы никогда не программировали. Во время обучения вам будет помогать эксперт-куратор. Вы разработаете 3 проекта для портфолио, а Центр карьеры поможет найти работу Python-разработчиком.',
                headerCircle: ['Онлайн', 'Старт: 6 мая'],
                aboutProfession: {
                  description:
                    'Python — идеальный язык для новичка. Код на Python легко писать и читать, язык стабильно занимает высокие места в рейтингах популярности, а «питонисты» востребованы почти во всех сферах IT — программировании, анализе данных, системном администрировании и тестировании. YouTube, Intel, Pixar, NASA, VK, Яндекс — вот лишь немногие из известных компаний, которые используют Python в своих продуктах.',
                  salary: '400 000'
                },
                conversationCourse: {
                  allProjects: 3,
                  accordionData: [
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
                          title: 'База данных и модели'
                        }
                      ]
                    },
                    {
                      id: 4,
                      title: 'Командный проект: создание маркетплейса',
                      accordionList: [
                        {
                          title:
                            'Вместе с тимлидом и командой из 3–5 человек вы разработаете серверную часть для полноценного маркетплейса. Вы будете работать по системе Scrum или Kanban, регулярно обсуждать с тимлидом текущий прогресс и получать новые задачи. Все процессы максимально приближены к реальным условиям — именно так создают коммерческий софт в компаниях-работодателях. В результате вы создадите собственный аналог «Яндекс Маркета».'
                        }
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
                        }
                      ]
                    }
                  ]
                },
                tarifs: {
                  standart: {
                    listData: [
                      '3  проекта в портфолио',
                      'Карьерный трек',
                      'Гарантия трудоустройства',
                      'Бессрочный доступ к учебным материалам',
                      'Комплексная подготовка',
                      'Профориентация'
                    ]
                  },
                  ultimate: {
                    listData: [
                      '3  проекта в портфолио',
                      'Карьерный трек',
                      'Гарантия трудоустройства',
                      'Бессрочный доступ к учебным материалам',
                      'Комплексная подготовка',
                      'Профориентация',
                      'Персональное расписание',
                      'Индивидуальная траектория обучения',
                      '80 часов персональных консультаций с наставником'
                    ]
                  }
                }
              }
            },
            {
              preview: {
                title: 'Data Analytics',
                description:
                  'Наш курс состоит из 30 уроков/ 5 частей. До окончание курса 4 проекта в ваше портфолио. Длительность: 28 недель. ',
                link: '#!',
                image: dataAnalyticsSvg
              },
              detail: {
                id: 3,
                title: 'Data Analytics',
                fullMounth: 6,
                description:
                  'Python просто выучить, даже если вы никогда не программировали. Во время обучения вам будет помогать эксперт-куратор. Вы разработаете 3 проекта для портфолио, а Центр карьеры поможет найти работу Python-разработчиком.',
                headerCircle: ['Онлайн', 'Старт: 6 мая'],
                aboutProfession: {
                  description:
                    'Python — идеальный язык для новичка. Код на Python легко писать и читать, язык стабильно занимает высокие места в рейтингах популярности, а «питонисты» востребованы почти во всех сферах IT — программировании, анализе данных, системном администрировании и тестировании. YouTube, Intel, Pixar, NASA, VK, Яндекс — вот лишь немногие из известных компаний, которые используют Python в своих продуктах.',
                  salary: '400 000'
                },
                conversationCourse: {
                  allProjects: 3,
                  accordionData: [
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
                          title: 'База данных и модели'
                        }
                      ]
                    },
                    {
                      id: 4,
                      title: 'Командный проект: создание маркетплейса',
                      accordionList: [
                        {
                          title:
                            'Вместе с тимлидом и командой из 3–5 человек вы разработаете серверную часть для полноценного маркетплейса. Вы будете работать по системе Scrum или Kanban, регулярно обсуждать с тимлидом текущий прогресс и получать новые задачи. Все процессы максимально приближены к реальным условиям — именно так создают коммерческий софт в компаниях-работодателях. В результате вы создадите собственный аналог «Яндекс Маркета».'
                        }
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
                        }
                      ]
                    }
                  ]
                },
                tarifs: {
                  standart: {
                    listData: [
                      '3  проекта в портфолио',
                      'Карьерный трек',
                      'Гарантия трудоустройства',
                      'Бессрочный доступ к учебным материалам',
                      'Комплексная подготовка',
                      'Профориентация'
                    ]
                  },
                  ultimate: {
                    listData: [
                      '3  проекта в портфолио',
                      'Карьерный трек',
                      'Гарантия трудоустройства',
                      'Бессрочный доступ к учебным материалам',
                      'Комплексная подготовка',
                      'Профориентация',
                      'Персональное расписание',
                      'Индивидуальная траектория обучения',
                      '80 часов персональных консультаций с наставником'
                    ]
                  }
                }
              }
            }
          ]
        },
        subscription: {
          title: 'Поможем с выбором',
          desc: 'Если у вас есть вопросы о формате или вы не знаете, что выбрать, оставьте свой номер — мы позвоним и ответим на все вопросы',
          inputName: 'Имя',
          inputSurname: 'Фамилия',
          rules:
            'Отправляя форму, вы принимаете «Соглашение об обработке персональных данных» и условия «Оферты», а также соглашаетесь с «Условиями использования»'
        }
      },
      footer: {
        newsletter: {
          title: 'Подпишитесь на нашу рассылку чтобы быть в курсе обо всем!',
          desc: 'Будьте в курсе всех событий в нашей области и не упустите ни одной важной детали. Присоединяйтесь к нашей рассылке прямо сейчас и оставайтесь в центре происходящего!'
        },
        list: {
          aboutUs: {
            title: 'О нас',
            school: 'Школа',
            java: 'Курс по "Java"',
            python: 'Курс по "Python"',
            dataAnalytics: 'Курс по "Data Analytics"'
          },
          help: {
            title: 'Помощь',
            ref: 'Справка',
            community: 'Сообщество',
            support: 'Тех. Поддержка',
            faq: 'Вопросы и Ответы'
          },
          contacts: {
            title: 'Контакты',
            info: 'Информация',
            address: 'Жандосова, 36'
          }
        }
      }
    },
    auth: {
      greetingSignIn: 'Добро пожаловать обратно!',
      greetingSignUp: 'Привет, друг!',
      textSignIn: 'Введите свои личные данные, чтобы воспользоваться всеми функциями сайта',
      textSignUp:
        'Зарегистрируйтесь с помощью своих личных данных, чтобы воспользоваться всеми функциями сайта',

      login: {
        title: 'Войти',
        inputEmail: 'Эл. Почта',
        inputPassword: 'Пароль',
        signIn: 'Войти',
        errors: {
          requiredField: 'Обязательное поле',
          existingPasswordAndEmail: 'Введите правильный адрес электронной почты и пароль'
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
      }
    }
    // ... another page texts
  },
  global: {
    btn: {
      default: 'Подробнее',
      subscribe: 'Подписаться',
      move: 'Перейти',
      back: 'Назад'
    }
  }
}
