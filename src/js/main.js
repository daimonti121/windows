import './slider';

console.log(1);

const modalTrigger = document.querySelector('.popup_engineer_btn');
const btnClose = document.querySelectorAll('.popup_close');

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}



modalTrigger.addEventListener('click', () => {
    openModal('.popup_engineer');
});

btnClose.forEach(item => {
    item.addEventListener('click', () => {
        closeModal('.popup_engineer');
    });
})

document.addEventListener('keydown', (e) => {
    if(e.code === 'Escape') {
        closeModal('.popup_engineer');
    }
})

const modal = document.querySelector('.popup_engineer');

modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        closeModal('.popup_engineer');
    }
})
