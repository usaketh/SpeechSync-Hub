// Web Speech API
let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");
const loadingSpinner = document.getElementById("loading-spinner");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// Set the onend event listener once during initialization
speech.onend = () => {
    loadingSpinner.style.display = "none";
};

document.querySelector("button").addEventListener("click", () => {
    console.log("hey");
    loadingSpinner.style.display = "block";
    console.log("hey");

    speech.text = document.querySelector("textarea").value;
    console.log("hey");

    window.speechSynthesis.speak(speech);
    console.log("hey");

});
