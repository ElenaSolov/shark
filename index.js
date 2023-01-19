const networksBtn = document.querySelector('.button__networks');
const blogBtn = document.querySelector('.button__blog');
const aboutBtn = document.querySelector('.button__about');
const shark = document.querySelector('.shark__container');

blogBtn.addEventListener('click', moveCenter);
networksBtn.addEventListener('click', moveLeft);
aboutBtn.addEventListener('click', moveRight);


function moveCenter () {
    shark.classList.remove('shark_position_left');
    shark.classList.remove('shark_position_right');

    shark.classList.add('shark_position_center');
}

function moveLeft () {
    shark.classList.remove('shark_position_center');
    shark.classList.remove('shark_position_right');

    shark.classList.add('shark_position_left');
}

function moveRight () {
    shark.classList.remove('shark_position_center');
    shark.classList.remove('shark_position_left');

    shark.classList.add('shark_position_right');
}