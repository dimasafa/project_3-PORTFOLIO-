// modal










function closeModal() {
    const close = document.querySelector('[data-close]');
    const modal = document.querySelector('.modal');

    modal.style.display = "none";
    document.body.style.overflow = '';
    close.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            closeModal();
        }
    });
    

}

function openModal() {
    const modalTrigger = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');

    modalTrigger.forEach(item => {
        item.addEventListener('click', openModal);
    });

    modal.style.display = "block";
    document.body.style.overflow = 'hidden';
}



export default modal;
export {closeModal};
export {openModal};