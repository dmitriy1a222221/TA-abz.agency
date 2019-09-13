export const stickyBlock = (id = "header") => {
    const block = document.getElementById(id),
          sticky = block.getBoundingClientRect().height;

    window.addEventListener('scroll', () => {
        stickyClass();
    });

     function stickyClass() {
        const pageTop = window.pageYOffset;

        if (pageTop > sticky) {
            block.classList.add("sticky");
        } else {
            block.classList.remove("sticky");
        }
    }
};
