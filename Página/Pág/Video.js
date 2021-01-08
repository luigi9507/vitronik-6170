const historia = document.querySelector('#modulo-01');
const video = historia.querySelector('.video');

//SCROLL MAGIC
const controller = new ScrollMagic.Crontoller ();

let scene = new ScrollMagic.Scene ({
	duration: 9000,
	triggerElemnt: video,
	triggerHook: 0
})
.addIndicators()
.setPin(video)
.addTo(controller);

let scene2 = new ScrollMagic.Scene({
	duration: 3000,
	triggerElemnt: historia,
	triggerHook: 0
});

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0; 

scene.on("update", e => {
	scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
	delay += (scrollpos - delay) * accelamount;
	console.log(scrollpos, delay);
	
	video.currentTime = scrollpos
}, 33.3);