const nameText = document.getElementById("name");
nameText.addEventListener('animationend', () => {
    nameText.classList.remove('animated');
});
nameText.addEventListener('mouseover', () => {
    nameText.classList.add('animated');
});

const textDisplay = document.getElementById("changing-text");
const phrases = [
	"I like solving problems;",
	"I love modern technologies;",
	"I love to learn new things;",
];
let iWord = 0;
let iLetter = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
	isEnd = false;
	textDisplay.innerHTML = currentPhrase.join("");

	if (iWord < phrases.length) {
		if (!isDeleting && iLetter <= phrases[iWord].length) {
			currentPhrase.push(phrases[iWord][iLetter]);
			iLetter++;
			textDisplay.innerHTML = currentPhrase.join("");
		}

		if (isDeleting && iLetter <= phrases[iWord].length) {
			currentPhrase.pop(phrases[iWord][iLetter]);
			iLetter--;
			textDisplay.innerHTML = currentPhrase.join("");
		}

		if (iLetter == phrases[iWord].length) {
			isEnd = true;
			isDeleting = true;
		}

		if (isDeleting && iLetter === 0) {
			currentPhrase = [];
			isDeleting = false;
			iWord++;
			if (iWord === phrases.length) {
				iWord = 0;
			}
		}
	}
	const spedUp = Math.random() * (80 - 50) + 50;
	const normalSpeed = 100;
	const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
	setTimeout(loop, time);
}

loop();
