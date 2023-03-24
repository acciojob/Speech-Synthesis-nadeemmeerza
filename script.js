// Your script here.
let speak = document.getElementById("speak")
let stop = document.getElementById("stop")
var p = speechSynthesis.getVoices();
console.log(p);
voices.map((voice)=>{
	document.getElementById("voices").appendChild = "<option>"+voice+"</option>"
})

speak.addEventListener("click", (e)=>{
	var text = document.getElementById("text").value;
	let utterance = new SpeechSynthesisUtterance();
	utterance.text = text;
	speechSynthesis.speak(utterance);
})