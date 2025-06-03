document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');
    
    document.querySelector('.hero').style.display = 'block';
    
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            
            const targetId = button.getAttribute('href').replace('.html', '').replace('#', '');
            
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                sections.forEach(section => section.style.display = 'none');
                
                targetSection.style.display = 'block';
                targetSection.style.opacity = '0';
                setTimeout(() => {
                    targetSection.style.opacity = '1';
                }, 10);
            }
        });
    });
    
    
    const loadingScreen = document.getElementById('loading-screen');
    function hideLoadingScreen() {
        loadingScreen.classList.remove('active');
    }
    window.addEventListener('load', hideLoadingScreen);
});


const sideButton = document.querySelector('.side-button');
sideButton.addEventListener('mouseenter', () => {
    sideButton.title = 'Visit the site!';
});