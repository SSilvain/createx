// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin.js";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
// import { Draggable } from "gsap/Draggable.js";
import { ScrollTrigger } from "gsap/ScrollTrigger.js"

gsap.registerPlugin(ScrollTrigger);

//----------------------------------------------------------------------------------------
//анимация прогрес бара GSAP

// анимация прогрес бара - 1-й вариант
// const progressValueId = document.getElementById("progress-value-id")


// gsap.fromTo(".circular-progress", { y: 0, background: "conic-gradient(#7d2ae8 0deg, #ededed 0deg)" }, {
// 	y: 20, background: `conic-gradient(#7d2ae8 ${95 * 3.6}deg, #ededed 0deg)`, duration: 2,
// 	modifiers: {
// 		y: function (n) {
// 			n = parseInt(n);
// 			progressValueId.textContent = n.toFixed(0) + "%";

// 		}
// 	}
// });


// анимация прогрес бара - 2-й вариант


function progressBarCircleAnimate(elementCircle = ".circular-progress-1", elementValue = "#progress-value-id1", percentCircle = 76, numberValue = 76 + "%", color = "rgba(248, 152, 40, 1)", userDuration = 2) {
	gsap.fromTo(elementCircle, { background: `conic-gradient(${color} 0deg, #ededed 0deg)` }, {
		scrollTrigger: {
			trigger: elementCircle,
			start: "bottom bottom",
		},
		background: `conic-gradient(${color} ${percentCircle * 3.6}deg, #ededed 0deg)`,
		duration: userDuration,
	});
	//вариант анимации цифр
	gsap.fromTo(elementValue,
		{
			textContent: 0,
			color: color,
		}, {
		color: color,
		scrollTrigger: {
			trigger: elementCircle,
			start: "bottom bottom",
		},
		textContent: numberValue,
		duration: userDuration,
		snap: { textContent: 1 }
	});
}
progressBarCircleAnimate()
progressBarCircleAnimate(".circular-progress-2", "#progress-value-id2", 90, 20, "rgba(245, 47, 110, 1)", 3)
progressBarCircleAnimate(".circular-progress-3", "#progress-value-id3", 85, 9452, "rgba(90, 135, 252, 1)", 4)
progressBarCircleAnimate(".circular-progress-4", "#progress-value-id4", 100, "100%", "rgba(3, 206, 164, 1)", 7)



//----------------------------------------------------------------------------------------
//анимация прогрес бара через setInterval
function progressBarAndNumber(the100percent = 100, endValue = 92, speed = 10, startValue = 0, objectProgressClass = ".circular-progress", objectValueClass = ".progress-value") {

	const objectProgress = document.querySelector(objectProgressClass)
	const objectValue = document.querySelector(objectValueClass)

	// let startValue = 0,
	// endValue = 92,
	// speed = 10;

	let progress = setInterval(() => {
		startValue++;

		// objectValue.textContent = `${startValue}%`;

		objectProgress.style.background = `conic-gradient(#7d2ae8 ${startValue * 3.6}deg, #ededed 0deg)`;
		//3.6deg * 100 = 360deg
		//3.6deg * 90 = 324deg

		if (startValue == endValue) {
			clearInterval(progress);
		}
		// console.log(startValue);
	}, speed);
}

// progressBarAndNumber();
//----------------------------------------------------------------------------------------