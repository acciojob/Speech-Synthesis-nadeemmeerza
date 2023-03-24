// Your script here.
let speak = getElementById("speak")
let stop = getElementById("stop")

speak.addEventListener("click", (e)=>{
	let text = getElementById("text").value
	let utterance = new speechSynthesisUtterance();
	utterance.text = text;
	text.value = "hi i am nadeem"
	speechSynthesis.speak(utterance);
})