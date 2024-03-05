const illumination = document.querySelector('.illumination');

document.addEventListener('mousemove', (e) => {
    illumination.style.setProperty('--x', e.clientX + 'px');
    illumination.style.setProperty('--y', e.clientY + 'px');
});
