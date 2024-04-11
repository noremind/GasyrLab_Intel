import pythonSvg from '@/assets/images/courses/preview/python.svg'
import javaSvg from '@/assets/images/courses/preview/java.svg'
import dataAnalyticsSvg from '@/assets/images/courses/preview/dataAnalytics.svg'

export default {
  theme: {
    light: 'Light',
    dark: 'Dark'
  },
  page: {
    main: {
      intro: {
        title: '"Main thing - ambitions and idea"',
        name: 'Jakub'
      },
      header: {
        my_training: 'My training',
        all_courses: 'All courses',
        contacts: 'Contacts',
        team: 'Team',
        about: "About 'Gasyr Lab'",
        dropdown: {
          log_out: 'Log out'
        },
        login: 'Sign In',
        register: 'Sign Up'
      },
      main: {
        scrollHorizontal: {
          title: 'Sponsors'
        },
        greetingSection: {
          title:
            'An online IT school founded on the principles of accessibility and inclusivity, providing education for the digital age.',
          subtitle: 'Companies are hunting for our graduates'
        },
        ourCourses: {
          title: 'Directions and courses',
          courses: [
            {
              preview: {
                title: 'Python',
                description:
                  'Our курс 30 сабақтан / 5 бөлімнен тұрады. Курстың соңына дейін портфолиоңызда 4 жоба. Мерзімі: 28 апта.',
                link: '#!',
                image: pythonSvg
              },
              detail: {
                id: 1,
                title: 'Python',
                fullMounth: 6,
                description:
                  'Python learn оңай, тіпті сіз ешқашан бағдарламаламасаңыз да. Тренинг кезінде сізге тәжірибелі тәлімгер көмектеседі. Сіз 3 портфолио жобасын әзірлейсіз, ал Мансап орталығы сізге Python әзірлеушісі ретінде жұмыс табуға көмектеседі.',
                headerCircle: ['Онлайн', 'Басталуы: 6 мамыр'],
                aboutProfession: {
                  description:
                    'Python — бастаушы үшін тамаша тіл. Python кодын жазу және оқу оңай, тіл танымалдылық рейтингінде үнемі жоғары орын алады, ал «Питонистер» АТ-ның барлық дерлік салаларында сұранысқа ие - бағдарламалау, деректерді талдау, жүйені басқару және тестілеу. YouTube, Intel, Pixar, NASA, VK, Yandex - өз өнімдерінде Python қолданатын белгілі компаниялардың бірнешеуі ғана.',
                  salary: '400 000'
                },
                conversationCourse: {
                  allProjects: 3,
                  accordionData: [
                    {
                      id: 1,
                      title: 'Python Негіздері. 1-Бөлім',
                      accordionList: [
                        {
                          title: 'Кірісіпе'
                        },
                        {
                          title: 'Python-мен жұмыс негіздері'
                        },
                        {
                          title: 'Операторлар, өрнектер'
                        }
                      ]
                    },
                    {
                      id: 2,
                      title: 'Python негіздері. 2-бөлім: Telegram үшін чат-бот',
                      accordionList: [
                        {
                          title: 'IDE орнату және конфигурациялау'
                        },
                        {
                          title: 'Негізгі жинақтар. Тізімдер'
                        },
                        {
                          title: 'List: тізімдермен жұмыс істеу әдістері'
                        }
                      ]
                    },
                    {
                      id: 3,
                      title: 'Python-фреймворк Django',
                      accordionList: [
                        {
                          title: 'Веб-фреймворки кіріспесі'
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
          title: 'Help you with the choice',
          desc: 'If you have questions about the format or do not know what to choose, leave your number — we will call and answer all your questions',
          inputName: 'Name',
          inputSurname: 'Surname',
          rules:
            'By submitting the form, you accept the "Personal Data Processing Agreement" and the terms of the "Offer", as well as agree to the "Terms of Use"'
        }
      },
      footer: {
        newsletter: {
          title: 'Subscribe to our newsletter to keep up to date with everything!',
          desc: 'Keep up to date with all the events in our area and do not miss any important details. Join our newsletter right now and stay in the center of what is happening!'
        },
        list: {
          aboutUs: {
            title: 'About Us',
            school: 'School',
            java: 'Course "Java"',
            python: 'Course "Python"',
            dataAnalytics: 'Course "Data Analytics"'
          },
          help: {
            title: 'Help',
            ref: 'Reference',
            community: 'Community',
            support: 'Tech. Support',
            faq: 'Q&A'
          },
          contacts: {
            title: 'Contacts',
            info: 'Information',
            address: 'Jandosov, 36'
          }
        }
      }
    },
    auth: {
      greetingSignIn: 'Welcome Back!',
      greetingSignUp: 'Hello, Friend!',
      textSignIn: 'Enter your Personal details to use all of site features',
      textSignUp: 'Register with your Personal details to use all of site features',
      login: {
        title: 'Sign In',
        inputEmail: 'Email',
        inputPassword: 'Password',
        signIn: 'Sign In',
        errors: {
          requiredField: 'Required field',
          existingPasswordAndEmail: 'Enter the correct email and password'
        }
      },
      register: {
        title: 'Create Account',
        inputName: 'Name',
        inputEmail: 'Email',
        inputPassword: 'Password',
        signUp: 'Sign Up',
        errors: {
          requiredField: 'Required field',
          minFieldLength: 'Minimum of 6 letters',
          correctEmail: 'Enter the correct email'
        }
      }
    }

    // ... another page texts
  },
  global: {
    btn: {
      default: 'Learn More',
      subscribe: 'Subscribe',
      move: 'Move to',
      back: 'Back'
    }
  }
}
