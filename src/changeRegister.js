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

const buttonsWithKeyAttr = document.querySelectorAll('[data-key*="Key"]');
const simpleButtonsAll = [...buttonsWithKeyAttr, button1, button26, button27, button40, button41, button51, button52];

export default function changeRegister() {
    let quantityCapsDown = 0;
  
    function toUpper() {
      function toUpperSpecialKey() {
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
      toUpperSpecialKey();
    }
  
    function toLower() {
      function toLowerSpecialKey() {
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
      toLowerSpecialKey();
    }
  
    function actionToCapsPress() {
      ++quantityCapsDown;
      if (quantityCapsDown > 1) {
        toLower();
        quantityCapsDown = 0;
        return;
      }
      toUpper();
    }
  
    keyboard.addEventListener("mousedown", (e) => {
      if (e.target.dataset.key === "ShiftLeft" || e.target.dataset.key === "ShiftRight") {
        toUpper();
      }
      if (e.target.dataset.key === "CapsLock") {
        actionToCapsPress();
      }
    });
  
    document.addEventListener("keydown", (e) => {
      if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
        toUpper();
      }
      if (e.code === "CapsLock") {
        actionToCapsPress();
      }
    });
  
    keyboard.addEventListener("mouseup", (e) => {
      if (e.target.dataset.key === "ShiftLeft" || e.target.dataset.key === "ShiftRight") {
        toLower();
      }
    });
    document.addEventListener("keyup", (e) => {
      if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
        toLower();
      }
    });
}


