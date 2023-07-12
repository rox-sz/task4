const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close-menu')
const nav2 = document.querySelector('.nav2')
const projects = document.querySelector('.projects')

hamburger.addEventListener('click', () => {
    hamburger.classList.add('hide');
    close.classList.remove('hide');
    nav2.classList.toggle('visible');
    projects.classList.add('hide');

})

close.addEventListener('click', () => {
    hamburger.classList.remove('hide');
    close.classList.add('hide');
    nav2.classList.toggle('visible');

})