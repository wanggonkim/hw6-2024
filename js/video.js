let video;
let volumeSlider;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	volumeSlider = document.querySelector("#slider");
	video.autoplay = false;
	console.log(`Auto play is set to ${video.autoplay}`);
	video.loop = false;
	console.log(`Loop is set to ${video.loop}`);
});

document.querySelector("#play").addEventListener("click", function() {
	updateVolume(video, volumeSlider);
	video.play();
	console.log("Play Video");
})
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
})

// Slow down by 10%
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	updateSpeed(video, 90 / 100);
})

// Speed up by 10%
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	updateSpeed(video, 100 / 90);
})
// Skip ten seconods
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	let currentTime = video.currentTime;
	let newTime = 10 + currentTime;
	// If end of video is reached or exceded, go back to 0:00 exactly
	if (newTime >= video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = newTime;
	}
	console.log(`Video current time is ${video.currentTime}`);
})
// Mute video
document.querySelector("#mute").addEventListener("click", function() {
	console.log(this.textContent);
	video.muted = !video.muted;
	let muted = video.muted;
	let newText;
	if (muted) {
		newText = "Unmute";
	}
	else {
		newText = "Mute";
	}
	this.textContent = newText;
})
// Slider
function updateVolume(video, slider) {
	video.volume = getVolume(slider);
	document.querySelector("#volume").textContent = `${video.volume * 100}%`;
}

// Converts slider into range [0, 1] 
function getVolume(slider) {
	return slider.value * 0.01;
}
// Adjust volume when range input slider is changed
document.querySelector("#slider").addEventListener("input", function() {
	console.log(`The current value is ${this.value / 100}`);
	updateVolume(video, volumeSlider);
	console.log(document.querySelector("#volume"));
})
// Style with oldSchool
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
})

// Remove oldSchool 
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
})


// Utility function to update video playbackRate
function updateSpeed(video, scaler) {
	video.playbackRate *= scaler;
	// Set speed to exactly 100% when close to mitigate accumulating error
	if (video.playbackRate > 0.99 && video.playbackRate < 1.01) {
		video.playbackRate = 1.0;
	}
	console.log(`Speed is ${video.playbackRate}`);
}










