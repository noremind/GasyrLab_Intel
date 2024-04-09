export function goHashTag(router, ref, link) {
	console.log(ref)

	if (link === 'contacts') {
		return ref.href = '#' + link
	} else {
		router.push('/')
		ref.href = '#' + link
	}
}

