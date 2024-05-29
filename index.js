function Speak(){
    let text=document.getElementById('input').value;
    let speech=new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}