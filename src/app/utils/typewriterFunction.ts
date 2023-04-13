export const setupTypewriter = (outerElement: HTMLElement, inputTypeSpeed: number, callback: Function) => {
  const HTML = outerElement.textContent || "";
  const typeSpeed =  inputTypeSpeed || 100
  
  outerElement.innerHTML = "";
  let 
    cursorPosition = 0,
    innerElement: HTMLElement,
    innerElTagAndAttributes = "",
    inspectingInnerTag = false,
    innerTagOpen = false,
    tempTypeSpeed = 0;

  const type = () => {
    if (inspectingInnerTag)
      innerElTagAndAttributes += HTML[cursorPosition];

    if (HTML[cursorPosition] === "<") {
      tempTypeSpeed = 0;

      if (innerTagOpen) {
        innerTagOpen = false;
        inspectingInnerTag = true;
      } else {
        innerElTagAndAttributes = "";
        innerTagOpen = true;
        inspectingInnerTag = true;
        innerElTagAndAttributes += HTML[cursorPosition];
      }
    }

    if (!inspectingInnerTag && innerTagOpen) 
      innerElement.innerHTML += HTML[cursorPosition];

    if (!inspectingInnerTag && !innerTagOpen) {
      tempTypeSpeed = HTML[cursorPosition] === " "
        ? tempTypeSpeed = 0
        : tempTypeSpeed = (Math.random() * typeSpeed) + typeSpeed/2;

      outerElement.innerHTML += HTML[cursorPosition];
    }

    if (inspectingInnerTag === true && HTML[cursorPosition] === ">") {
      tempTypeSpeed = (Math.random() * typeSpeed) + typeSpeed/2;
      inspectingInnerTag = false;

      if (innerTagOpen) {
        const wrapper = document.createElement("span");
        outerElement.appendChild(wrapper);
        wrapper.innerHTML = innerElTagAndAttributes;
        innerElement = wrapper.firstChild as HTMLElement;
      }
    }

    cursorPosition++;
    if (cursorPosition < HTML.length)
      setTimeout(type, tempTypeSpeed);
    if (cursorPosition === HTML.length)
      setTimeout(callback, tempTypeSpeed);
  };

  return { type };
}