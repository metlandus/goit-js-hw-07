function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
let input = document.querySelector('#controls input');
const createBtn = document.querySelector('#controls button[data-create]');
const buttonDestroy = document.querySelector('#controls button[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
	const amount = parseInt(input.value, 10);
	createBoxes(amount);
});

function createBoxes(amount) {
	for (let i = 0; i < amount; i++) {
		// create a box for each amount
		const box = document.createElement('div');
		box.style.width = `${30 + i * 10}px`;
		box.style.height = `${30 + i * 10}px`;
		box.style.backgroundColor = getRandomHexColor();
		// place the boxes in the boxes div
		boxes.appendChild(box);
	}
}

const destroyBoxes = () => {
	// remove all boxes from the boxes div
	boxes.innerHTML = ''; 	
}
buttonDestroy.addEventListener('click', destroyBoxes);