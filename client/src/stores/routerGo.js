export function goHashTag(router, ref, link) {
  console.log(ref)

  // if (link === 'contacts') {
  //   return (ref.href = '#' + link)
  // } else {
  // router.push('/')
  // ref.href = '#' + link
  // }
  const currentURL = window.location.href
  console.log(currentURL)

  if (currentURL !== '/') {
    router.push('/')
    ref.href = '#' + link
  } else {
    console.log('asdadf')
    return (ref.href = '#' + link)
  }
}
