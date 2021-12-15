export const scrollIntoView: svelte.JSX.EventHandler = ({currentTarget}) => {
  const scrollToElement = document.querySelector(
    currentTarget.getAttribute('href')
  )

  if (!scrollToElement) return

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

  scrollToElement.scrollIntoView({
    behavior: mediaQuery.matches ? 'auto' : 'smooth',
  })
}
