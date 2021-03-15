let sounds = document.querySelectorAll(".sound");
let cord = document.querySelectorAll(".cord");
const box = document.getElementById("box");
const pianoKeys = [
	"a",
	"s",
	"d",
	"f",
	"g",
	"h",
	"j",
	"k",
	"l",
	"z",
	"x",
	"c",
	"v",
	"b",
	"n",
	"m",
	"q",
	"w",
	"e",
	"r",
];

cord.forEach((note, index) => {
	note.addEventListener("click", () => {
		box.style.visibility = "hidden";
		playPiano(index);
	});
});

document.addEventListener("keydown", (e) => {
	if (e.repeat) return;
	const key = e.key;
	if (pianoKeys.includes(key)) {
		// console.log(pianoKeys.indexOf(key));
		let i = pianoKeys.indexOf(key);
		console.log(i);
		playPiano(i);
	}
});

playPiano = (i) => {
	sound = sounds[i];
	sound.currentTime = 0;
	cord[i].classList.add("active");
	sound.play();
	setTimeout(() => {
		cord[i].classList.remove("active");
	}, 300);
	// sound.addEventListener("ended", () => {
	// 	cord[i].classList.remove("active");
	// });
};

box.addEventListener("click", () => {
	alert("click on piano notes to begin");
});
