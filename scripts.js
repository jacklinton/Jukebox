var audioFileList = []
var trackCounter = 0


function Jukebox(){
	getAudioPlayer()
	nextTrack()

	function getAudioPlayer(){

	document.getElementById("playerBody").innerHTML = "<audio type='audio/mp3' controls id='audioPlayer' class='audioElement'></audio>"
	this.audioPlayer = document.getElementById("audioPlayer")
	
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

	
	this.newTrackButton = document.createElement("div")
		newTrackButton.setAttribute("id", "newTrackButton")
		newTrackButton.setAttribute("class", "btn btn-primary")
		document.getElementById("playerBody").appendChild(newTrackButton)
		newTrackButton.innerHTML = "<i class='glyphicon glyphicon-plus-sign'></i>"
		newTrackButton.addEventListener("click", function(){
			newTrack = prompt("Please enter the name of the track you wish to add.")
			newLocation = prompt("Paste the full URL of the track here.")
			newAudioFile(newTrack, newLocation)
		})
	
	this.pauseButton = document.createElement("div")
		pauseButton.setAttribute("id", "pauseButton")
		pauseButton.setAttribute("class", "btn btn-primary")
		document.getElementById("playerBody").appendChild(pauseButton)
		pauseButton.innerHTML = "<i class= 'glyphicon glyphicon-pause'></i>"
		pauseButton.addEventListener("click", function(){
			audioPlayer.pause()
		})

	this.playButton = document.createElement("div")
		playButton.setAttribute("id", "playButton")
		playButton.setAttribute("class", "btn btn-primary")
		document.getElementById("playerBody").appendChild(playButton)
		playButton.innerHTML = "<i class='glyphicon glyphicon-play-circle'</i>"
		playButton.addEventListener("click", function(){
			audioPlayer.play()
		})

	this.downloadButton = document.createElement("div")
		downloadButton.setAttribute("id", "downloadButton")
		downloadButton.setAttribute("class", "btn btn-primary")
		document.getElementById("playerBody").appendChild(downloadButton)
		downloadButton.innerHTML = "<i class='glyphicon glyphicon-download-alt'</i>"
		downloadButton.addEventListener("click", function(){
			audioPlayer.download()
		})
	}






	

	
	function AddAudioFile(trackname, tracklocation) {

		trackCounter += 1
	
		this.trackname = trackname
		this.tracklocation = tracklocation
	
		var newDiv = document.createElement("div")
		newDiv.setAttribute("id", "track"+ trackCounter) 
		trackID = newDiv.getAttribute("id")
		newDiv.classList.add("audioFile")
		document.getElementById("playList").appendChild(newDiv)
		newDiv.innerHTML = "<h4>" + this.trackname + "</h4>"

		makeClickable(this.tracklocation, this.trackID)
	
		function makeClickable(place, trackID){
			document.getElementById("track"+trackCounter).addEventListener("click", function(){
				this.index = audioFileList.findIndex(i => i.tracklocation == place)
				this.prevTrack = audioFileList.findIndex(i => i.tracklocation == audioPlayer.src)
				if (this.prevTrack != -1) {
					document.getElementById("track"+(this.prevTrack+1)).classList.remove("currentTrack")
				}
				document.getElementById("track"+(this.index+1)).classList.add("currentTrack")
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
		this.index = audioFileList.findIndex(i => i.tracklocation == audioPlayer.src)
		return index
	}

	function nextTrack(){
		document.getElementById("audioPlayer").addEventListener("ended", function(){
		nextIndex = getIndex()	
		if (nextIndex < (audioFileList.length-1)) {
			audioPlayer.src = audioFileList[nextIndex += 1].tracklocation
			document.getElementById("track" + (nextIndex += 1)).classList.remove("currentTrack")
			document.getElementById("track" + (nextIndex += 2)).classList.add("currentTrack")
		}
		else {
			audioPlayer.src = audioFileList[0].tracklocation
			document.getElementById("track" + (nextIndex += 1)).classList.remove("currentTrack")
			document.getElementById("track1").classList.add("currentTrack")
		}
		audioPlayer.play()
		})
	}

}