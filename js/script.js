//mir sind kei Schwiizerinne. Drum isch gebrocheniges schwiizerdüütsch jetze
// Funktion zum en Text Verschlüssle
function encrypt(word) {
  // Ersetz jede Buechstabe dur de nöchschte Buechstabe im Alphabet
  var encryptedWord = "";
  for (var i = 0; i < word.length; i++) {
    var charCode = word.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) { // Kleine Buchstaben
      encryptedWord += String.fromCharCode((charCode - 97 + 1) % 26 + 97);
    } else if (charCode >= 65 && charCode <= 90) { // Grosse Buchstaben
      encryptedWord += String.fromCharCode((charCode - 65 + 1) % 26 + 65);
    } else {
      encryptedWord += word.charAt(i);
    }
  }
  return encryptedWord;
}

// Funktion zum en verschlüsselte Text Entschlüssle 
function decrypt(word) {
  // Ersetz jede Buechstabe dur de vorherige Buechstabe im Alphabet
  var decryptedWord = "";
  for (var i = 0; i < word.length; i++) {
    var charCode = word.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) { // Lowercase letters
      decryptedWord += String.fromCharCode((charCode - 97 - 1 + 26) % 26 + 97);
    } else if (charCode >= 65 && charCode <= 90) { // Uppercase letters
      decryptedWord += String.fromCharCode((charCode - 65 - 1 + 26) % 26 + 65);
    } else {
      decryptedWord += word.charAt(i);
    }
  }
  return decryptedWord;
}

// Event-Handler für t Verschlüssel-Schaltflächi
function encryptButtonClicked() {
  var word = document.getElementById("wordInput").value;
  var encryptedWord = encrypt(word);
  document.getElementById("encryptedWord").textContent = encryptedWord;
  console.log(encryptedWord);
}

// Event-Handler für t Entschlüssel-Schaltflächi
function decryptButtonClicked() {
  var encryptedText = document.getElementById("encryptedTextInput").value;
  var decryptedText = decrypt(encryptedText);
  document.getElementById("decryptedWord").textContent = decryptedText;
}




















////////////////////////////////////////////////////////////////////////////
// Funktion zum en Text Verschlüssle
function verschluessle(word) {
  var verschluesselteWort = "";
  for (var i = 0; i < word.length; i++) {
    var charCode = word.charCodeAt(i);
    // Füge eine feste Anzahl an Zeichen zum ASCII-Wert hinzu
    var verschluesselteCharCode = charCode + 3;
    verschluesselteWort += String.fromCharCode(verschluesselteCharCode);
  }
  return verschluesselteWort;
}

// Funktion zum en verschlüsselte Text Entschlüssle
function entschluessle(verschluesselteWort) {
  var entschluesselteWort = "";
  for (var i = 0; i < verschluesselteWort.length; i++) {
    var charCode = verschluesselteWort.charCodeAt(i);
    // Subtrahiere t festi Azahl a Zeiche vom ASCII-Wert
    var entschluesselteCharCode = charCode - 3;
    entschluesselteWort += String.fromCharCode(entschluesselteCharCode);
  }
  return entschluesselteWort;
}

// Event-Handler für t Verschlüssel-Schaltflächi
function verschluessleButtonClicked() {
  var word = document.getElementById("wortInput").value;
  var verschluesselteWort = verschluessle(word);
  document.getElementById("verschluesselteWort").textContent = verschluesselteWort;
}

// Event-Handler für t Entschlüssel-Schaltflächi
function entschluessleButtonClicked() {
  var verschluesselteWort = document.getElementById("verschluesselteWort").textContent;
  var entschluesselteWort = entschluessle(verschluesselteWort);
  document.getElementById("entschluesselteWort").textContent = entschluesselteWort;
}