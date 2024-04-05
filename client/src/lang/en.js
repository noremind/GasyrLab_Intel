export default {
	theme: {
		light: "Light",
		dark: "Dark"
	},
	page: {
		main: {
			header: {
				my_training: "My training",
				all_courses: "All courses",
				contacts: "Contacts",
				about: "About 'Gasyr Lab'",
				dropdown: {
					log_out: "Log out"
				},
				login: 'Sign In',
				register: 'Sign Up'
			},
			main: {
				scrollHorizontal: {
					title: "Sponsors"
				},
				greetingSection: {
					title: 'Online IT school, offering affordable and high-quality education.',
					subtitle: 'Companies are hunting for our graduates'
				}
			},
			footer: {}
		},
		auth: {
			greetingSignIn: 'Welcome Back!',
			greetingSignUp: 'Hello, Friend!',
			textSignIn: "Enter your Personal details to use all of site features",
			textSignUp: "Register with your Personal details to use all of site features",
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
				},
			},
		},
		courses: {
			header: {},
			main: {
				course: [{}]
			},
			footer: {}
		},
		// ... another page texts
	},
	global: {
		btn: {
			default: 'Learn More',
			goOver: 'Proceed',
			back: 'Back'
		}
	}
}