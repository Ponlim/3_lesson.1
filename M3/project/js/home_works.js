const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'ok';
        gmailResult.style.color = 'green';
    } else {
        gmailResult.innerHTML = 'not ok';
        gmailResult.style.color = 'red';
    }
};

const childBlock = document.querySelector('.child_block');
let position = 0;
const targetPosition = 450;

const moveBlock = () => {
    if (position < targetPosition) {
        position += 1;
        childBlock.style.left = `${position}px`;
        requestAnimationFrame(moveBlock);
    }
};

moveBlock();