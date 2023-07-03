const sections = document.querySelectorAll('.section');
const sectionButtons = document.querySelectorAll('.controls');
const sectionsButton = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    for(let i = 0; i < sectionButtons.length; i++){
        sectionButtons[i].addEventListener('click', (ev) => {
            let currentButton = document.querySelectorAll('.active-btn');
            currentButton[0].classList.remove('active-btn');
            ev.target.classList.add('active-btn');
        });
    }

    allSections.addEventListener('click', (ev) => {
        const id = ev.target.dataset.id;
        if(id){
            /*sectionButtons.forEach( (btn) => {
                btn.classList.remove('active');
            });
            ev.target.classList.add('active');*/

            sections.forEach( (section) => {
                section.classList.remove('active');
            });
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });
}

PageTransitions();