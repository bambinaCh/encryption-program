//mir sind kei Schwiizerinne. Drum isch gebrocheniges schwiizerdüütsch jetze

/////////////////////////////CAESAR/////////////////////////////////////////////

//Funktion zum en Text verschlüssle mit Ceasar
function encrypt(word) {
  //Ersetz jede Buechstabe dur de nöchschte Buechstabe im Alphabet
  var encryptedWord = "";
  for (var i = 0; i < word.length; i++) {
    var charCode = word.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) { //Chlini Buechstabe
      encryptedWord += String.fromCharCode((charCode - 97 + 1) % 26 + 97);
    } else if (charCode >= 65 && charCode <= 90) { //Grossi Buechstabe
      encryptedWord += String.fromCharCode((charCode - 65 + 1) % 26 + 65);
    } else {
      encryptedWord += word.charAt(i);
    }
  }
  return encryptedWord;
}

//Funktion zum en verschlüsselte Text Entschlüssle mit Ceasar
function decrypt(word) {
  //Ersetz jede Buechstabe dur de vorherige Buechstabe im Alphabet
  var decryptedWord = "";
  for (var i = 0; i < word.length; i++) {
    var charCode = word.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) { //Chlini Buechstabe
      decryptedWord += String.fromCharCode((charCode - 97 - 1 + 26) % 26 + 97);
    } else if (charCode >= 65 && charCode <= 90) { //Grossi Buechstabe
      decryptedWord += String.fromCharCode((charCode - 65 - 1 + 26) % 26 + 65);
    } else {
      decryptedWord += word.charAt(i);
    }
  }
  return decryptedWord;
}

//Event-Handler für t Verschlüssel-Schaltflächi
function encryptButtonClicked() {
  var word = document.getElementById("ceasarInput").value;
  var encryptedWord = encrypt(word);
  document.getElementById("encryptedCeasar").textContent = encryptedWord;
}

//Event-Handler für t Entschlüssel-Schaltflächi
function decryptButtonClicked() {
  var encryptedText = document.getElementById("encryptedCeasarInput").value;
  var decryptedText = decrypt(encryptedText);
  document.getElementById("decryptedCeasar").textContent = decryptedText;
}

////////////////////////////CAESAR ASCII//////////////////////////////////////////

// Funktion zum en Text verschlüssle au mit Ceasar aber ASCII
function verschluessle(word) {
  var verschluesselteWort = "";
  for (var i = 0; i < word.length; i++) {
    var charCode = word.charCodeAt(i);
    //Feschti Azahl vo Zeiche zum ASCII Wert anehänge
    var verschluesselteCharCode = charCode + 3;
    verschluesselteWort += String.fromCharCode(verschluesselteCharCode);
  }
  return verschluesselteWort;
}

// Funktion zum en verschlüsselte Text Entschlüssle au mit Ceasar aber ASCII
function entschluessle(verschluesselteWort) {
  var entschluesselteWort = "";
  for (var i = 0; i < verschluesselteWort.length; i++) {
    var charCode = verschluesselteWort.charCodeAt(i);
    // Feschti Azahl vo Zeiche vom ASCII-Wert wieder wegnäh
    var entschluesselteCharCode = charCode - 3;
    entschluesselteWort += String.fromCharCode(entschluesselteCharCode);
  }
  return entschluesselteWort;
}

// Event-Handler für t Verschlüssel-Schaltflächi
function verschluessleButtonClicked() {
  var word = document.getElementById("asciiInput").value;
  var verschluesselteWort = verschluessle(word);
  document.getElementById("encryptedAscii").textContent = verschluesselteWort;
}

// Event-Handler für t Entschlüssel-Schaltflächi
function entschluessleButtonClicked() {
  var verschluesselteWort = document.getElementById("encryptedAsciiInput").value;
  var entschluesselteWort = entschluessle(verschluesselteWort);
  document.getElementById("decryptedAscii").textContent = entschluesselteWort;
}

/////////////////////////////VIGNERE///////////////////////////////////////////////

//Verschlüsselig mit Vigenere Verschlüsselig
//nimmt zwei Parameter, de Text und de Schlüssel
function encryptText(text, keyword) {
  //verschlüsselte Text initialisiere
  let encryptedText = "";
  //Schlüsselwort Index initialisiere
  let keyIndex = 0;
  //Text iteriere
  for (let i = 0; i < text.length; i++) {
    //unicode vom aktuelle Zeiche
    let charCode = text.charCodeAt(i);
    let isLetter = false;
    //luege ob es en Buechstabe isch
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      isLetter = true;
      // wenn grossgschribbe
      let isUppercase = (charCode >= 65 && charCode <= 90);
      //Wert in Unicode. Wenn es gross isch, uf 65 gsetzt, wenn chli isch, uf 97 gsetzt
      let baseCharCode = isUppercase ? 65 : 97;
      // shift isch wie viel en Zeiche verschobe wird, also shifted. Da isches de unicode vom Schlüssel minus 97, damit es im entsprechende alphabetishe index isch(0-25)
      let shift = keyword.charCodeAt(keyIndex) - 97;
      //Vigenere Formel, das tut de Unicode vom Zeiche verschiebe und stellt sicher dass es zwüsched 0 und 25 isch
      let encryptedCharCode = ((charCode - baseCharCode + shift) % 26) + baseCharCode;
      //in String umwandle und anehänge
      encryptedText += String.fromCharCode(encryptedCharCode);

      //inkrement 1, uf 0 gsetzt wenn es am Endi isch
      keyIndex = (keyIndex + 1) % keyword.length;
    }
    //für wenn es kei Buechstabe isch
    if (!isLetter) {
      //Unicode wert hole und Modulo 256 um sicherzstelle, dass es innerhalb des ASCII-Code-Bereichs isch (0-255)
      let encryptedCharCode = (charCode + keyword.charCodeAt(keyIndex)) % 256;
      //in String umwandle und anehänge
      encryptedText += String.fromCharCode(encryptedCharCode);
      //inkrement
      keyIndex = (keyIndex + 1) % keyword.length;
    }
  }
  console.log(encryptedText);
  return encryptedText;
}


//Funktion zum de verschlüsselte Text wieder entschlüssle
//Da wird eigentlich alles rückgängig gmacht, was in encryptText() gmacht worden isch
function decryptText(encryptedText, keyword) {
  console.log(encryptedText, keyword)
  //entschlüsselte Text initialisiere
  let decryptedText = "";
  let keyIndex = 0;
  //Verschlüsselte Text iteriere
  for (let i = 0; i < encryptedText.length; i++) {
    //Unicode Wert vom aktuelle Zeiche
    let charCode = encryptedText.charCodeAt(i);
    let isLetter = false;
    //luege ob es en Buechstabe isch
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      //gross oder chli gschribbe
      isLetter = true;
      let isUppercase = (charCode >= 65 && charCode <= 90);
      let baseCharCode = isUppercase ? 65 : 97;
      let shift = keyword.charCodeAt(keyIndex) - 97;
      //Shift rückgängig mache und 26 zazuezält, um sicherzstelle, dass de Wert positiv isch (wegem Modulo in encrypt Funktion)
      //dann Modulo 26 damit es innerhalb 0-25 isch, und minus baseCharcode um de Unicode Wert wieder im richtige Bereich zverschiebe
      let decryptedCharCode = ((charCode - baseCharCode - shift + 26) % 26) + baseCharCode;
      decryptedText += String.fromCharCode(decryptedCharCode);

      keyIndex = (keyIndex + 1) % keyword.length;
    }
    //wenn kei Buechstabe
    if (!isLetter) {
      let decryptedCharCode = (charCode - keyword.charCodeAt(keyIndex) + 256) % 256;
      decryptedText += String.fromCharCode(decryptedCharCode);

      keyIndex = (keyIndex + 1) % keyword.length;
    }
  }
  console.log(decryptedText)
  return decryptedText;
}


// Event-Handler für t Verschlüssel-Schaltflächi
function encodeClicked() {
  let keyword = document.getElementById("vigKeyword").value;
  let text = document.getElementById("vigInput").value;
  let encryptedText = encryptText(text, keyword);
  document.getElementById("encryptedVigenere").textContent = encryptedText;
}

// Event-Handler für t Entschlüssel-Schaltflächi
function decodeClicked() {
  let keyword = document.getElementById("enVigKeyword").value
  let encryptedText = document.getElementById("encryptedVigInput").value;
  let decryptedText = decryptText(encryptedText, keyword);
  document.getElementById("decryptedVigenere").textContent = decryptedText;
}


/////////////////////////////XOR////////////////////////////////////////////////////////

//Funktion zum en Text mit XOR verschlüssle und entschlüssle
//Da es e Symmetrischi Operation isch, wenn es zweimal agwendet wird, gliicht es sich us
//drum brucht es kei Entschlüsseligsfunktion
function xor(text, key) {
  console.log(text, key)
  //Resultat initialisiere
  let endText = "";
  //Text iteriere
  for (let i = 0; i < text.length; i++) {
    //da wird XOR berechnet mit de Unicode Wert vom aktuelle Zeiche im Text und de Unicode Wert vom aktuelle Zeiche im Schlüssel
      let charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      console.log(String.fromCharCode(charCode));
      endText += String.fromCharCode(charCode);
      console.log(endText);
  }
  return endText;
}


function xorEncrypt() {
  let inputText = document.getElementById("xorInput").value;
  let key = document.getElementById("xorKeyword").value;
  const encryptedText = xor(inputText, key);
  document.getElementById("encryptedXor").textContent = encryptedText;
}

function xorDecrypt() {
  let encryptedText = document.getElementById("encryptedXorInput").value;
  let key = document.getElementById("enXorKeyword").value;
  const decryptedText = xor(encryptedText, key);
  document.getElementById("decryptedXor").textContent = decryptedText;
}
