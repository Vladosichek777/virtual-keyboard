function listenSpecialKeyFromKeyboard(textarea) {
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

  export default listenSpecialKeyFromKeyboard