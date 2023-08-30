let container = createElement("div", document.body, "container");
let textarea = createElement("textarea", container, "textarea");
textarea.setAttribute("cols", "75");
textarea.setAttribute("rows", "10");

let keyboard = createElement("div", container, "keyboard");
let row1 = createElement("div", keyboard, "row");
let row2 = createElement("div", keyboard, "row");
let row3 = createElement("div", keyboard, "row");
let row4 = createElement("div", keyboard, "row");
let row5 = createElement("div", keyboard, "row");

let button1 = createButton("button", row1, "basic", "Backquote", "ё");
let button2 = createButton("button", row1, "basic", "Digit1", "1");
let button3 = createButton("button", row1, "basic", "Digit2", "2");
let button4 = createButton("button", row1, "basic", "Digit3", "3");
let button5 = createButton("button", row1, "basic", "Digit4", "4");
let button6 = createButton("button", row1, "basic", "Digit5", "5");
let button7 = createButton("button", row1, "basic", "Digit6", "6");
let button8 = createButton("button", row1, "basic", "Digit7", "7");
let button9 = createButton("button", row1, "basic", "Digit8", "8");
let button10 = createButton("button", row1, "basic", "Digit9", "9");
let button11 = createButton("button", row1, "basic", "Digit0", "0");
let button12 = createButton("button", row1, "basic", "Minus", "-");
let button13 = createButton("button", row1, "basic", "Equal", "=");
let button14 = createButton("button", row1, "backspace", "Backspace", "Backspace");

let button15 = createButton("button", row2, "tab", "Tab", "Tab");
let button16 = createButton("button", row2, "basic", "KeyQ", "й");
let button17 = createButton("button", row2, "basic", "KeyW", "ц");
let button18 = createButton("button", row2, "basic", "KeyE", "у");
let button19 = createButton("button", row2, "basic", "KeyR", "к");
let button20 = createButton("button", row2, "basic", "KeyT", "е");
let button21 = createButton("button", row2, "basic", "KeyY", "н");
let button22 = createButton("button", row2, "basic", "KeyU", "г");
let button23 = createButton("button", row2, "basic", "KeyI", "ш");
let button24 = createButton("button", row2, "basic", "KeyO", "щ");
let button25 = createButton("button", row2, "basic", "KeyP", "з");
let button26 = createButton("button", row2, "basic", "BracketLeft", "х");
let button27 = createButton("button", row2, "basic", "BracketRight", "ъ");
let button28 = createButton("button", row2, "basic", "Backslash", "\\");
let button29 = createButton("button", row2, "del", "Delete", "Del");

let button30 = createButton("button", row3, "caps-lock", "CapsLock", "CapsLock");
let button31 = createButton("button", row3, "basic", "KeyA", "ф");
let button32 = createButton("button", row3, "basic", "KeyS", "ы");
let button33 = createButton("button", row3, "basic", "KeyD", "в");
let button34 = createButton("button", row3, "basic", "KeyF", "а");
let button35 = createButton("button", row3, "basic", "KeyG", "п");
let button36 = createButton("button", row3, "basic", "KeyH", "р");
let button37 = createButton("button", row3, "basic", "KeyJ", "о");
let button38 = createButton("button", row3, "basic", "KeyK", "л");
let button39 = createButton("button", row3, "basic", "KeyL", "д");
let button40 = createButton("button", row3, "basic", "Semicolon", "ж");
let button41 = createButton("button", row3, "basic", "Quote", "э");
let button42 = createButton("button", row3, "enter", "Enter", "Enter");

let button43 = createButton("button", row4, "shift", "ShiftLeft", "Shift");
button43.classList.add("shift-left");
let button44 = createButton("button", row4, "basic", "KeyZ", "я");
let button45 = createButton("button", row4, "basic", "KeyX", "ч");
let button46 = createButton("button", row4, "basic", "KeyC", "с");
let button47 = createButton("button", row4, "basic", "KeyV", "м");
let button48 = createButton("button", row4, "basic", "KeyB", "и");
let button49 = createButton("button", row4, "basic", "KeyN", "т");
let button50 = createButton("button", row4, "basic", "KeyM", "ь");
let button51 = createButton("button", row4, "basic", "Comma", "б");
let button52 = createButton("button", row4, "basic", "Period", "ю");
let button53 = createButton("button", row4, "basic", "Slash", ".");
let button54 = createButton("button", row4, "basic", "ArrowUp", "&#9650");
button54.classList.add("basic-dark");
let button55 = createButton("button", row4, "shift", "ShiftRight", "Shift");
button55.classList.add("shift-right");

let button56 = createButton("button", row5, "basic", "ControlLeft", "Ctrl");
let button57 = createButton("button", row5, "basic", "MetaLeft", "Win");
let button58 = createButton("button", row5, "basic", "AltLeft", "Alt");
let button59 = createButton("button", row5, "space", "Space", "");
let button60 = createButton("button", row5, "basic", "AltRight", "Alt");
let button61 = createButton("button", row5, "basic", "ArrowLeft", "◄");
let button62 = createButton("button", row5, "basic", "ArrowDown", "▼");
let button63 = createButton("button", row5, "basic", "ArrowRight", "►");
let button64 = createButton("button", row5, "basic", "ControlRight", "Ctrl");
[button56, button57, button58, button60, button61, button62, button63, button64].forEach((item) => item.classList.add("basic-dark"));

if (!localStorage.getItem("language")) {
  localStorage.setItem("language", "rus");
}
if (localStorage.getItem("language") === "eng") {
  const buttons = [button1, button16, button17, button18, button19, button20, button21, button22, button23, button24, button25, button26, button27, button31, button32, button33, button34, button35, button36, button37, button38, button39, button40, button41, button44, button45, button46, button47, button48, button49, button50, button51, button52, button53];
  const symbols = ["``", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];
  buttons.forEach((button, index) => (button.innerHTML = symbols[index]));
}

const buttons = document.querySelectorAll("button");
searchCurrentButton(buttons,textarea);
listenVirtualKeyBoardKey(keyboard, textarea);
textarea.addEventListener("blur", () => {
  textarea.focus();
});

const buttonsWithKeyAttr = document.querySelectorAll('[data-key*="Key"]');
const simpleButtonsAll = [...buttonsWithKeyAttr, button1, button26, button27, button40, button41, button51, button52];

function listenSpecialKeyFromKeyboard() {
  document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft" || e.code === "ArrowRight" || e.code === "ArrowUp" || e.code === "ArrowDown") {
      e.preventDefault();
      let buttonContent = document.querySelector(`[data-key = ${e.code}]`).innerHTML;
      let mouseCurrentPosiion = textarea.selectionStart;
      let leftPartString = textarea.value.slice(0, mouseCurrentPosiion) + buttonContent;
      let rightPartString = textarea.value.slice(mouseCurrentPosiion, textarea.value.length);
      textarea.value = leftPartString + rightPartString;
      textarea.setSelectionRange(mouseCurrentPosiion + 1, mouseCurrentPosiion + 1);
    }

    if (e.code === "Tab") {
      e.preventDefault();
      let mouseCurrentPosiion = textarea.selectionStart;
      let leftPartString = textarea.value.slice(0, mouseCurrentPosiion);
      let rightPartString = "  " + textarea.value.slice(mouseCurrentPosiion, textarea.value.length);
      textarea.value = leftPartString + rightPartString;
      textarea.setSelectionRange(mouseCurrentPosiion + 2, mouseCurrentPosiion + 2);
    }
  });
}
listenSpecialKeyFromKeyboard();

function changeRegister() {
  let numberCapsDown = 0;

  function toUpper() {
    function toUpperSpecial() {
      if (localStorage.language === "rus") {
        const buttons = [button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12, button13, button28, button53];
        const symbol = ["!", '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "/", ","];
        buttons.forEach((button, index) => (button.innerHTML = symbol[index]));
      }

      if (localStorage.language === "eng") {
        const buttons = [button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12, button13, button26, button27, button28, button40, button41, button51, button52, button53];
        const symbol = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "|", ":", '"', "<", ">", "?"];
        buttons.forEach((button, index) => (button.innerHTML = symbol[index]));
      }
    }
    for (let button of simpleButtonsAll) {
      button.innerHTML = button.innerHTML.toUpperCase();
    }
    toUpperSpecial();
  }

  function toLower() {
    function toLowerSpecial() {
      if (localStorage.language === "rus") {
        const buttons = [button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12, button13, button28, button53];
        const symbol = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "\\", "."];
        buttons.forEach((button, index) => (button.innerHTML = symbol[index]));
      }
      if (localStorage.language === "eng") {
        const buttons = [button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12, button13, button26, button27, button28, button40, button41, button51, button52, button53];
        const symbol = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "[", "]", "\\", ";", "'", ",", ".", "/"];
        buttons.forEach((button, index) => (button.innerHTML = symbol[index]));
      }
    }
    for (let button of simpleButtonsAll) {
      button.innerHTML = button.innerHTML.toLowerCase();
    }
    toLowerSpecial();
  }

  keyboard.addEventListener("mousedown", (e) => {
    if (e.target.dataset.key === "ShiftLeft" || e.target.dataset.key === "ShiftRight") {
      toUpper();
    }
    if (e.target.dataset.key === "CapsLock") {
      ++numberCapsDown;
      if (numberCapsDown > 1) {
        toLower();
        numberCapsDown = 0;
        return;
      }
      toUpper();
    }
  });

  keyboard.addEventListener("mouseup", (e) => {
    if (e.target.dataset.key === "ShiftLeft" || e.target.dataset.key === "ShiftRight") {
      toLower();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
      toUpper();
    }

    if (e.code === "CapsLock") {
      ++numberCapsDown;
      if (numberCapsDown > 1) {
        toLower();
        numberCapsDown = 0;
        return;
      }
      toUpper();
    }
  });

  document.addEventListener("keyup", (e) => {
    if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
      toLower();
    }
  });
}
changeRegister();

function changeLanguage() {
  function changeLangInner() {
    if (localStorage.language === "rus") {
      localStorage.setItem("language", "eng");
      const buttons = [button1, button16, button17, button18, button19, button20, button21, button22, button23, button24, button25, button26, button27, button31, button32, button33, button34, button35, button36, button37, button38, button39, button40, button41, button44, button45, button46, button47, button48, button49, button50, button51, button52, button53];
      const symbols = ["``", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];
      buttons.forEach((button, index) => (button.innerHTML = symbols[index]));
      return;
    }
    if (localStorage.language === "eng") {
      localStorage.setItem("language", "rus");
      const buttons = [button1, button16, button17, button18, button19, button20, button21, button22, button23, button24, button25, button26, button27, button31, button32, button33, button34, button35, button36, button37, button38, button39, button40, button41, button44, button45, button46, button47, button48, button49, button50, button51, button52, button53];
      const symbol = ["ё", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."];
      buttons.forEach((button, index) => (button.innerHTML = symbol[index]));
      return;
    }
  }

  document.addEventListener("keydown", (e) => {
    if (e.code === "ControlLeft" && e.altKey === true) {
      changeLangInner();
    }
    if (e.code === "AltLeft" && e.ctrlKey === true) {
      changeLangInner();
    }
  });
}
changeLanguage();
console.log(localStorage);
