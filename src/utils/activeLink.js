export const activeLink = () => {
    const allBlocks = document.querySelectorAll('.commonClass');

    window.addEventListener('scroll', (e) => {
        allBlocks.forEach(item => {
            if(item.getBoundingClientRect().top < 100 && item.getBoundingClientRect().top > -400) {
                document.querySelectorAll(`.${item.id}`).forEach(el => {
                    el.classList.add('active-link');
                })
            } else {
                document.querySelectorAll(`.${item.id}`).forEach(el => {
                    el.classList.remove('active-link');
                })
            }
        });
    })
};
