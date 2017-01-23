function getAudioPlayer(){
	document.getElementById("mainBody").innerHTML = "<audio type='audio/mp3' controls id='audioPlayer' class='audioElement'></audio>"
	var audioPlayer = document.getElementById("audioPlayer")

	newAudioFile("1. Truckin", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t01.mp3")
	newAudioFile("2. Loser", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t02.mp3")
	newAudioFile("3. Hard To Handle", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t03.mp3")
	newAudioFile("4. Me And Bobby McGee", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t04.mp3")
	newAudioFile("5. Cold Rain And Snow", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t05.mp3")
	newAudioFile("6. The Rub", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t06.mp3")
	newAudioFile("7. Playing In The Band", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t07.mp3")
	newAudioFile("8. Friend Of The Devil", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t08.mp3")
	newAudioFile("9. China Cat Sunflower ->", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t09.mp3")
	newAudioFile("10. I Know You Rider", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t10.mp3")
	newAudioFile("11. Casey Jones", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t11.mp3")
	nextTrack()

	var newTrackButton = document.createElement("div")
	newTrackButton.setAttribute("id", "newTrackButton")
	newTrackButton.classList.add("addButton")
	document.getElementById("mainBody").appendChild(newTrackButton)
	newTrackButton.innerHTML = "<h1>Add a Track</h1>"
	newTrackButton.addEventListener("click", function(){
		newTrack = prompt("Please enter the name of the track you wish to add.")
		newLocation = prompt("Paste the full URL of the track here.")
		newAudioFile(newTrack, newLocation)
	})

	var pauseButton = document.createElement("div")
	pauseButton.setAttribute("id", "pauseButton")
	pauseButton.classList.add("controlButton")
	document.getElementById("mainBody").appendChild(pauseButton)
	pauseButton.innerHTML = "<h1>Pause</h1>"
	pauseButton.addEventListener("click", function(){
		audioPlayer.pause()
	})

	var playButton = document.createElement("div")
	playButton.setAttribute("id", "playButton")
	playButton.classList.add("controlButton")
	document.getElementById("mainBody").appendChild(playButton)
	playButton.innerHTML = "<h1>Play</h1>"
	playButton.addEventListener("click", function(){
		audioPlayer.play()
	})


}




var audioFileList = []

var trackCounter = 0
function AddAudioFile(trackname, tracklocation) {

	trackCounter += 1
	
	this.trackname = trackname
	this.tracklocation = tracklocation
	
	var newDiv = document.createElement("div")
	newDiv.setAttribute("id", "track"+ trackCounter) 
	trackID = newDiv.getAttribute("id")
	newDiv.classList.add("audioFile")
	document.getElementById("mainBody").appendChild(newDiv)
	newDiv.innerHTML = "<h4>" + this.trackname + "</h4>"

	makeClickable(this.tracklocation, this.trackID)
	
	function makeClickable(place, trackID){
		document.getElementById("track"+trackCounter).addEventListener("click", function(){
			audioPlayer.src = place
			audioPlayer.play()
		})

	}
}

function newAudioFile (trackname, tracklocation){
	this.audioFile = new AddAudioFile(trackname, tracklocation)
	audioFileList.push(this.audioFile)
}

function getIndex(){
	index = audioFileList.findIndex(i => i.tracklocation == audioPlayer.src)
	return index
}
			function nextTrack(){
				document.getElementById("audioPlayer").addEventListener("ended", function(){
					nextIndex = getIndex()
					audioPlayer.src = audioFileList[nextIndex += 1].tracklocation
					audioPlayer.play()
				})
			}

