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

    if(time) {
        clearInterval(time);
    }
}

// const time = setInterval(() => openModal('.popup_engineer'), 6000);

function modal(triggerSelector, modalSelector) {
    const modalTrigger = document.querySelector(triggerSelector);
    const modal = document.querySelector(modalSelector);

    modalTrigger.addEventListener('click', () => {
        openModal(modalSelector);
    });

    const btnClose = document.querySelectorAll('.popup_close');

    btnClose.forEach(item => {
        item.addEventListener('click', () => {
            closeModal(modalSelector);
        });
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            closeModal(modalSelector);
        }
    })

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modalSelector);
        }
    })
}

export default modal;
export { openModal }
export { closeModal }