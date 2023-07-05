const sections = document.querySelectorAll('.section');
const sectionButtons = document.querySelectorAll('.controls');
const sectionsButton = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const themeButton = document.querySelector('.theme-button');

function PageTransitions(){
    // active buttons
    for(let i = 0; i < sectionButtons.length; i++){
        sectionButtons[i].addEventListener('click', (ev) => {
            let currentButton = document.querySelectorAll('.active-btn');
            currentButton[0].classList.remove('active-btn');
            ev.target.classList.add('active-btn');
        });
    }

    // active sections
    allSections.addEventListener('click', (ev) => {
        const id = ev.target.dataset.id;
        if(id){
            sections.forEach( (section) => {
                section.classList.remove('active');
            });
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

    // light theme toggle
    themeButton.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    });
}

PageTransitions();