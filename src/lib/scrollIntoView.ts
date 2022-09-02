export const scrollIntoView: svelte.JSX.EventHandler = ({currentTarget}) => {
  const link = currentTarget.getAttribute('href')
  if (!link) return

  const scrollToElement = document.querySelector(link)

  if (!scrollToElement) return

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

  scrollToElement.scrollIntoView({
    block: 'center',
    inline: 'center',
    behavior: mediaQuery.matches ? 'auto' : 'smooth',
  })
}
