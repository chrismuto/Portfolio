let spinner = document.getElementById("spinner");
let headshot = document.getElementById("headshot");
let container = document.getElementById("spinner-container");

container.addEventListener('mouseover', () => {
    spinner.style.transform = 'rotate(180deg) scale(1.2)';
    headshot.style.transform = 'scale(1.2)';
})

container.addEventListener('mouseout', () => {
    spinner.style.transform = 'rotate(0deg) scale(1)';
    headshot.style.transform = 'scale(1)';
})