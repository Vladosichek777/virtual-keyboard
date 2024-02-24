import {
    textarea,
    keyboard,
    button1,
    button2,
    button3,
    button4,
    button5,
    button6,
    button7,
    button8,
    button9,
    button10,
    button11,
    button12,
    button13,
    button14,
    button15,
    button16,
    button17,
    button18,
    button19,
    button20,
    button21,
    button22,
    button23,
    button24,
    button25,
    button26,
    button27,
    button28,
    button29,
    button30,
    button31,
    button32,
    button33,
    button34,
    button35,
    button36,
    button37,
    button38,
    button39,
    button40,
    button41,
    button42,
    button43,
    button44,
    button45,
    button46,
    button47,
    button48,
    button49,
    button50,
    button51,
    button52,
    button53,
    button54,
    button55,
    button56,
    button57,
    button58,
    button59,
    button60,
    button61,
    button62,
    button63,
    button64,
} from "./cretingElements.js";

export default function changeLanguage() {
    function changeLanguageInner() {
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
        changeLanguageInner();
      }
      if (e.code === "AltLeft" && e.ctrlKey === true) {
        changeLanguageInner();
      }
    });
  }