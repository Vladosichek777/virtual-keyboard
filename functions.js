function createElement(element, place, elementClass) {
  const newElement = document.createElement(element);
  newElement.classList.add(elementClass);
  place.append(newElement);
  return newElement;
}

function createButton(element, place, elementClass, keyCode, textContent) {
  let button = createElement(element, place, elementClass);
  button.setAttribute("data-key", `${keyCode}`);
  button.innerHTML = `${textContent}`;
  return button;
}

function searchCurrentButton(buttons) {
  window.addEventListener("keydown", (e) => {
    for (let button of buttons) {
      if (button.dataset.key === e.code) {
        button.classList.add("active");
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

function listenVirtualKeyBoardKey(keyboard, textarea) {
  keyboard.addEventListener("mousedown", (e) => {
    if (e.target.dataset.key) {
      e.target.classList.add("active");
      setTimeout(() => {
        e.target.classList.remove("active");
      }, 200);

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
