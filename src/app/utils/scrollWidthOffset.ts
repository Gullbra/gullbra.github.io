
export const scrollWidthOffset = (el: HTMLElement, isLargeMobileOrLarger: boolean, isTabletOrLarger: boolean) => {
  const fonstSize = (() => {
    if (isLargeMobileOrLarger)
      return 14

    if (isTabletOrLarger) 
      return 16

    return 12
  }) ()

  const offset = el.id === "home-slide"
    ? - 2 * 4 * fonstSize
    : isTabletOrLarger 
      ? 0
      : - 4 * fonstSize

  window.scrollTo({ 
    top: el.getBoundingClientRect().top + window.pageYOffset + offset, 
    behavior: 'smooth' 
  }); 
}