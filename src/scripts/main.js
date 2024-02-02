document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('[data-faq-question]');

    // _plans event listener
    window.addEventListener('scroll', plansScroll);

    // _faq accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openCloseButton);
    }
});

function plansScroll() {
    const scrollPosition = window.scrollY;
    const gridHead = document.querySelector('.plans__chart__grid-head');
    const gridBody = document.querySelector('.plans__chart__grid-body');

    // _plans @media (max-width: 768px)
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (isMobile) {
        // Adjusted logic for smaller screens
        if (scrollPosition >= gridBody.offsetHeight - 450 && scrollPosition <= gridBody.offsetHeight + (gridBody.clientHeight + 24)) {
            gridHead.classList.add('plans__chart__grid-head--fixed');
        } else {
            gridHead.classList.remove('plans__chart__grid-head--fixed');
        }
    } else {
        // Default logic for larger screens
        if (scrollPosition >= gridBody.offsetHeight - 150 && scrollPosition <= gridBody.offsetHeight + (gridBody.clientHeight + 130)) {
            gridHead.classList.add('plans__chart__grid-head--fixed');
        } else {
            gridHead.classList.remove('plans__chart__grid-head--fixed');
        }
    }
}

function openCloseButton(event) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = event.target.parentNode;
    elementoPai.classList.toggle(classe);
}
