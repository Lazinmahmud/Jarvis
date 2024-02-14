const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 0.9;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning Boss...")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon Master...")
    }

    else{
        speak("Good Evenining brother...")
    }

}

window.addEventListener('load', ()=>{
    speak("Initializing JARVIS..");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        speak("Hey bro,how can i help you?");
    }
    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    }
    
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening youtube...");
    }
    
    else if(message.includes("opening youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening youtube...");
    }
    
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening facebook...");
    }
    
    else if(message.includes("opening facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening facebook...");
    }
    
    else if (message.includes("open messenger")) {
    window.location.href = "intent://chat/#Intent;package=com.facebook.orca;scheme=fb://facewebmodal;end";
    speak("Opening Messenger app...");
}
    
    else if(message.includes("open instagram")){
        window.open("https://instagram.com", "_blank");
        speak("Opening instagram...");
    }
    
    else if(message.includes("opening instagram")){
        window.open("https://instagram.com", "_blank");
        speak("Opening instagram...");
    }
    
    else if(message.includes("open my youtube channel")){
        window.open("https://youtube.com/@LazimMahmudVlogs?si=sbEINL2g8JrBBJUY");
        speak("Opening your youtube channel...");
    }
    
    else if(message.includes("opening my youtube channel")){
        window.open("https://youtube.com/@LazimMahmudVlogs?si=sbEINL2g8JrBBJUY");
        speak("Opening your youtube channel...");
    }
    // ... (other conditions)

    else if(message.includes('what is your name') || message.includes('your name')) {
        const finalText = "My name is Jarvis.";
        speak(finalText);
    }
    
    else if(message.includes('oh my God,you are very intelligent') || message.includes('very intelligent')) {
        const finalText = "Thank you";
        speak(finalText);
    }
    
    else if(message.includes('love you jarvis') || message.includes('love you')) {
        const finalText = "love you too";
        speak(finalText);
    }
    
    else if(message.includes('who is your boss') || message.includes('your boss')) {
        const finalText = "Lazim Mahmud Upol";
        speak(finalText);
    }
    
    else if(message.includes('can you help me') || message.includes('help me')) {
        const finalText = "sure, how can i help you.";
        speak(finalText);
    }
    
    else if (message.includes("what time is it now")) {
         const currentTime = new Date().toLocaleTimeString();
        const response = `The current time is ${currentTime}`;
        speak(response);
    }
    
    else if(message.includes('good morning jarvis') || message.includes('good morning')) {
        const finalText = "good morning brother,how can i help you today?";
        speak(finalText);
    }
    
    else if(message.includes('how can i help you') || message.includes('help you.')) {
        const finalText = "Thanks, I don't need any help. Can I help you?";
        speak(finalText);
    }
    
    else if(message.includes('loving your voice') || message.includes('your voice')) {
        const finalText = "thank you brother,you are so sweet";
        speak(finalText);
    }
    
    else if(message.includes('ohh sure') || message.includes('sure')) {
        const finalText = "yes,hundred% sure. ";
        speak(finalText);
    }
    
    else if(message.includes('how are you') || message.includes('how are you')) {
        const finalText = "Im fine, how can i help you";
        speak(finalText);
    }
    
    else if(message.includes('do you know me') || message.includes('know me')) {
        const finalText = "yes, you are my boss";
        speak(finalText);
    }
    
    else if(message.includes('Thank you jarvis') || message.includes('thank you')) {
        const finalText = "you are most welcome";
        speak(finalText);
    }
    
    else if(message.includes('Tell me something about yourself') || message.includes('about yourself')) {
        const finalText = "sure! My name is Jarvis, I am an computer programme, created by, Lazim Mahmud Upol, Model No: Jarvis 2.0";
        speak(finalText);
    }
    
    else if(message.includes('what is your program name') || message.includes('program name')) {
        const finalText = "Iam an javascript programme ";
        speak(finalText);
    }
    
    
    else if(message.includes('you are male or female') || message.includes('male or female')) {
        const finalText = "no no,i am an ai assistant";
        speak(finalText);
    }
    
    
    else if(message.includes('Jarvis whats your model number') || message.includes('model number')) {
        const finalText = " my Model No. Jarvis 2.0";
        speak(finalText);
    }
    
    else if(message.includes('good night') || message.includes('good night')) {
        const finalText = " good night brother";
        speak(finalText);
    }
    

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    }

    // ... (other conditions)

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = message
        speak(finalText);
    }
}