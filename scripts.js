function getAudioPlayer(){
	document.getElementById("mainBody").innerHTML = "<audio type='audio/mp3' controls id='audioPlayer'></audio>"
	var audioPlayer = document.getElementById("audioPlayer")
	audioPlayer.src = "../Jukebox/Assets/tunes/1. Truckin.mp3"
	audioFile1 = new AddAudioFile("1. Truckin.mp3", "../Jukebox/Assets/tunes/1. Truckin.mp3")
}

function audioFile() {

}

var trackCounter = 0
function AddAudioFile(trackname, tracklocation) {
	trackCounter += 1
	this.trackname = trackname
	this.tracklocation = tracklocation
	var newDiv = document.createElement("div")
	newDiv.setAttribute("id", "track"+ trackCounter) 
	newDiv.classList.add("audioFile")
	document.getElementById("mainBody").appendChild(newDiv)
	function makeClickable(){document.getElementById("track" + trackCounter).addEventListener("click", audioPlayer.src = this.tracklocation)}
	newDiv.innerHTML = "<h1>" + this.trackname + "</h1>"
	makeClickable(newDiv)
}

