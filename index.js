const menuOpener = document.getElementById('open-menu');
const menuCloser = document.getElementById('close-menu');
const menuDisplay = document.querySelector('.shown');
const body = document.body;

menuOpener.addEventListener('click', () => { 
    body.style.background = 'rgba(00, 00, 36, 0.5)'
    menuDisplay.style.right = '0';
});
menuCloser.addEventListener('click', () => { 
    body.style.background = 'var(--main-bg-color)'
    menuDisplay.style.right = '-100%';
});