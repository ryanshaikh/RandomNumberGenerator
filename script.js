function generateRandomNumber() {
  const numDigits = document.getElementById("numDigits").value;
  const min = Math.pow(10, numDigits - 1);
  const max = Math.pow(10, numDigits) - 1;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  document.getElementById("random-number").innerText = randomNumber;

  // Update Font Size Based On Screen Size After Generating A New Number
  updateFontSize();
}

function updateFontSize() {
  const numDigits = document.getElementById("numDigits").value;
  let fontSize;

  // Check If The Screen Size Is Small (Max-Width: 600px)
  if (window.innerWidth <= 600) {
    // Adjust Font Size For Small Screens
    if (numDigits <= 4) {
      fontSize = 4;
    } else if (numDigits >= 12) {
      fontSize = 1;
    } else {
      // Linearly Interpolate Between 4em And 1em For 4 To 12 Digits On Small Screens
      fontSize = 4 - (numDigits - 4) * 0.2;
    }
  } else {
    // Check If The Screen Size Is Large (Min-Width: 1025px)
    if (window.innerWidth >= 1025) {
      // Adjust Font Size For Large Screens
      if (numDigits <= 4) {
        fontSize = 12;
      } else if (numDigits >= 12) {
        fontSize = 2;
      } else {
        // Linearly Interpolate Between 12em And 2em For 4 To 12 Digits On Large Screens
        fontSize = 12 - (numDigits - 4) * 0.8;
      }
    } else {
      // Default Case For Medium Screens (Min-Width: 601px And Max-Width: 1024px)
      if (numDigits <= 4) {
        fontSize = 8;
      } else if (numDigits >= 12) {
        fontSize = 2;
      } else {
        // Linearly Interpolate Between 8em And 2em For 4 To 12 Digits On Medium Screens
        fontSize = 8 - (numDigits - 4) * 0.4;
      }
    }
  }

  document.getElementById("random-number").style.fontSize = `${fontSize}em`;
}

window.addEventListener("resize", updateFontSize);
