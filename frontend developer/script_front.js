document.querySelectorAll('section').forEach((section) => {
    section.addEventListener('mouseover', () => {
        section.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
    });

    section.addEventListener('mouseout', () => {
        section.style.boxShadow = 'none';
    });
});

document.querySelector('button').addEventListener('click', () => {
    window.location.href = 'contact.html'; 
});
document.querySelector('#contact-button').addEventListener('click', () => {
    window.location.href = 'contact.html'; 
});
