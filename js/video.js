// let video;
// let volumeSlider;
let video = document.querySelector("#player1");
let volumeSlider = document.querySelector("#slider");




// var video = document.querySelector("#player1");
//window.addEventListener("load", function() {
//	console.log("Good job opening the window");
//	video = document.querySelector("#player1");
//	volumeSlider = document.querySelector("#slider");
//	video.autoplay = false;
//	console.log(`Auto play is set to ${video.autoplay}`);
//	video.loop = false;
//	console.log(`Loop is set to ${video.loop}`);
//});
// window.addEventListener("load", function() {
//     video = document.querySelector("#player1");
//     volumeSlider = document.querySelector("#slider");
//     video.autoplay = false;
//     video.loop = false;
//     console.log(`Auto play is set to ${video.autoplay}`);
//     console.log(`Loop is set to ${video.loop}`);
// });
window.addEventListener("load", function() {
	video = document.querySelector("#player1");
	volumeSlider = document.querySelector("#slider");
	video.autoplay = false;
	video.loop = false;
	console.log(`Auto play is set to ${video.autoplay}`);
	console.log(`Loop is set to ${video.loop}`);
});


//document.querySelector("#play").addEventListener("click", function() {
//	updateVolume(video, volumeSlider);
//	video.play();
//	console.log("Play Video");
//})
document.querySelector("#play").addEventListener("click", function() {
	
	video.play();
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
	console.log("Play Video");
});


document.querySelector("#pause").addEventListener("click", function() {
	
	console.log("Pause Video");
	video.pause();
})

// Slow down by 10%
// document.querySelector("#slower").addEventListener("click", function() {
// 	console.log("Slow down video");
// 	updateSpeed(video, 90 / 100);
// })
document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate *= 0.9;
    console.log(`Speed is` + video.playbackRate);
});

// Speed up by 10%
// document.querySelector("#faster").addEventListener("click", function() {
// 	console.log("Speed up Video");
// 	updateSpeed(video, 100 / 90);
// })

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate /= 0.9;
    console.log(`Speed is` + video.playbackRate);
});

// Skip ten seconods
// document.querySelector("#skip").addEventListener("click", function() {
// 	console.log("Skip ahead");
// 	let currentTime = video.currentTime;
// 	let newTime = 10 + currentTime;
// 	// If end of video is reached or exceded, go back to 0:00 exactly
// 	if (newTime >= video.duration) {
// 		video.currentTime = 0;
// 	}
// 	else {
// 		video.currentTime = newTime;
// 	}
// 	console.log(`Video current time is ${video.currentTime}`);
// })

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}
	console.log("Current location " + video.currentTime);
});

// Mute video
// document.querySelector("#mute").addEventListener("click", function() {
// 	console.log(this.textContent);
// 	video.muted = !video.muted;
// 	let muted = video.muted;
// 	let newText;
// 	if (muted) {
// 		newText = "Unmute";
// 	}
// 	else {
// 		newText = "Mute";
// 	}
// 	this.textContent = newText;
// })

// changing vol
document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value + "%";
	console.log("Volume is " + this.value); //added this to see the volume
	
});

// styling vid
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing to vintage");
	video.classList.add("oldSchool");
});

// removing style
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Changed to original");
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});






