'use strcict';

const endTime = '2023-07-22';

function getTimeRemaining(endTime) {
	let days, hours, minutes, seconds;
	let remainingTime = Date.parse(endTime) - Date.parse(new Date());

	if (remainingTime > 0) {
		days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
		hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
		minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
		seconds = Math.floor((remainingTime / 1000) % 60);
	} else {
		days = 0;
		hours = 0;
		minutes = 0;
		seconds = 0;
	}

	return {
		remainingTime,
		days,
		hours,
		minutes,
		seconds,
	};
}
function getZero(num) {
	if (num >= 0 && num < 10) {
		return `0${num}`;
	} else {
		return num;
	}
}

function setTime(endTime) {
	const days = document.querySelector('.days'),
		hours = document.querySelector('.hours'),
		minutes = document.querySelector('.minutes'),
		seconds = document.querySelector('.seconds'),
		timeInterval = setInterval(updateClock, 1000);

	updateClock();

	function updateClock() {
		const objTime = getTimeRemaining(endTime);

		days.innerHTML = getZero(objTime.days);
		hours.innerHTML = getZero(objTime.hours);
		minutes.innerHTML = getZero(objTime.minutes);
		seconds.innerHTML = getZero(objTime.seconds);

		if (objTime.remainingTime <= 0) {
			clearInterval(timeInterval);
		}
	}
}

setTime(endTime);
