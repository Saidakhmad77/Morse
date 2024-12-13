const morseCode = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.',
    'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.',
    'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-',
    'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..', '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----', ' ': '/'
};

function translateToMorse() {
    const textInput = document.getElementById('text-input').value.toLowerCase();
    const morseOutput = textInput.split('').map(char => morseCode[char] || '').join(' ');
    document.getElementById('morse-output').value = morseOutput;
}

function navigateToAnotherPage() {
    window.location.href = "/Project1/HTML/another_page.html";
}
