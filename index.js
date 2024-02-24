import listenSpecialKeyFromKeyboard from "./src/special-key.js";
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
  buttons
} from "./src/cretingElements.js";
import changeRegister from "./src/changeRegister.js";
import changeLanguage from "./src/changeLanguage.js";

//check previous language and set current keyboard language
if (!localStorage.getItem("language")) {
  localStorage.setItem("language", "rus");
} else if (localStorage.getItem("language") === "eng") {
  const buttons = [button1, button16, button17, button18, button19, button20, button21, button22, button23, button24, button25, button26, button27, button31, button32, button33, button34, button35, button36, button37, button38, button39, button40, button41, button44, button45, button46, button47, button48, button49, button50, button51, button52, button53];
  const symbols = ["``", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];
  buttons.forEach((button, index) => (button.innerHTML = symbols[index]));
}


//Textarea always on focus
textarea.addEventListener("blur", () => {
  textarea.focus();
});

searchCurrentButton(buttons, textarea);
listenVirtualKeyBoardKey(keyboard, textarea);
listenSpecialKeyFromKeyboard(textarea);
changeLanguage();
changeRegister();