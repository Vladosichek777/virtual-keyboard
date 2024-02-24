
//create all elements
function createElement(element, place, elementClass) {
  const newElement = document.createElement(element);
  newElement.classList.add(elementClass);
  place.append(newElement);
  return newElement;
}

//create buttons
function createButton(element, place, elementClass, keyCode, textContent) {
  const button = createElement(element, place, elementClass);
  button.setAttribute("data-key", `${keyCode}`);
  button.innerHTML = `${textContent}`;
  return button;
}

//Search button when user click down some button on physical keyboard
function searchCurrentButton(buttons, textarea) {
  window.addEventListener("keydown", (e) => {
    for (let button of buttons) {
      if (button.dataset.key === e.code) {
        button.classList.add("active");
        if (
          button.dataset.key !== "Backspace" &&
          button.dataset.key !== "Tab" &&
          button.dataset.key !== "Delete" &&
          button.dataset.key !== "CapsLock" &&
          button.dataset.key !== "Enter" &&
          button.dataset.key !== "ShiftLeft" &&
          button.dataset.key !== "ShiftRight" &&
          button.dataset.key !== "ControlLeft" &&
          button.dataset.key !== "MetaLeft" &&
          button.dataset.key !== "AltLeft" &&
          button.dataset.key !== "AltRight" &&
          button.dataset.key !== "Space" &&
          button.dataset.key !== "ControlRight"
        ) {
          e.preventDefault();
          let buttonContent = button.innerHTML;
          let mouseCurrentPosiion = textarea.selectionStart;
          let leftPartString = textarea.value.slice(0, mouseCurrentPosiion) + buttonContent;
          let rightPartString = textarea.value.slice(mouseCurrentPosiion, textarea.value.length);
          textarea.value = leftPartString + rightPartString;
          textarea.setSelectionRange(mouseCurrentPosiion + 1, mouseCurrentPosiion + 1);
        }
      }
    }
  });
  window.addEventListener("keyup", (e) => {
    for (let button of buttons) {
      if (button.classList.contains("active")) {
        button.classList.remove("active");
      }
    }
  });
}

//behavior for buttons with special actions
function createActionSpecialKey(e, textarea) {
  if (e.target.dataset.key === "Backspace") {
    let mouseCurrentPosiion = textarea.selectionStart;
    let leftPartString = textarea.value.substr(0, mouseCurrentPosiion - 1);
    let rightPartString = textarea.value.slice(mouseCurrentPosiion, textarea.value.length);
    textarea.value = leftPartString + rightPartString;
    textarea.setSelectionRange(mouseCurrentPosiion - 1, mouseCurrentPosiion - 1);
    textarea.focus();
  }

  if (e.target.dataset.key === "Tab") {
    let mouseCurrentPosiion = textarea.selectionStart;
    let leftPartString = textarea.value.slice(0, mouseCurrentPosiion);
    let rightPartString = "  " + textarea.value.slice(mouseCurrentPosiion, textarea.value.length);
    textarea.value = leftPartString + rightPartString;
    textarea.setSelectionRange(mouseCurrentPosiion + 2, mouseCurrentPosiion + 2);
  }

  if (e.target.dataset.key === "Delete") {
    let mouseCurrentPosiion = textarea.selectionStart;
    let leftPartString = textarea.value.slice(0, mouseCurrentPosiion);
    let rightPartString = textarea.value.slice(mouseCurrentPosiion + 1, textarea.value.length);
    textarea.value = leftPartString + rightPartString;
    textarea.setSelectionRange(mouseCurrentPosiion, mouseCurrentPosiion);
  }

  if (e.target.dataset.key === "Space") {
    let mouseCurrentPosiion = textarea.selectionStart;
    let leftPartString = textarea.value.slice(0, mouseCurrentPosiion);
    let rightPartString = " " + textarea.value.slice(mouseCurrentPosiion, textarea.value.length);
    textarea.value = leftPartString + rightPartString;
    textarea.setSelectionRange(mouseCurrentPosiion + 1, mouseCurrentPosiion + 1);
  }

  if (e.target.dataset.key === "Enter") {
    let mouseCurrentPosiion = textarea.selectionStart;
    let leftPartString = textarea.value.slice(0, mouseCurrentPosiion);
    let rightPartString = textarea.value.slice(mouseCurrentPosiion, textarea.value.length);

    textarea.value = leftPartString + "\n" + rightPartString;
    textarea.setSelectionRange(mouseCurrentPosiion + 1, mouseCurrentPosiion + 1);
  }
}

//listen clicks on the virtual keyboard 
function listenVirtualKeyBoardKey(keyboard, textarea) {
  keyboard.addEventListener("mousedown", (e) => {
    if (e.target.dataset.key) {
      e.target.classList.add("active");
      setTimeout(() => {
        e.target.classList.remove("active");
      }, 200);

      //check on button with special behavior
      if (
        e.target.dataset.key !== "Backspace" &&
        e.target.dataset.key !== "Tab" &&
        e.target.dataset.key !== "Delete" &&
        e.target.dataset.key !== "CapsLock" &&
        e.target.dataset.key !== "Enter" &&
        e.target.dataset.key !== "ShiftLeft" &&
        e.target.dataset.key !== "ShiftRight" &&
        e.target.dataset.key !== "ControlLeft" &&
        e.target.dataset.key !== "MetaLeft" &&
        e.target.dataset.key !== "AltLeft" &&
        e.target.dataset.key !== "AltRight" &&
        e.target.dataset.key !== "Space" &&
        e.target.dataset.key !== "ControlRight"
      ) {
        let mouseCurrentPosiion = textarea.selectionStart;
        let leftPartString = textarea.value.slice(0, mouseCurrentPosiion) + e.target.innerHTML;
        let rightPartString = textarea.value.slice(mouseCurrentPosiion, textarea.value.length);
        textarea.value = leftPartString + rightPartString;
        textarea.setSelectionRange(mouseCurrentPosiion + 1, mouseCurrentPosiion + 1);
      }
      createActionSpecialKey(e, textarea);
    }
  });
}
