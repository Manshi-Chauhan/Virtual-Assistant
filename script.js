let btn =document.querySelector("#btn")
let content = document.querySelector("#content")

function speak(text){
    //object
    let text_speak= new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang ="en-BB";
    window.speechSynthesis.speak(text_speak); 
}

function wishme(){
    //object
    let day=new Date();
    let hours = day.getHours();
    if(hours>=0 && hours <12){
        speak("Good Morning Mam!")
    }
    else if(hours >=12&& hours <16){
        speak("Good Afternoon Mam!")
    }
    else{
        speak("Good Night Mam!")
    }
}
window.addEventListener('load',() => {
    wishme();
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//create object 
let recognition = new speechRecognition();
recognition.onresult=((event) => {
    let curIndex=event.resultIndex
    let transcript = event.results[curIndex][0].transcript
    content.innerText =transcript;
    takeCommand(transcript.toLowerCase())
})

btn.addEventListener('click', () =>{
    recognition.start();
    btn.style.display="none";
    voice.style.display="block"
})


function takeCommand(message) {
    btn.style.display="block";
    voice.style.display="none"
    if(message.includes("hello")||message.includes("hi")||message.includes("hey")){
        speak("Hello Mam ,How can I help you")
    }
    else if(message.includes("who are you")){
        speak("I am a virtual assistant created by Manshi Mam")
    }
    else if(message.includes("how are you")){
        speak("I'm doing great! What about You?")
    }
    else if(message.includes("do you love me")){
        speak("yes ,but as a friend")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube");
        window.open("https://www.youtube.com","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening insta");
        window.open("https://www.instagram.com")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook");
        window.open("https://www.facebook.com")
    }
    else if(message.includes("open twitter")){
        speak("opening twitter");
        window.open("https://www.twitter.com")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator");
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatspp");
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
        let time =new Date().toLocaleString(undefined,{hour:"numeric", minute :"numeric"})
        speak(time)
    }
    else if(message.includes("open google")){
        speak("opening google");
        window.open("https://www.google.com")
    }
    else {
        speak(`I found this regarding ${message.replace("manas","")}`)
        window.open(`https://www.bing.com/search?q=${message}`)
    }
    
    
    
}