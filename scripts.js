function getAudioPlayer(){
	document.getElementById("mainBody").innerHTML = "<audio type='audio/mp3' controls id='audioPlayer'></audio>"
	var audioPlayer = document.getElementById("audioPlayer")
	audioPlayer.src = "../Jukebox/Assets/tunes/2. Loser.mp3"
}


