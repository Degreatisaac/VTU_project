const toggleOpen = document.querySelector('.hamburger');
const toggleClose = document.querySelector('.close');
const menu = document.querySelector('.menu');

toggleOpen.addEventListener('click', function() {
    menu.classList.toggle('active');
    toggleOpen.style.display='none';
    toggleClose.style.display='block';
});

toggleClose.addEventListener('click', function() {
    menu.classList.toggle('active');
    toggleOpen.style.display='block';
    toggleClose.style.display='none';
});