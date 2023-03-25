
export const scrollWidthOffset = (el: HTMLElement) => {
  const fonstSize = Number(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("font-size")
      .replace('px', '')
  )

  const offset = el.id === "home-slide"
    ? - 2 * 4 * fonstSize
    : - 4 * fonstSize

  window.scrollTo({ 
    top: el.getBoundingClientRect().top + window.pageYOffset + offset, 
    behavior: 'smooth' 
  }); 
}