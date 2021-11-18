const position = document.documentElement;
position.addEventListener('mousemove', e => {
    position.style.setProperty('--x', e.clientX + 'px');
})