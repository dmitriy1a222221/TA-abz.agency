export const activeLink = () => {
    const allBlocks = document.querySelectorAll('.commonClass');

    window.addEventListener('scroll', (e) => {
        allBlocks.forEach(item => {
            if(item.getBoundingClientRect().top < 100 && item.getBoundingClientRect().top > -400) {
                document.querySelector(`.${item.id}`).classList.add('b-header__nav-item_active')
            } else {
                document.querySelector(`.${item.id}`).classList.remove('b-header__nav-item_active')
            }
        });
    })
};
