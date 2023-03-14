export const scrollWidthOffset = (el: HTMLElement, offset: number) => {
  window.scrollTo({ 
    top: el.getBoundingClientRect().top + window.pageYOffset + offset, 
    behavior: 'smooth' 
  }); 
}