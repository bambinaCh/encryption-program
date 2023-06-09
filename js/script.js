// Funktion zum Verschlüsseln eines Worts
function encrypt(word) {
    // Implementiere hier deine Verschlüsselungsmethode
    // Zum Beispiel: Ersetze jeden Buchstaben durch den nächsten Buchstaben im Alphabet
    var encryptedWord = "";
    for (var i = 0; i < word.length; i++) {
      var charCode = word.charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) { // Kleine Buchstaben
        encryptedWord += String.fromCharCode((charCode - 97 + 1) % 26 + 97);
      } else if (charCode >= 65 && charCode <= 90) { // Große Buchstaben
        encryptedWord += String.fromCharCode((charCode - 65 + 1) % 26 + 65);
      } else {
        encryptedWord += word.charAt(i);
      }
    }
    return encryptedWord;
  }

  // Funktion zum Entschlüsseln eines verschlüsselten Worts
  function decrypt(encryptedWord) {
    // Implementiere hier deine Entschlüsselungsmethode
    // Zum Beispiel: Ersetze jeden Buchstaben durch den vorherigen Buchstaben im Alphabet
    var decryptedWord = "";
    for (var i = 0; i < encryptedWord.length; i++) {
      var charCode = encryptedWord.charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) { // Kleine Buchstaben
        decryptedWord += String.fromCharCode((charCode - 97 - 1 + 26) % 26 + 97);
      } else if (charCode >= 65 && charCode <= 90) { // Große Buchstaben
        decryptedWord += String.fromCharCode((charCode - 65 - 1 + 26) % 26 + 65);
      } else {
        decryptedWord += encryptedWord.charAt(i);
      }
    }
    return decryptedWord;
  }

  // Event-Handler für die Verschlüsseln-Schaltfläche
  function encryptButtonClicked() {
    var word = document.getElementById("wordInput").value;
    var encryptedWord = encrypt(word);
    document.getElementById("encryptedWord").textContent = encryptedWord;
  }

  // Event-Handler für die Entschlüsseln-Schaltfläche
  function decryptButtonClicked() {
    var encryptedWord = document.getElementById("encryptedWord").textContent;
    var decryptedWord = decrypt(encryptedWord);
    document.getElementById("decryptedWord").textContent = decryptedWord;
  }


    /////////////////77
         // Funktion zum Verschlüsseln eines Worts
    function verschluessle(wort) {
        var verschluesselteWort = "";
        for (var i = 0; i < wort.length; i++) {
          var charCode = wort.charCodeAt(i);
          // Füge eine feste Anzahl an Zeichen zum ASCII-Wert hinzu
          var verschluesselteCharCode = charCode + 3;
          verschluesselteWort += String.fromCharCode(verschluesselteCharCode);
        }
        return verschluesselteWort;
      }
  
      // Funktion zum Entschlüsseln eines verschlüsselten Worts
      function entschluessle(verschluesselteWort) {
        var entschluesselteWort = "";
        for (var i = 0; i < verschluesselteWort.length; i++) {
          var charCode = verschluesselteWort.charCodeAt(i);
          // Subtrahiere die feste Anzahl an Zeichen vom ASCII-Wert
          var entschluesselteCharCode = charCode - 3;
          entschluesselteWort += String.fromCharCode(entschluesselteCharCode);
        }
        return entschluesselteWort;
      }
  
      // Event-Handler für die Verschlüsseln-Schaltfläche
      function verschluessleButtonClicked() {
        var wort = document.getElementById("wortInput").value;
        var verschluesselteWort = verschluessle(wort);
        document.getElementById("verschluesselteWort").textContent = verschluesselteWort;
      }
  
      // Event-Handler für die Entschlüsseln-Schaltfläche
      function entschluessleButtonClicked() {
        var verschluesselteWort = document.getElementById("verschluesselteWort").textContent;
        var entschluesselteWort = entschluessle(verschluesselteWort);
        document.getElementById("entschluesselteWort").textContent = entschluesselteWort;
      }