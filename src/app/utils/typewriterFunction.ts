export const setupTypewriter = (outerElement: HTMLElement, inputTypeSpeed: number, callback: any, variab:any ) => {
  const HTML = outerElement.textContent || "";
  const typeSpeed =  inputTypeSpeed || 100

  // console.log(HTML)
  // console.log(outerElement.textContent)
  
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

    // if (HTML[cursorPosition] === ">") {
    //   //innerElement.textContent += ">";
    //   console.log("hey")
    // }
    if (!inspectingInnerTag && innerTagOpen) {
      if (HTML[cursorPosition] === ">") {
        //innerElement.textContent += ">";
        console.log("hey")
      } else {
        innerElement.innerHTML += HTML[cursorPosition];
      }
    }

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
        const newSpan = document.createElement("span");
        outerElement.appendChild(newSpan);
        newSpan.innerHTML = innerElTagAndAttributes;
        innerElement = newSpan.firstChild as HTMLElement;
      }
    }

    cursorPosition++;
    if (cursorPosition < HTML.length)
      setTimeout(type, tempTypeSpeed);
    if (cursorPosition === HTML.length)
      setTimeout(() => callback(variab), tempTypeSpeed);
  };

  return { type };
}