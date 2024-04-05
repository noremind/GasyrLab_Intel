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
          courses: {
            pythonDesc:
              'These are the architects of the digital world, masterfully bringing complex algorithms to life. These experts work their magic by turning theory into functional reality.',
            javaDesc:
              'These are like architects and builders for some of the applications that run on the server, i.e. on a computer that serves applications or sites',
            cppDesc:
              'In this C++ course, you will learn how to create robust, efficient components for server-side applications, delivering the functionality and performance they need.'
          }
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
            cpp: 'Course "C++"'
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
      default: 'Learn More',
      subscribe: 'Subscribe',
      move: 'Move to',
      back: 'Back'
    }
  }
}
