function getAudioPlayer(){
	document.getElementById("mainBody").innerHTML = "<audio type='audio/mp3' controls id='audioPlayer'></audio>"
	var audioPlayer = document.getElementById("audioPlayer")

	audioFile1 = new AddAudioFile("1. Truckin", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t01.mp3")
	audioFile2 = new AddAudioFile("2. Loser", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t02.mp3")
	audioFile3 = new AddAudioFile("3. Hard To Handle", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t03.mp3")
	audioFile4 = new AddAudioFile("4. Me And Bobby McGee", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t04.mp3")
	audioFile5 = new AddAudioFile("5. Cold Rain And Snow", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t05.mp3")
	audioFile6 = new AddAudioFile("6. The Rub", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t06.mp3")
	audioFile7 = new AddAudioFile("7. Playing In The Band", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t07.mp3")
	audioFile8 = new AddAudioFile("8. Friend Of The Devil", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t08.mp3")
	audioFile9 = new AddAudioFile("9. China Cat Sunflower ->", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t09.mp3")
	audioFile10 = new AddAudioFile("10. I Know You Rider", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t10.mp3")
	audioFile11 = new AddAudioFile("11. Casey Jones", "https://www.archive.org/download/gd1971-04-25.sbd.matera.113038.sbeok.flac16/gd71-04-25d1t11.mp3")
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
	newDiv.innerHTML = "<h4>" + this.trackname + "</h4>"

	makeClickable(this.tracklocation)
}

function makeClickable(place){
		document.getElementById("track" + trackCounter).addEventListener("click", function(){
			audioPlayer.src = place
			audioPlayer.play()
		})
	}