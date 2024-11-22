var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	volumeSlider = document.querySelector("#slider");
	video.autoplay = false;
	console.log(`Auto play is set to ${video.autoplay}`);
	video.loop = false;
	console.log(`Loop is set to ${video.loop}`);
});
// Converts slider into range [0, 1] volume needs
function getVolume(slider) {
	return slider.value * 0.01;
}
// Sets video to volume denoted by slider
function updateVolume(video, slider) {
	video.volume = getVolume(slider);
	// Render volume percentage as text to the page
	document.querySelector("#volume").textContent = `${video.volume * 100}%`;
}

document.querySelector("#play").addEventListener("click", function() {
	updateVolume(video, volumeSlider);
	video.play();
	console.log("Play Video");
})

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
})


