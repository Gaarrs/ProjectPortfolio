window.onload = function() {
    let up = document.querySelector('.up');
    window.addEventListener('scroll', function() {
        if (this.pageYOffset > 800) {
            up.classList.add('visible');
            up.classList.remove('hide');
        } else {
            up.classList.add('hide');
            up.classList.remove('visible');
        };
        this.console.log(this.pageYOffset);
    });

    up.addEventListener('click', () => {
        window.scrollTo(pageYOffset, 0);
    });
};