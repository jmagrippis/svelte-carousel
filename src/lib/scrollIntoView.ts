export const scrollIntoView: svelte.JSX.EventHandler = ({currentTarget}) => {
  const scrollToElement = document.querySelector(
    currentTarget.getAttribute('href')
  )
  if (!scrollToElement) return
  scrollToElement.scrollIntoView({
    behavior: 'smooth',
  })
}
