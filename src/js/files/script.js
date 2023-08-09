// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


function progressBarAndNumber(the100percent = 100, endValue = 92, speed = 10, startValue = 0, objectProgressClass = ".circular-progress", objectValueClass = ".progress-value") {

	const objectProgress = document.querySelector(objectProgressClass)
	const objectValue = document.querySelector(objectValueClass)

	// let startValue = 0,
		// endValue = 92,
		// speed = 10;

	let progress = setInterval(() => {
		startValue++;

		objectValue.textContent = `${startValue}%`;

		objectProgress.style.background = `conic-gradient(#7d2ae8 ${startValue * 3.6}deg, #ededed 0deg)`;
		//3.6deg * 100 = 360deg
		//3.6deg * 90 = 324deg

		if (startValue == endValue) {
			clearInterval(progress);
		}
		// console.log(startValue);
	}, speed);
}

progressBarAndNumber();