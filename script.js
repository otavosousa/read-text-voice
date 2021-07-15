document.getElementById('btn-read').addEventListener('click', read)

function read(){

    let text = new SpeechSynthesisUtterance(document.getElementById('input-read').value)
    text.lang = 'en-US';
    speechSynthesis.speak(text);
}